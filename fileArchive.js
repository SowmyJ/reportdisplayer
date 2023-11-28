// import React, { useState,useEffect } from 'react';
// import axios from 'axios';
// import Container from 'react-bootstrap/Container';

// const Archive =() =>{
//   const [Data, setData] = useState([]);
//   useEffect(() => {
//     const fetchData_Insight = async () => {
//       // console.log('sss')
     
//       try {
//         fetch('http://localhost:3001/archives/uploads/Insight')
//         .then(response => response.json())
//         .then(data => {
//           const result=data;
//           console.log(result,'ppp')
//           setData(result);
//         })
//         .catch(error => console.error(error));
//         // Replace 'https://api.example.com/tabledata' with the actual endpoint
//        // const response = fetch('http://localhost:3001/json');
//        // console.log(response,'rrr')
       
//       //  d=Data;
//       } catch (error) {
//         console.error('Error fetching table data:', error);
//       }
      
//     };
//     const fetchData_SupplySense = async () => {
//       // console.log('sss')
     
//       try {
//         fetch('http://localhost:3001/archives/uploads/SupplySense')
//         .then(response => response.json())
//         .then(data => {
//           const result=data;
//           console.log(result,'ppp')
//           setData(result);
//         })
//         .catch(error => console.error(error));
//         // Replace 'https://api.example.com/tabledata' with the actual endpoint
//        // const response = fetch('http://localhost:3001/json');
//        // console.log(response,'rrr')
       
//       //  d=Data;
//       } catch (error) {
//         console.error('Error fetching table data:', error);
//       }
      
//     };
//     const fetchData_Unisecure = async () => {
//       // console.log('sss')
     
//       try {
//         fetch('http://localhost:3001/archives/uploads/Unisecure')
//         .then(response => response.json())
//         .then(data => {
//           const result=data;
//           console.log(result,'ppp')
//           setData(result);
//         })
//         .catch(error => console.error(error));
//         // Replace 'https://api.example.com/tabledata' with the actual endpoint
//        // const response = fetch('http://localhost:3001/json');
//        // console.log(response,'rrr')
       
//       //  d=Data;
//       } catch (error) {
//         console.error('Error fetching table data:', error);
//       }
      
//     };
//     const fetchData_Unitrace = async () => {
//       // console.log('sss')
     
//       try {
//         fetch('http://localhost:3001/archives/uploads/Unitrace')
//         .then(response => response.json())
//         .then(data => {
//           const result=data;
//           console.log(result,'ppp')
//           setData(result);
//         })
//         .catch(error => console.error(error));
//         // Replace 'https://api.example.com/tabledata' with the actual endpoint
//        // const response = fetch('http://localhost:3001/json');
//        // console.log(response,'rrr')
       
//       //  d=Data;
//       } catch (error) {
//         console.error('Error fetching table data:', error);
//       }
      
//     };

//     fetchData_Insight();
//     fetchData_SupplySense();
//     fetchData_Unitrace();
//     fetchData_Unisecure();
//   }, []);
//     return(
//         <div>
//       <div className="full-width-border">
//           <Container className="container">
//             Archives
//           </Container>
//         </div>
//         </div>
//     )

// };
// export default Archive



// import React, { useState, useEffect } from 'react';

// const Archive = () => {
//   const [data, setData] = useState([]);

//   const fetchData = async (folderName) => {
//     try {
//       const response = await fetch(`http://localhost:3001/archives/uploads/${folderName}`);
//       const data = await response.json();
//       return { folderName, files: data }; // Include folderName in the result
//     } catch (error) {
//       console.error(`Error fetching ${folderName} data:`, error);
//       return { folderName, files: [] }; // Return an object with an empty array if there's an error
//     }
//   };

//   useEffect(() => {
//     const folders = ['Insight', 'SupplySense', 'Unisecure', 'Unitrace'];

//     const fetchDataForAllFolders = async () => {
//       try {
//         const results = await Promise.all(folders.map(folder => fetchData(folder)));
//         setData(results); // Set the entire object in the state
//       } catch (error) {
//         console.error('Error fetching data for all folders:', error);
//       }
//     };

//     fetchDataForAllFolders();
//   }, []);

//   return (
//     <div>
//       {/* Display the files or data */}
//       <ul>
//         {data.map(({ folderName, files }, index) => (
//           <li key={index}>
//             <strong>{folderName}</strong>
//             {Array.isArray(files) ? (
//               <ul>
//                 {files.map((file, fileIndex) => (
//                   <li key={fileIndex}>{file}</li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No files available for this folder.</p>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Archive;

// import React, { useState, useEffect } from 'react';

// const Archive = () => {
//   const [data, setData] = useState([]);

//   const fetchData = async (folderName) => {
//     try {
//       const response = await fetch(`http://localhost:3001/archives/uploads/${folderName}`);
//       const data = await response.json();
//       console.log(`${folderName}`, data); // Log data for debugging
//       return { folderName, files: data };
//     } catch (error) {
//       console.error(`Error fetching ${folderName} data:`, error);
//       return { folderName, files: [] };
//     }
//   };

//   useEffect(() => {
//     const folders = ['Insight', 'SupplySense', 'Unisecure', 'Unitrace'];

//     const fetchDataForAllFolders = async () => {
//       try {
//         const results = await Promise.all(folders.map(folder => fetchData(folder)));
//         console.log('Results:', results); // Log results for debugging
//         setData(results);
//       } catch (error) {
//         console.error('Error fetching data for all folders:', error);
//       }
//     };

