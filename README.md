# Cloudinary Node.js
## Description
Cloudinary Node.js is a simple Node.js application that demonstrates how to upload images to Cloudinary. 

The application provides a simple API endpoint for uploading a single image or multiple images to Cloudinary.

### Features
Upload single or multiple images to Cloudinary.
Accepts only JPEG, JPG, and PNG file formats.
Each uploaded image is assigned a unique public ID.
The uploaded images are stored in the car_images folder on Cloudinary.

### Technologies Used
* Node.js
* Express.js
* Cloudinary
* Multer

## How to Use
1. Clone the repository.
 ```bash
  git clone https://github.com/your-username/cloudinary-nodejs.git
   ```

2. Install the dependencies.
    
    ```bash
   npm install
   ```

3. Set the following environment variables with your Cloudinary API credentials.
```bash
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
   ```

4. Start the application.

  ```bash
   npm start
   ```

## API Endpoints
### Upload Single Image
* URL: /api/photo/upload
* Method: POST
* Request Body: multipart/form-data with the image file.
* Response Body: JSON object containing the public URL of the uploaded image.

### Upload Multiple Images
* URL: /api/photos/upload
* Method: POST
* Request Body: multipart/form-data with an array of image files.
* Response Body: JSON array containing the public URLs of the uploaded images.

## Author
This Cloudinary Node.js application was developed by AnshSheladiya.

## Credits
This application was created using the following technologies:
Node.js
Express.js
Cloudinary
Multer
