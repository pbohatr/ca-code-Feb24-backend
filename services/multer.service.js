const multer = require("multer");
const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const { CloudinaryStorage } = require('multer-storage-cloudinary');
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
console.log("hjhj", process.env.CLOUDINARY_CLOUD_NAME, process.env.CLOUDINARY_API_KEY, process.env.CLOUDINARY_API_SECRET)

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'your_folder_name',

    },
});

console.log("storage", storage)


const upload = multer({ storage: storage });
console.log("upload", upload)

const cpCities = upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },


]);

const imageUploadMiddleware = (fieldName) => (req, res, next) => {
    // console.log("outer single error>")
    upload.single(fieldName)(req, res, (err) => {
        if (err) { 

            console.error("Multer error:", err);
            res.status(500).json({ error: "File upload failed" });
        } else {
            console.log("file upload successfull");
            next();
        }
    });
};


module.exports = { imageUploadMiddleware,cpCities };