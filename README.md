Cloudinary Node.js
Description
Cloudinary Node.js is a simple Node.js application that demonstrates how to upload images to Cloudinary. The application provides a simple API endpoint for uploading a single image or multiple images to Cloudinary.

Features
Upload single or multiple images to Cloudinary.
Accepts only JPEG, JPG, and PNG file formats.
Each uploaded image is assigned a unique public ID.
The uploaded images are stored in the car_images folder on Cloudinary.
Technologies Used
Node.js
Express.js
Cloudinary
Multer
How to Use
Clone the repository.
bash
Copy code
git clone https://github.com/your-username/cloudinary-nodejs.git
Install the dependencies.
bash
Copy code
npm install
Set the following environment variables with your Cloudinary API credentials.
bash
Copy code
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
Start the application.
bash
Copy code
npm start
API Endpoints
Upload Single Image
URL: /api/photo/upload
Method: POST
Request Body: multipart/form-data with the image file.
Response Body: JSON object containing the public URL of the uploaded image.
Upload Multiple Images
URL: /api/photos/upload
Method: POST
Request Body: multipart/form-data with an array of image files.
Response Body: JSON array containing the public URLs of the uploaded images.
Credits
Express.js
Cloudinary
Multer
License
MIT