import React, { Component } from 'react'
import { Row, Col } from 'antd';


function Banner() {
  return (
 
    <Row style={{maxHeight:'1080px'}} className="banner-hero">
        <Col xs={24} sm={24} md={24} lg={5}>
          <section style={{width:'auto',maxHeight:'200px',position:'relative',top:'11%',left:'1px',padding:'5px'}}>
            <h3 style={{textAlign:'left',color:'#a20021',fontSize:'1.2em!important'}}>RENT YOUR OWN PROFESSIONAL GRAPHIC DESIGNER IN LESS THAN 24 HOURS</h3>
          </section>
          <section className="section-interview-list banner-description" >
           <ul >
            <li>* No job interview.</li>
            <li>* No administrative concerns.</li>
            <li>* No hiring hassle.</li>
           </ul>  
          </section>

          <section className="section-interview-list banner-description" >
           <ul >
            <li>Satisfaction guaranteed or get your money back</li>
           </ul>  
          </section>
          <section className="hero-button" style={{width:'auto',position:'relative',top:'27%',textAlign:'left',fontSize:'1em'}}>
              <a href=""><button className="book"> Book </button></a>
              <a href=""><button className="inquire"> Inquire </button></a>
          </section>
        </Col>
        <Col xs={24} sm={24} md={24} lg={19}>

        </Col>
    </Row>
  );
}

export default Banner;
