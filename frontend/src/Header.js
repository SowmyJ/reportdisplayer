// import React from 'react';
// import './App.css'; // Import the styles

// const Header = () => (
//   <div className="header-container">
//     <div className="header-item">
//       <div className="header-title">Insight</div>
//     </div>
//     <div className="header-item">
//       <div className="header-label">A</div>
//     </div>
//     <div className="header-item">
//       <div className="header-label">B</div>
//     </div>
//     <div className="header-item">
//       <div className="header-label">C</div>
//     </div>
//     <div className="header-item">
//       <div className="header-label">D</div>
//     </div>
//   </div>
// );

// export default Header;
// import React from 'react';

// const Header = () => (
//   <div style={{
//     width: '1572px',
//     height: '42px',
//     paddingLeft: '16px',
//     borderBottom: '1px #D6D9E1 solid',
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     display: 'inline-flex',
//   }}>
//     <div style={{
//       paddingLeft: '20px',
//       paddingRight: '20px',
//       paddingTop: '10px',
//       paddingBottom: '10px',
//       borderBottom: '4px #345897 solid',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       gap: '10px',
//       display: 'inline-flex',
//     }}>
//       <div style={{
//         textAlign: 'center',
//         color: 'black',
//         fontSize: '16px',
//         fontFamily: 'Noto Sans',
//         fontWeight: 600,
//         wordWrap: 'break-word',
//       }}>Insight</div>
//     </div>
//     <div style={{
//       paddingLeft: '20px',
//       paddingRight: '20px',
//       paddingTop: '10px',
//       paddingBottom: '10px',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       gap: '10px',
//       display: 'inline-flex',
//     }}>
//       <div style={{
//         textAlign: 'center',
//         color: '#545859',
//         fontSize: '16px',
//         fontFamily: 'Noto Sans',
//         fontWeight: 600,
//         wordWrap: 'break-word',
//       }}>A</div>
//     </div>
//     <div style={{
//       paddingLeft: '20px',
//       paddingRight: '20px',
//       paddingTop: '10px',
//       paddingBottom: '10px',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       gap: '10px',
//       display: 'inline-flex',
//     }}>
//       <div style={{
//         textAlign: 'center',
//         color: '#545859',
//         fontSize: '16px',
//         fontFamily: 'Noto Sans',
//         fontWeight: 600,
//         wordWrap: 'break-word',
//       }}>B</div>
//     </div>
//     <div style={{
//       paddingLeft: '20px',
//       paddingRight: '20px',
//       paddingTop: '10px',
//       paddingBottom: '10px',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       gap: '10px',
//       display: 'inline-flex',
//     }}>
//       <div style={{
//         textAlign: 'center',
//         color: '#545859',
//         fontSize: '16px',
//         fontFamily: 'Noto Sans',
//         fontWeight: 600,
//         wordWrap: 'break-word',
//       }}>C</div>
//     </div>
//     <div style={{
//       paddingLeft: '20px',
//       paddingRight: '20px',
//       paddingTop: '10px',
//       paddingBottom: '10px',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       gap: '10px',
//       display: 'inline-flex',
//     }}>
//       <div style={{
//         textAlign: 'center',
//         color: '#545859',
//         fontSize: '16px',
//         fontFamily: 'Noto Sans',
//         fontWeight: 600,
//         wordWrap: 'break-word',
//       }}>D</div>
//     </div>
//   </div>
// );

// export default Header;
// src/Header.js
// import React from 'react';
// import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
// import HeaderTab from './HeaderTab';
// import './App.css';

// const Header = () => (
//   <Tabs>
//     <TabList>
//       <Tab>
//         <HeaderTab title="Insight" label={false} />
//       </Tab>
//       <Tab>
//         <HeaderTab title="A" label={true} />
//       </Tab>
//       <Tab>
//         <HeaderTab title="B" label={true} />
//       </Tab>
//       <Tab>
//         <HeaderTab title="C" label={true} />
//       </Tab>
//       <Tab>
//         <HeaderTab title="D" label={true} />
//       </Tab>
//     </TabList>

//     <TabPanel>
//       {/* Content for the "Insight" tab */}
//     </TabPanel>
//     <TabPanel>
//       {/* Content for the "A" tab */}
//     </TabPanel>
//     <TabPanel>
//       {/* Content for the "B" tab */}
//     </TabPanel>
//     <TabPanel>
//       {/* Content for the "C" tab */}
//     </TabPanel>
//     <TabPanel>
//       {/* Content for the "D" tab */}
//     </TabPanel>
//   </Tabs>
// );

// export default Header;
// src/Tabs.js
// import React from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import HeaderTab from './HeaderTab';

// const TabComponent = () => (
//   <Tabs>
//     <TabList>
//       <Tab>
//         <HeaderTab title="Current Release Version" />
//       </Tab>
//       <Tab>
//         <HeaderTab title="Current Stage" />
//       </Tab>
//       <Tab>
//         <HeaderTab title="Next Milestone" />
//       </Tab>
//     </TabList>

//     <TabPanel>
//       <div className="DataInQa">2.1.0</div>
//     </TabPanel>
//     <TabPanel>
//       <div className="DataInQa">In QA</div>
//     </TabPanel>
//     <TabPanel>
//       <div className="DataInQa">Dev-QA Code Freeze 13th Oct 2023</div>
//     </TabPanel>
//   </Tabs>
// );

// export default TabComponent;
// src/Header.js
// import React, { useState } from 'react';
// import './App.css';
// import HeaderTab from './HeaderTab';

// const Header = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const handleTabClick = (index) => {
//     setActiveTab(index);
//   };

//   return (
//     <div className="Header">
//       <HeaderTab title="Tab 1" isActive={activeTab === 0} onClick={() => handleTabClick(0)} />
//       <HeaderTab title="Tab 2" isActive={activeTab === 1} onClick={() => handleTabClick(1)} />
//       <HeaderTab title="Tab 3" isActive={activeTab === 2} onClick={() => handleTabClick(2)} />

//       {activeTab === 0 && <div>Content for Tab 1</div>}
//       {activeTab === 1 && <div>Content for Tab 2</div>}
//       {activeTab === 2 && <div>Content for Tab 3</div>}
//     </div>
//   );
// };

// export default Header;
import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HeaderTab from './HeaderTab';

const Header = () => {
  const [selectedTab, setSelectedTab] = useState('one');

  const handleChange = (value) => {
    setSelectedTab(value);
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <HeaderTab value="one" label="Insight" selectedTab={selectedTab} handleChange={handleChange} />
          <HeaderTab value="two" label="Unisecure" selectedTab={selectedTab} handleChange={handleChange} />
          <HeaderTab value="three" label="Unitrace"selectedTab={selectedTab} handleChange={handleChange} />
          <HeaderTab value="four" label="SupplySense" selectedTab={selectedTab} handleChange={handleChange} />
          <HeaderTab value="five" label="UploadsArchives" selectedTab={selectedTab} handleChange={handleChange} />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;