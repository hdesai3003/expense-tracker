export const BASE_URL = "https://node-expense-backend.onrender.com/api/v1"

// utils/apiPaths.js
export const API_PATHS = {
    AUTH: {
        LOGIN: "/auth/login",
        REGISTER: "/auth/register",
        GET_USER_INFO: "/auth/getUser",
    },
    DASHBOARD: {
        GET_DATA: "/dashboard",
    },
    INCOME: {
        ADD_INCOME: "income/add",
        GET_ALL_INCOME: "income/get",
        DELETE_INCOME: (incomeId) => `income/delete/${incomeId}`,
        DOWNLOAD_INCOME_EXCEL: "income/downloadexcel",
    },
    EXPENSE: {
        ADD_EXPENSE: "expense/add",
        GET_ALL_EXPENSE: "expense/get",
        DELETE_EXPENSE: (expenseId) => `expense/delete/${expenseId}`,
        DOWNLOAD_EXPENSE_EXCEL: "expense/downloadexcel",
    },
    IMAGE: {
        UPLOAD_IMAGE: "/auth/upload-image",
    },
}
