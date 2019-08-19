import React, { Component } from 'react'
import { Row, Col } from 'antd';


function Banner() {
  return (
 
    <Row style={{maxHeight:'1080px'}} className="banner-hero">
        <Col xs={24} sm={24} md={24} lg={7}>
        </Col>
        <Col xs={24} sm={24} md={24} lg={17}>

        </Col>
    </Row>
  );
}

export default Banner;
