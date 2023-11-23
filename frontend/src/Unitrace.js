// MyComponent.jsx
import React from 'react';

const MyComponent = ({ tableData }) => {
  return (
    <div>
      {tableData ? (
        <div>
          <table>
            <thead>
              <tr>
                {tableData.Table1_columns.map(column => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.Table1_data.map((row, index) => (
                <tr key={index}>
                  {tableData.Table1_columns.map(column => (
                    <td key={column}>{row[column]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default MyComponent;
