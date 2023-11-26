// src/App.js
import React, { useState } from 'react';
import HeaderComponent from './Systech';
import Header from './Header.js';
import Insight from './Insight';
import Unisecure from './Unisecure';
import Unitrace from './Unitrace.js';
import SupplySense from './SupplySense.js';
import UploadsArchives from './UploadsArchives.js';
import FooterComponent from './Footer';


import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './App.css';
import styled from 'styled-components';


// import Table from './Table';
const App = () => {
  // Sample data
  const jsonData = [
    {
      "Table1_columns": ["A", "STATUS", "PLANNED RELEASE DATE", "ACTUAL RELEASE DATE"],
      "Table1_data": [
        { A: "DEV", STATUS: "In-progress", "PLANNED RELEASE DATE": "3rd October 2023", "ACTUAL RELEASE DATE": "" }
      ]
    },
    {
      "Table1_columns": ["A", "STATUS", "PLANNED RELEASE DATE", "ACTUAL RELEASE DATE"],
      "Table1_data": [
        { A: "DEV", STATUS: "In-progress", "PLANNED RELEASE DATE": "3rd October 2023", "ACTUAL RELEASE DATE": "" }
      ]
    }
  ];

  const [selectedTab, setSelectedTab] = useState('tab1');

  const handleChange = (value) => {
    setSelectedTab(value);
  };

  // Map the selected tab to its corresponding component
  const getTabComponent = (tab) => {
    switch (tab) {
      case 'tab1':
        return <Insight />;
      case 'tab2':
        return <Unisecure />;
      case 'tab3':
        return <Unitrace />;
      case 'tab4':
        return <SupplySense />;
      case 'tab5':
        return <UploadsArchives />;
      default:
        return null;
    }
  };

  return (
    
     <div className="all-body-div">
      <div className="body-div">
      <HeaderComponent/>
      <Header selectedTab={selectedTab} handleChange={handleChange} />
      {/* Render the component based on the selected tab */}
      {getTabComponent(selectedTab)}
      </div>
      <FooterComponent/>
      
      </div>
      
    
  );
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
     
      
//       <Header selectedTab={selectedTab} handleChange={handleChange} />

//       {getTabComponent(selectedTab)}
    
//       <FooterComponent/>

//   </div>
  
 
//   );
};

export default App;


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

