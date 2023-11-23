import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Tablejson';


const Fetch = () => {
  const [Data, setData] = useState(null);

  useEffect(() => {
    

    fetchData();
    //  console.log(Data[0])
    
    // console.log(data[1])
  }, []);
//   console.log(Data);
//  console.log(Data.data[0]);
const fetchData = async () => {
    try {
      // Replace 'https://api.example.com/tabledata' with the actual endpoint
      const response = await axios.get('http://localhost:3001/json');
      setData(response);
     console.log(response);
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
    
  };

return (
  <div>
        <Table
      tableName="Table1"
      columns={Data.data[0].Table1_columns}
      data={Data.data[0].Table1_data}
    />
  {/*
    <Table
      tableName="Table2"
      columns={Data.data[1].Table2_columns}
      data={Data.data[1].Table2_data}
    />
    <Table
      tableName="Table3"
      columns={Data.data[2].Table3_columns}
      data={Data.data[2].Table3_data}
    />
    <Table
      tableName="Table4"
      columns={Data.data[3].Table4_columns}
      data={Data.data[3].Table4_data}
    />
    <Table
      tableName="Table5"
      columns={Data.data[4].Table5_columns}
      data={Data.data[4].Table5_data}
    />
    <Table
      tableName="Table6"
      columns={Data.data[5].Table6_columns}
      data={Data.data[5].Table6_data}
/>
    <Table
      tableName="Table7"
      columns={Data.data[6].Table7_columns}
      data={Data.data[6].Table7_data}
    />
    <Table
      tableName="Table8"
      columns={Data.data[7].Table8_columns}
      data={Data.data[7].Table8_data}
    />
    <Table
      tableName="Table9"
      columns={Data.data[8].Table9_columns}
      data={Data.data[8].Table9_data}
    />
    <Table
      tableName="Table10"
      columns={Data.data[9].Table10_columns}
      data={Data.data[9].Table10_data}
    />
    <Table
      tableName="Table11"
      columns={Data.data[10].Table11_columns}
      data={Data.data[10].Table11_data}
    />
    <Table
      tableName="Table12"
      columns={Data.data[11].Table12_columns}
      data={Data.data[11].Table12_data}
    />   */}
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
export default Fetch