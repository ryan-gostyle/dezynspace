import React, { Component } from 'react'
import { Row, Col } from 'antd';
class Footer extends Component {
    render() {
        return (
            <div className="col-24 section-footer" style={{padding:'40px 15px 0 15px'}}>
                <Row style={{margin:'0 auto'}}>
                    <Col xs={24} sm={24} md={5} lg={5} style={{maxHeight: 1000, display:'inline-block', position:'relative'}}>
                       
                       <ul>
                       <h5>Socials</h5>
                           <li className="social-icons">
                            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/social+media+icon+1.png" alt=""/>
                            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/social+media+icon+2.png" alt=""/>
                            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/social+media+icon+3.png" alt=""/>
                            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/social+media+icon+4.png" alt=""/>
                            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/social+media+icon+5.png" alt=""/>
                           </li>

                       </ul>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={4} style={{maxHeight: 1000, display:'inline-block', position:'relative',maxWidth: '320px'}}>
                        
                        <ul>
                        <h5>About Us</h5>
                           <li><a href="/case-studies">About The Team</a></li>
                           <li><a href="/case-studies">DOTO</a></li>
                           <li><a href="/case-studies">Our Works</a></li>
                           <li><a href="/case-studies">Pricing</a></li>
                           <li><a href="/case-studies#/Infographic">Case Studies</a></li>
                       </ul>
                    </Col>
                    <Col xs={24} sm={24} md={5} lg={5} style={{maxHeight: 1000, display:'inline-block', position:'relative',maxWidth: '320px'}}>
                        
                        <ul>
                        <h5>Help & Support</h5>
                           <li><a href="/case-studies">FAQs</a></li>
                           <li><a href="/case-studies">Contact Us</a></li>
                           <li><a href="/case-studies">Chat to Us</a></li>
                       </ul>
                    </Col>
                    <Col xs={24} sm={24} md={5} lg={5} style={{maxHeight: 1000, display:'inline-block', position:'relative',maxWidth: '320px'}}>
                        
                        <ul>
                        <h5>Legal</h5>
                           <li><a href="/case-studies">Privacy Policy</a></li>
                           <li><a href="/case-studies">Terms and Conditions</a></li>
                       </ul>
                    </Col>
                    <Col xs={24} sm={24} md={5} lg={5} style={{maxHeight: 1000, display:'inline-block', position:'relative',maxWidth: '320px'}}>
                        <h5>Payment Partners </h5>    
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24}>
                    <p className="subtitle fancy"><span><img alt="" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/colored+logo.png" className="footer-logo"/>
                    </span>
                    </p> 
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} className="sub-footer">
                        2019 Dezynspace is under RBGM Creative Design Studio. All Right Reserved.
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Footer