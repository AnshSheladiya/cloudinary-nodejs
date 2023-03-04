const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

// Configure Cloudinary with API credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Cloudinary storage with desired parameters
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'car_images', // Name of the folder where images will be stored
    allowed_formats: ['jpg', 'jpeg', 'png'], // Allowed image formats
    public_id: (req, file) => `${Date.now()}-${file.originalname}`, // Public ID for each image
  },
});

// Create a multer parser with Cloudinary storage
const parser = multer({ storage: storage });

// Export the Cloudinary object and parser for use in other files
module.exports = { cloudinary, parser };
