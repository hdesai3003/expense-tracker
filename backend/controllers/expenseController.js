const xlsx = require("xlsx")
const Expense = require("../models/Expense")

// Add expense
exports.addExpense = async (req, res) => {
    const userId = req.user.id
    try {
        const { icon, category, amount, date } = req.body

        // Validation: Check for missing fields
        if (!category || !amount || !date) {
            return res.status(400).json({ message: "All fields are required" })
        }
        const newExpense = await Expense({
            userId,
            icon,
            category,
            amount,
            date: new Date(date)
        })
        await newExpense.save()
        res.status(201).json(newExpense)
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
}
// Get all expense
exports.getAllExpense = async (req, res) => {
    const userId = req.user.id
    try {
        const expense = await Expense.find({ userId }).sort({ date: -1 })
        res.json(expense)
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
}
// Delete expense
exports.deleteExpense = async (req, res) => {
    try {
        await Expense.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Expense deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
}
// Get expense excel
exports.downloadExpenseExcel = async (req, res) => {
    const userId = req.user.id
    try {
        const expense = await Expense.find({ userId }).sort({ date: -1 })
        // Prepare the data for the Excel file
        const data = expense.map((item) => ({
            "Category": item.category,
            "Amount": item.amount,
            "Date": item.date,
        }));
        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb, ws, "Expense");
        xlsx.writeFile(wb, "expense_details.xlsx");
        res.download("expense_details.xlsx");
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
}