import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FooterComponent = () => {
  return (
        // <div style={{width:"100%"}}>
          <div className="Footer">
            <div style={{ fontSize: '18px', fontWeight: 'bold' , paddingTop:"25px"}}>© 2023 Systech</div>
            <div>All rights reserved</div>
          </div>
       
      );
    };

export default FooterComponent;