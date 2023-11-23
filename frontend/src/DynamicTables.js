// // src/DynamicTables.js
// import React from 'react';

// const DynamicTables = ({ data }) => {
//   return (
//     <div>
//       {data.map((table, index) => (
//         <div key={index}>
//           <h2>Table {index + 1}</h2>
//           <table>
//             <thead>
//               <tr>
//                 {table[`${Object.keys(table)[0]}`].map((column, columnIndex) => (
//                   <th key={columnIndex}>{column}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {table[`${Object.keys(table)[0]}`].map((rowData, rowIndex) => (
//                 <tr key={rowIndex}>
//                   {Object.keys(rowData).map((cellKey, cellIndex) => (
//                     <td key={cellIndex}>{rowData[cellKey]}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DynamicTables;
// import React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';

// const DynamicTables = ({ data }) => {
//   return (
//     <div>
//       {data.map((table, index) => (
//         <div key={index}>
//           <h2>Table {index + 1}</h2>
//           <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
//               <TableHead>
//                 <TableRow>
//                   {table[`${Object.keys(table)[0]}`].map((column, columnIndex) => (
//                     <TableCell key={columnIndex} align="left">
//                       {column}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {table[`${Object.keys(table)[1]}`].map((rowData, rowIndex) => (
//                   <TableRow key={rowIndex}>
//                     {Object.keys(rowData).map((cellKey, cellIndex) => (
//                       <TableCell key={cellIndex} align="left">
//                         {rowData[cellKey]}
//                       </TableCell>
//                     ))}
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DynamicTables;
import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const DynamicTables = ({ data }) => {
  return (
    <div>
      {data.map((table, index) => (
        <div key={index} style={{ width: '60%' }}>
          <h2>Table {index + 1}</h2>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  {table[`${Object.keys(table)[0]}`].map((column, columnIndex) => (
                    <TableCell
                      key={columnIndex}
                      align="left"
                      style={{
                        borderRight: columnIndex < table[`${Object.keys(table)[0]}`].length - 1 ? '1px solid #ddd' : 'none',
                        background: '#cce5ff',
                        fontWeight: 'bold',
                      }}
                    >
                      {column}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {table[`${Object.keys(table)[1]}`].map((rowData, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {Object.keys(rowData).map((cellKey, cellIndex) => (
                      <TableCell
                        key={cellIndex}
                        align="left"
                        style={{
                          borderRight: cellIndex < Object.keys(rowData).length - 1 ? '1px solid #ddd' : 'none',
                        }}
                      >
                        {rowData[cellKey]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ))}
    </div>
  );
};

export default DynamicTables;
