import React, { Component } from 'react'
import { Row, Col } from 'antd';
class Footer extends Component {
    render() {
        return (
            <div className="col-24 sections" style={{borderTop:'solid 3px #4F3948',margin:0,padding:'10px 15px'  }}>
                <Row style={{margin:'0 auto'}}>
                    <Col xs={24} sm={24} md={24} lg={6} className="column-padding" style={{maxHeight: 1000, display:'inline-block', position:'relative'}}>
                        <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/stylegenie.png" alt=''  style={{width: '100%',height: 'auto',left: '33px'}} />
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={4} className="column-padding" style={{maxHeight: 1000, display:'inline-block', position:'relative',maxWidth: '320px'}}>
                        <h6 style={{textAlign:"left",margin:"5px 0"}}>ABOUT US</h6>
                        <ul className="footer" style={{paddingInlineStart: 0}}>    
                            <li><a href="/">FAQs</a></li>
                            <li><a href="/">Terms & Conditions</a></li>
                            <li><a href="/">Rewards Program</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={4} className="column-padding" style={{maxHeight: 1000, display:'inline-block', position:'relative',maxWidth: '320px'}}>
                        <h6 style={{textAlign:"left",margin:"5px 0"}}>WORK WITH US</h6>
                        <ul className="footer" style={{paddingInlineStart: 0}}>
                            <li><a href="/">List your Brand</a></li>
                            <li><a href="/">Become a Stylist</a></li>
                            <li><a href="/">Careers</a></li>
                        </ul>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={4} className="column-padding" style={{maxHeight: 1000, display:'inline-block', position:'relative',maxWidth: '320px'}}>
                        <h6 style={{textAlign:"left",margin:"5px 0"}}>ADDRESS </h6>
                        <ul className="footer" style={{paddingInlineStart: 0}}>
                            <li style={{textAlign:'justify',fontWeight:'400'}}> 
                                The Incubator 2F AIM Conference Center
                                132 Benavidez St. Legazpi Village 
                                Makati City Philippines 1229

                                14 Hougang St. 11 06-71 
                                The Minton Singapore 534071
                            </li>
                        </ul>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} className="column-padding" style={{maxHeight: 1000, display:'inline-block', position:'relative',maxWidth: '320px'}}>
                        <h6 style={{textAlign:"left",margin:"5px 0"}}>DELIVERY PARTNERS</h6>
                        <ul className="footer" style={{paddingInlineStart: 0}}>
                        <li> <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/delivery.png" alt=''  style={{width: '100%',height: 'auto'}} /></li>
                        </ul>
                        <h6 style={{textAlign:"left",margin:"5px 0"}}>PAYMENT PARTNERS</h6>
                        <ul className="footer" style={{paddingInlineStart: 0}}>
                            <li> <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Payment-partners-Website.png" alt=''  style={{width: '100%',height: 'auto'}} /></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Footer