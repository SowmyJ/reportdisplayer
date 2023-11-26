const multer = require('multer');
const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs').promises;

let babe;
const processExcelFile = async (req, res) => {
  try {
    const arrayBuffer = req.file.buffer;
    const fileName = req.params.fileName;
    const filePath = path.join(__dirname, fileName);

    // Write the file to the specified path
    await fs.writeFile(filePath, arrayBuffer);

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(arrayBuffer);

    // Assuming the table is on the first sheet
    const worksheet = workbook.getWorksheet(1);
    const TableArray = ['Table1', 'Table2', 'Table3', 'Table4', 'Table5','Table6','Table7','Table8','Table9','Table10','Table11'];
    const resultArray = [];

    for (const tableName of TableArray) {
      const result = processTable(worksheet, tableName);
      resultArray.push(result);
    }
    babe = resultArray
    res.json(resultArray);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};
const haveJson=(req,res)=>{
  console.log('Have json')
  res.json(babe);
}
const processTable = (worksheet, table_name) => {
  const tableReference = worksheet.tables[table_name];
  const tableRange = tableReference.table.tableRef;

  // Extract starting and ending cell references from the tableRange
  const [startCell, endCell] = tableRange.split(':');

  // Convert cell references to row and column indices
  const startRowIndex = parseInt(startCell.match(/\d+/)[0], 10);
  const endRowIndex = parseInt(endCell.match(/\d+/)[0], 10);
  const startColumnIndex = startCell.match(/[A-Z]+/)[0];
  const endColumnIndex = endCell.match(/[A-Z]+/)[0];

  // Convert column letters to numerical indices
  const startColumnNum = columnToNumber(startColumnIndex);
  const endColumnNum = columnToNumber(endColumnIndex);

  // Function to convert column letter to numerical index
  function columnToNumber(column) {
    let result = 0;
    for (let i = 0; i < column.length; i++) {
      result = result * 26 + column.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
    }
    return result;
  }

  // Convert numerical column index to letter
  function numberToColumn(number) {
    let result = '';
    while (number > 0) {
      const remainder = (number - 1) % 26;
      result = String.fromCharCode('A'.charCodeAt(0) + remainder) + result;
      number = Math.floor((number - 1) / 26);
    }
    return result;
  }

  // Initialize JSON object
  const resultJson = {
    [`${tableReference.name}_columns`]: [],
    [`${tableReference.name}_data`]: [],
  };

  // Populate column names from the first row
  for (let col = startColumnNum; col <= endColumnNum; col++) {
    const colLetter = numberToColumn(col);
    const cellReference = `${colLetter}${startRowIndex}`;
    const cellValue = worksheet.getCell(cellReference).text;
    resultJson[`${tableReference.name}_columns`].push(cellValue);
  }

  // Iterate through rows and columns to get table data
  for (let row = startRowIndex + 1; row <= endRowIndex; row++) {
    const rowData = {};
    for (let col = startColumnNum; col <= endColumnNum; col++) {
      const colLetter = numberToColumn(col);
      const cellReference = `${colLetter}${row}`;
      const cellValue = worksheet.getCell(cellReference).text;
      rowData[resultJson[`${tableReference.name}_columns`][col - startColumnNum]] = cellValue;
    }
    resultJson[`${tableReference.name}_data`].push(rowData);
  }

  // Log the resulting JSON object
  console.log(JSON.stringify(resultJson, null, 2));
  return resultJson;
};

module.exports = {
  processExcelFile,
  haveJson
};
