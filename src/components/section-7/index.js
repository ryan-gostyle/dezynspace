import React, { Component } from 'react'
import { Row, Col } from 'antd';
import BookForm from './form-book'
export default class SectionSeven extends Component {
    render() {
        return (
            <div className="col-24 section-seven" style={{margin:"0 0 30px 0",overflow:"hidden",}}>
                <Row>
                <Col xs={24} sm={24} md={7} lg={7} className="pink-gradient" >
                    <h2 style={{color:'#fff',margin:'15px 10px'}}>Pricing</h2>
                    <div className="price-box" style={{height:'auto',minHeight:'145px',width:'300px',background:'#fff',margin:'0 auto',marginTop:'20px',marginBottom:'15px',borderRadius:'2px',padding:'15px 10px'}}>
                        <h2>2 Days</h2>
                        <p className="price">$xx</p>
                    </div>
                    <div className="price-box" style={{height:'auto',minHeight:'145px',width:'300px',background:'#fff',margin:'0 auto',marginTop:'20px',marginBottom:'15px',borderRadius:'2px',padding:'15px 10px'}}>
                        <h2>5 Days</h2>
                        <p className="price">$399</p>
                    </div>
                    <div className="price-box" style={{height:'auto',minHeight:'145px',width:'300px',background:'#fff',margin:'0 auto',marginTop:'20px',marginBottom:'15px',borderRadius:'2px',padding:'15px 10px'}}>
                        <h2>2 Weeks</h2>
                        <p>(10 working days)</p>
                        <p className="price">$799</p>
                    </div>
                    <div className="price-box" style={{height:'auto',minHeight:'145px',width:'300px',background:'#fff',margin:'0 auto',marginTop:'20px',marginBottom:'15px',borderRadius:'2px',padding:'15px 10px'}}>
                        <h2>1 Month</h2>
                        <p>(20 working days)</p>
                        <p className="price">$1,499</p>
                    </div>
                </Col>

                <Col xs={24} sm={24} md={17} lg={17} className="" style={{maxHeight: 1000, display:'inline-block', position:'relative'}}>
                    <div className="price-list">
                    <h2 style={{fontSize:'1.5em',color:'#2b3a67',margin:'15px 10px'}}>Work with your pre-vetted and highly trained professional graphic designer exclusively</h2>
                        <ul>
                            <li> - Unlimited requests</li>
                            <li> - Real-time collaboration and response via Slack</li>
                            <li> - Voice and video meeting via Zoom</li>
                            <li> - Access to licensed images for free (Shutterstock)</li>
                            <li> *(2 days = 5 images, 5 days = 10 images, 2 weeks = 20 images, 1 month = 30 images)</li>
                            <li> - Same-day design delivery</li>
                            <li> - Get all working high-resolution file</li>
                            <li> - No minimum contract required</li>
                            <li> - Money back guarantee</li>
                            <li> - If you are not happy after 3 days of working with your designer,
                                we'll return your money.</li>
                        </ul>
                    </div>
                </Col>
                </Row>

                <Row>
                <Col xs={24} sm={24} md={10} lg={10}  >
                    <div>
                    <BookForm/>
                    </div>
                    
                </Col>

                <Col xs={24} sm={24} md={14} lg={14} className="" style={{maxHeight: 1000, display:'inline-block', position:'relative'}}>
                    <div style={{maxWidth:'780px',textAlign:'left',margin:'0 auto',position:'relative',top:'130px'}}>
                        <img className="laptop-guy" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Illust+vr+3.png" alt="" />
                    </div>
                </Col>
                </Row>
            </div>
            
        )
    }
}
