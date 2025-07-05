const multer = require("multer");

// Configure storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

// File filter
const fileFilter = (req, file, cb) => {
    const alloedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (alloedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Only JPG, JPEG, and PNG files are allowed"));
    }
};

// Multer middleware
const upload = multer({ storage, fileFilter });

module.exports = upload;