// Import required packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { cloudinary, parser } = require('./utils/cloudinaryHelper'); // Import cloudinary and multer parser

// Set the port number from the environment variable or use 3000 as default
const port = process.env.PORT || 3000;

// Create an instance of the Express application
const app = express();

// Add middleware to parse incoming JSON data and enable CORS
app.use(bodyParser.json());
app.use(cors());

// Define a route for the root URL that returns a "Hello, World!" message
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route for uploading a file
app.post('/api/photo/upload', parser.single('file'), async (req, res) => {
  try {
    // Upload the file to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Return the public URL of the uploaded file
    res.json(result.secure_url);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Could not upload file' });
  }
});

// Define route for uploading multiple images
app.post('/api/photos/upload', parser.array('files', 10), async (req, res) => {
    try {
      // Map over the array of uploaded files and upload each to Cloudinary
      const results = await Promise.all(req.files.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path);
        return result.secure_url;
      }));
  
      // Return an array of public URLs for the uploaded files
      res.json(results);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Could not upload files' });
    }
  });
  

// Start the server and listen for incoming requests on the specified port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
