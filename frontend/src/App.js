// src/App.js
// import React, { useState } from 'react';
// import DynamicTables from './DynamicTables';
// import HeaderComponent from './Systech';
// import Header from './Header';
// import Insight from './Insight';
// import Unisecure from './Unisecure';
// import DenseTable from './Table';
// import Status from './status';
// import VersionTable from './version';
// import FooterComponent from './Footer';
// import Tabs from './Header_2';

// import styled from 'styled-components';
// import './App.css';

// // import Table from './Table';
// const App = () => {
//   // Sample data
//   const jsonData = [
//     {
//       "Table1_columns": ["A", "STATUS", "PLANNED RELEASE DATE", "ACTUAL RELEASE DATE"],
//       "Table1_data": [
//         { A: "DEV", STATUS: "In-progress", "PLANNED RELEASE DATE": "3rd October 2023", "ACTUAL RELEASE DATE": "" }
//       ]
//     },
//     {
//       "Table1_columns": ["A", "STATUS", "PLANNED RELEASE DATE", "ACTUAL RELEASE DATE"],
//       "Table1_data": [
//         { A: "DEV", STATUS: "In-progress", "PLANNED RELEASE DATE": "3rd October 2023", "ACTUAL RELEASE DATE": "" }
//       ]
//     }
//   ];

//   const [selectedTab, setSelectedTab] = useState('one');

//   const handleChange = (value) => {
//     setSelectedTab(value);
//   };

//   const getTabComponent = (tab) => {
//     switch (tab) {
//       case 'one':
//         return <Insight />;
//       case 'two':
//         return <Unisecure/>;
//       // case 'three':
//       //   return <Unitrace />;
//       // case 'four':
//       //   return <SupplySense/>;
//       // case 'five':
//       //   return <UploadsArchives/>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="mainbody">
//      <HeaderComponent/>
     
//       {/* <Tabs/> */}
      
//       <Header selectedTab={selectedTab} handleChange={handleChange} />
      
//       {/* Conditional rendering based on the selected tab */}
//       {getTabComponent(selectedTab)}

//       {/* Add other conditional renderings for other tabs if needed */}
      
//       {/* The rest of your app content goes here */}
    
//       <FooterComponent/>
//       {/* <Table/> */}
//       {/* <DynamicTables data={jsonData} /> */}
//   </div>
  
 
//   );
// };

// export default App;
// // App.jsx
// import React, { useState, useEffect } from 'react';
// import MyComponent from './Unitrace'; // Adjust the path

// const App = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/json'); // Replace with the actual endpoint
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching table data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <MyComponent tableData={data} />
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Table = ({ columns, data, tableName }) => (
  <div>
    <h2>{tableName}</h2>
    <table>
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map(column => (
              <td key={column}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'https://api.example.com/tabledata' with the actual endpoint
        const response = await axios.get('http://localhost:3001/json');
        setData(response);
      } catch (error) {
        console.error('Error fetching table data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <Table
        tableName="Table1"
        columns={data[0].Table1_columns}
        data={data[0].Table1_data}
      /> 
      <Table
        tableName="Table2"
        columns={data[1].Table2_columns}
        data={data[1].Table2_data}
      />
      <Table
        tableName="Table3"
        columns={data[2].Table3_columns}
        data={data[2].Table3_data}
      />
      <Table
        tableName="Table4"
        columns={data[3].Table4_columns}
        data={data[3].Table4_data}
      />
      <Table
        tableName="Table5"
        columns={data[4].Table5_columns}
        data={data[4].Table5_data}
      />
      <Table
        tableName="Table6"
        columns={data[5].Table6_columns}
        data={data[5].Table6_data}
  />*/}
      <Table
        tableName="Table7"
        columns={data[6].Table7_columns}
        data={data[6].Table7_data}
      />
      <Table
        tableName="Table8"
        columns={data[7].Table8_columns}
        data={data[7].Table8_data}
      />
      <Table
        tableName="Table9"
        columns={data[8].Table9_columns}
        data={data[8].Table9_data}
      />
      <Table
        tableName="Table10"
        columns={data[9].Table10_columns}
        data={data[9].Table10_data}
      />
      <Table
        tableName="Table11"
        columns={data[10].Table11_columns}
        data={data[10].Table11_data}
      />
      <Table
        tableName="Table12"
        columns={data[11].Table12_columns}
        data={data[11].Table12_data}
      />
      {/* <Table
        tableName="Table 4"
        columns={data[3].Table4_columns}
        data={data[3].Table4_data}
      />
      <Table
        tableName="Table 5"
        columns={data[4].Table5_columns}
        data={data[4].Table5_data}
      /> */}
      
    </div>
  );
};

export default App;