//     fetchDataForAllFolders();
//   }, []);

//   return (
//     <div>
//       {/* Display the files or data */}
//       <ul>
//         {data.map(({ folderName, files }, index) => (
//           <li key={index}>
//             <strong>{folderName}</strong>
//             {Array.isArray(files) ? (
//               <ul>
//                 {files.map((file, fileIndex) => (
//                   <li key={fileIndex}>{file}</li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No files available for this folder.</p>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Archive;



// import React, { useState, useEffect } from 'react';

// const Archive = () => {
//   const [data, setData] = useState([]);

//   const fetchData = async (folderName) => {
//     try {
//       const response = await fetch(`http://localhost:3001/archives/uploads/${folderName}`);
//       const files = await response.json();
//       console.log(`${folderName} files:`, files); // Log files for debugging
//       return { folderName, files: Object.values(files) }; // Convert object values to an array
//     } catch (error) {
//       console.error(`Error fetching ${folderName} data:`, error);
//       return { folderName, files: [] };
//     }
//   };

//   useEffect(() => {
//     const folders = ['Insight', 'SupplySense', 'Unisecure', 'Unitrace'];

//     const fetchDataForAllFolders = async () => {
//       try {
//         const results = await Promise.all(folders.map(folder => fetchData(folder)));
//         console.log('Results:', results);
//         setData(results);
//       } catch (error) {
//         console.error('Error fetching data for all folders:', error);
//       }
//     };

//     fetchDataForAllFolders();
//   }, []);

//   return (
//     <div>
//       {/* Display the files or data */}
//       <ul>
//         {data.map(({ folderName, files }, index) => (
//           <li key={index}>
//             <strong>{folderName}</strong>
//             {Array.isArray(files) ? (
//               <ul>
//                 {files.map((file, fileIndex) => (
//                   <li key={fileIndex}>{file}</li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No files available for this folder.</p>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Archive;



// import React, { useState, useEffect } from 'react';

// const Archive = () => {
//   const [data, setData] = useState([]);

//   const fetchData = async (folderName) => {
//     try {
//       const response = await fetch(`http://localhost:3001/archives/uploads/${folderName}`);
//       const files = await response.json();
//       console.log(`${folderName} files:`, files); // Log files for debugging
//       return { folderName, files: Object.values(files) }; // Convert object values to an array
//     } catch (error) {
//       console.error(`Error fetching ${folderName} data:`, error);
//       return { folderName, files: [] };
//     }
//   };

//   useEffect(() => {
//     const folders = ['Insight', 'SupplySense', 'Unisecure', 'Unitrace'];

//     const fetchDataForAllFolders = async () => {
//       try {
//         const results = await Promise.all(folders.map(folder => fetchData(folder)));
//         console.log('Results:', results);
//         setData(results);
//       } catch (error) {
//         console.error('Error fetching data for all folders:', error);
//       }
//     };

//     fetchDataForAllFolders();
//   }, []);

//   return (
//     <div>
//       {/* Display the files or data */}
//       <ul>
//         {data.map(({ folderName, files }, index) => (
//           <li key={index}>
//             <strong>{folderName}</strong>
//             {Array.isArray(files) && files.length > 0 ? (
//               <ul>
//                 {files.map((file, fileIndex) => (
//                   <li key={fileIndex}>
//                     {/* Assuming the file name is the actual filename and can be used in the URL */}
//                     <a href={`http://localhost:3001/archives/uploads/${folderName}/${file}`} target="_blank" rel="noopener noreferrer">
//                       {file}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No files available for this folder.</p>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Archive;


import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

const Archive = () => {
  const [data, setData] = useState([]);

  const fetchData = async (folderName) => {
    try {
      const response = await fetch(`http://localhost:3001/archives/uploads/${folderName}`);
      const files = await response.json();
      console.log(`${folderName} files:`, files); // Log files for debugging
      return { folderName, files };
    } catch (error) {
      console.error(`Error fetching ${folderName} data:`, error);
      return { folderName, files: [] };
    }
  };

  useEffect(() => {
    const folders = ['Insight', 'SupplySense', 'Unisecure', 'Unitrace'];

    const fetchDataForAllFolders = async () => {
      try {
        const results = await Promise.all(folders.map(folder => fetchData(folder)));
        console.log('Results:', results);
        setData(results);
      } catch (error) {
        console.error('Error fetching data for all folders:', error);
      }
    };

    fetchDataForAllFolders();
  }, []);

  const handleFileClick = async (folderName, fileName) => {
    try {
      const response = await fetch(`http://localhost:3001/archives/uploads/${folderName}/${fileName}`);
      const blob = await response.blob();

      // Read the blob and parse the XLSX data
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });

        // Display the parsed XLSX data as needed
        console.log('Parsed XLSX data:', workbook);
      };
      reader.readAsBinaryString(blob);
    } catch (error) {
      console.error(`Error fetching or parsing ${fileName} in ${folderName}:`, error);
    }
  };

  return (
    <div>
      {/* Display the files or data */}
      <ul>
        {data.map(({ folderName, files }, index) => (
          <li key={index}>
            <strong>{folderName}</strong>
            {Array.isArray(files) && files.length > 0 ? (
              <ul>
                {files.map((file, fileIndex) => (
                  <li key={fileIndex}>
                    {/* Assuming the file name is the actual filename and can be used in the URL */}
                    <button onClick={() => handleFileClick(folderName, file)}>{file}</button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No files available for this folder.</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Archive;


