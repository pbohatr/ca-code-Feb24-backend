const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadImages = async (req, res, next) => {
  try {

    if (req.files) {
      const uploads = [];

      if (req.files.companyLogo) {
        uploads.push(
          cloudinary.uploader.upload(req.files.companyLogo.tempFilePath, {
            folder: 'companyLogo'
          }).then(result => {
            req.body.companyLogo = result.secure_url;
          })
        );
      }

      if (req.files.signature) {
        uploads.push(
          cloudinary.uploader.upload(req.files.signature.tempFilePath, {
            folder: 'signature'
          }).then(result => {
            req.body.signature = result.secure_url;
          })
        );
      }

      await Promise.all(uploads);
    }
    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = uploadImages;
