// // Header.js
// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Tabs from '@material-ui/core/Tabs';
// import HeaderTab from './HeaderTab';
// import { makeStyles } from '@material-ui/core/styles';


// const Header = ({ selectedTab, handleChange }) => {
//   const classes = useStyles();
//   return (
//     <AppBar position="static" color="default"  >
//       <Toolbar>
//         <Tabs
//           value={selectedTab}
//           onChange={handleChange}
//           textColor="secondary"
//           indicatorColor="primary"
//           aria-label="secondary tabs example"
         
          
          
//         >
//           <HeaderTab value="tab1" label="Insight" selectedTab={selectedTab} handleChange={handleChange} />
//           <HeaderTab value="tab2" label="Unisecure" selectedTab={selectedTab} handleChange={handleChange} />
//           <HeaderTab value="tab3" label="Unitrace" selectedTab={selectedTab} handleChange={handleChange}/>
//           <HeaderTab value="tab4" label="SupplySense" selectedTab={selectedTab} handleChange={handleChange}  />
//           <HeaderTab value="tab5" label="UploadsArchives"ectedTab={selectedTab} handleChange={handleChange} />
//         </Tabs>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;


import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = ({ selectedTab, handleChange }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav activeKey={selectedTab} onSelect={handleChange}>
          <Nav.Link eventKey="tab1">Insight</Nav.Link>
          <Nav.Link eventKey="tab2">Unisecure</Nav.Link>
          <Nav.Link eventKey="tab3">Unitrace</Nav.Link>
          <Nav.Link eventKey="tab4">SupplySense</Nav.Link>
          <Nav.Link eventKey="tab5">Uploads & Archives</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
