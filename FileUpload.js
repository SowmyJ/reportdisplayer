import React, { useState, useRef } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';

const FileUpload = () => {
  const [category, setCategory] = useState('Insight');
  const [file, setFile] = useState(null);
  const [uploadedFilename, setUploadedFilename] = useState(null);
  const fileInputRef = useRef(null);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert('Please select a file.');
      return;
    }
  
    const formData = new FormData();
    formData.append('excelFile', file);
  
    // Replace 'http://localhost:3001' with your actual backend server URL
    const categories = encodeURIComponent(category);
    const filename = encodeURIComponent(file.name);
    axios.post(`http://localhost:3001/upload/${categories}/${filename}`, formData)
      .then(response => {
        console.log(response.data);
        setUploadedFilename(file.name);
        // Handle the response or update the UI as needed
      })
      .catch(error => {
        console.error(error);
        // Handle errors appropriately
      });
  };
  
  

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const droppedFile = e.dataTransfer.files[0];
    console.log('Dropped file:', droppedFile);

    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleDivClick = () => {
    // Trigger file input click programmatically
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <div className="full-width-border">
        <Container className="container">
          Uploads
        </Container>
      </div>
      <div>
        <label style={{margin: '15px 5px',}}>Choose an asset : </label><br></br>
        <select className={`dropdown-button`} value={category} onChange={handleCategoryChange}>
          <option value="Insight">Insight</option>
          <option value="Unisecure">Unisecure</option>
          <option value="Unitrace">Unitrace</option>
          <option value="SupplySense">SupplySense</option>
          {/* Add more options for other tabs */}
        </select>
      </div>
      <div>
        <label style={{margin: '15px 5px',}}>Click to upload </label>
        <input
          type="file"
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />

        <div
          style={{ border: '2px dashed #ccc', padding: '30px', textAlign: 'center', cursor: 'pointer'}}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={handleDivClick}
        >
          <p>Drag and drop a file here or click to upload</p>
        </div>
          <p style={{color:'#545859',fontSize:'13px'}}>Note : File Format is XLXS</p>
        <button className={`extract-button`}onClick={handleUpload}>Extract</button>
        {uploadedFilename && (
          <p>File '{uploadedFilename}' uploaded successfully!</p>
        )}
      </div>
    </div>
  );
};

export default FileUpload;














// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import Container from 'react-bootstrap/Container';

// const FileUpload = () => {
//   const [category, setCategory] = useState('tab1');
//   const [file, setFile] = useState(null);
//   const fileInputRef = useRef(null);

//   const handleCategoryChange = (event) => {
//     setCategory(event.target.value);
//   };

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleUpload = () => {
//     if (!file) {
//       alert('Please select a file.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);

//     // Replace 'http://localhost:3001' with your actual backend server URL
//     axios.post(`http://localhost:3001/upload/${category}`, formData)
//       .then(response => {
//         console.log(response.data);
//         // Handle the response or update the UI as needed
//       })
//       .catch(error => {
//         console.error(error);
//         // Handle errors appropriately
//       });
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();

//     const droppedFile = event.dataTransfer.files[0];
//     console.log('Dropped file:', droppedFile);

//     // You can also trigger the file input's change event manually
//     if (droppedFile) {
//       const newEvent = new MouseEvent('change', { bubbles: true });
//       fileInputRef.current.dispatchEvent(newEvent);
//     }
//   };

//   return (
//     <div>
//       <div className="full-width-border">
//         <Container className="container">
//           Uploads
//         </Container>
//       </div>
//       <div>
//         <label>Choose an asset : </label>
//         <select value={category} onChange={handleCategoryChange}>
//           <option value="tab1">Insight</option>
//           <option value="tab2">Unisecure</option>
//           <option value="tab3">Unitrace</option>
//           <option value="tab4">SupplySense</option>
//           {/* Add more options for other tabs */}
//         </select>
//       </div>
//       <div>
//         <label>Click to upload </label>
//         <input
//           type="file"
//           onChange={handleFileChange}
//           ref={fileInputRef}
//           style={{ display: 'none' }}
//         />

//         <div
//           style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}
//           onDragOver={handleDragOver}
//           onDrop={handleDrop}
//         >
//           <p>Drag and drop a file here</p>
//         </div>

//         <button onClick={handleUpload}>Extract</button>
//       </div>
//     </div>
//   );
// };

// export default FileUpload;





















// import React, { useState } from 'react';
// import axios from 'axios';
// import Container from 'react-bootstrap/Container';

// const FileUpload = () => {
//   const [category, setCategory] = useState('tab1');
//   const [file, setFile] = useState(null);

//   const handleCategoryChange = (event) => {
//     setCategory(event.target.value);
//   };

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleUpload = () => {
//     if (!file) {
//       alert('Please select a file.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);

//     // Replace 'http://localhost:3001' with your actual backend server URL
//     axios.post(`http://localhost:3001/upload/${category}`, formData)
//     axios.post(`http://localhost:3001/json`, formData)
//       .then(response => {
//         console.log(response.data);
//         // Handle the response or update the UI as needed
//       })
//       .catch(error => {
//         console.error(error);
//         // Handle errors appropriately
//       });
//   };

//   return (
//     <div>
//       <div className="full-width-border">
//           <Container className="container">
//             Uploads
//           </Container>
//         </div>
//       <div>
//         <label>Choose an asset : </label>
//         <select value={category} onChange={handleCategoryChange}>
//           <option value="tab1">Insight</option>
//           <option value="tab2">Unisecure</option>
//           <option value="tab3">Unitrace</option>
//           <option value="tab4">SupplySense</option>
//           {/* Add more options for other tabs */}
//         </select>
//       </div>
//       {/* <div>
//         <label>Click to upload </label>
//         <input type="file" onChange={handleFileChange} />
//       </div>
//       <button onClick={handleUpload}>Extract</button> */}
//        <div>
//       <label>Click to upload </label>
//       <input
//         type="file"
//         onChange={handleFileChange}
//         ref={fileInputRef}
//         style={{ display: 'none' }} // Hide the original file input
//       />

//       <div
//         style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}
//         onDragOver={handleDragOver}
//         onDrop={handleDrop}
//       >
//         <p>Drag and drop a file here</p>
//       </div>

//       <button onClick={handleUpload}>Extract</button>
//     </div>
//     </div>
//   );
// };

// export default FileUpload;
