const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const { processExcelFile, haveJson } = require('./controllers/getFiles');
const {getFilesInFolder} = require('./controllers/archives')

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
app.get('/json/:category',haveJson);
app.post('/upload/:category/:filename', upload.single('excelFile'), processExcelFile);
app.get('/archives/uploads/:category',getFilesInFolder);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
