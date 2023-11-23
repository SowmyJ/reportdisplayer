import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const json = [
  {
    Table1_columns: ["A", "STATUS", "PLANNED RELEASE DATE", "ACTUAL RELEASE DATE"],
    Table1_data: [
      { A: "DEV", STATUS: "In-progress", "PLANNED RELEASE DATE": "3rd October 2023", "ACTUAL RELEASE DATE": "" },
      { A: "DEV", STATUS: "In-progress", "PLANNED RELEASE DATE": "3rd October 2023", "ACTUAL RELEASE DATE": "" },
      { A: "DEV", STATUS: "In-progress", "PLANNED RELEASE DATE": "3rd October 2023", "ACTUAL RELEASE DATE": "" },
      { A: "DEV", STATUS: "In-progress", "PLANNED RELEASE DATE": "3rd October 2023", "ACTUAL RELEASE DATE": "" },
      // ... other rows
    ],
  },
  // ... other tables
];

export default function DenseTable() {
  // Assuming the first table is the one you want to render
  const firstTable = json[0];

  const columns = firstTable.Table1_columns;
  const rows = firstTable.Table1_data;

  return (
    <TableContainer component={Paper} style={{ width: '60%' }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell
                key={index}
                align="left" // Left-align the header cells
                style={{
                  borderRight: index < columns.length - 1 ? '1px solid #ddd' : 'none',
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
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column, colIndex) => (
                <TableCell
                  key={colIndex}
                  align="left" // Left-align the data cells
                  style={{ borderRight: colIndex < columns.length - 1 ? '1px solid #ddd' : 'none' }}
                >
                  {row[column]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
