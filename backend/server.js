const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const { processExcelFile, haveJson } = require('./controllers/getFiles');

const app = express();
const port = 3001;

// Set up the storage for multer
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedExtensions = ['.xlsx'];
    const fileExtension = path.extname(file.originalname).toLowerCase();
    if (allowedExtensions.includes(fileExtension)) {
      cb(null, true); // Accept the file
    } else {
      cb(new Error('Invalid file type. Only XLSX files are allowed.'), false);
    }
  },
});

// Middleware
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/json',haveJson);
app.post('/upload/:fileName', upload.single('excelFile'), processExcelFile);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
