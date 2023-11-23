// // src/HeaderTab.js
// import React from 'react';
// import './App.css';

// const HeaderTab = ({ title, label }) => (
//   <div className="header-item">
//     <div className={label ? "header-label" : "header-title"}>{title}</div>
//   </div>
// );

// export default HeaderTab;
// src/HeaderTab.js
// src/HeaderTab.js
// import React from 'react';
// import './App.css';

// const HeaderTab = ({ title, isActive, onClick }) => (
//   <div className={`HeaderTab ${isActive ? 'active' : ''}`} onClick={onClick}>
//     {title}
//     {isActive && <div className="tabIndicator" />}
//   </div>
// );

// export default HeaderTab;
// src/HeaderTab.js
// import React from 'react';
// import Tab from '@material-ui/core/Tab';

// const HeaderTab = ({ label, value, selectedTab, handleChange }) => (
//   <Tab
//     value={value}
//     label={label}
//     onClick={() => handleChange(value)}
//     style={{ minWidth: 'auto', textTransform: 'none', fontWeight: selectedTab === value ? 'bold' : 'normal' }}
//   />
// );

// export default HeaderTab;
// src/Header.js
// src/HeaderTab.js
import React from 'react';
import Tab from '@material-ui/core/Tab';

const HeaderTab = ({ label, value, selectedTab, handleChange }) => (
  <Tab
    value={value}
    label={label}
    onClick={() => handleChange(value)}
    style={{ minWidth: 'auto', textTransform: 'none', fontWeight: selectedTab === value ? 'bold' : 'normal' }}
  />
);

export default HeaderTab;


