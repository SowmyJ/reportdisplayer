// // controllers/getFiles.js
const fs = require('fs').promises;
const path = require('path');

const getFilesInFolder = async (req, res) => {
  try {
    const folderName = req.params.category;
    const folderPath = path.join(__dirname, '..', 'uploads',folderName);

    // Read the files in the specified folder
    const files = await fs.readdir(folderPath);

    // Send the list of files as a response
    res.json({ files });
  } catch (error) {
    console.error('Error getting files:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
// controllers/getFiles.js

// controllers/getFiles.js
// const fsPromises = require('fs').promises;
// const path = require('path');
// const archiver = require('archiver');

// const getFilesInFolder = async (req, res) => {
//   try {
//     const folderName = req.params.category;
//     const folderPath = path.join(__dirname, '..', 'uploads', folderName);

//     // Create a ZIP archive
//     const archive = archiver('zip', {
//       zlib: { level: 9 } // Set compression level
//     });

//     // Set the response headers
//     res.attachment(`${folderName}.zip`);
//     archive.pipe(res);

//     // Add all files and subfolders from the specified folder to the archive (recursive)
//     archive.directory(folderPath, false);

//     // Finalize the archive and send it as the response
//     archive.finalize();
//   } catch (error) {
//     console.error('Error creating ZIP archive:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

module.exports = { getFilesInFolder };
