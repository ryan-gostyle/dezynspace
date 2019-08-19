import React, { Component } from 'react'
import { Row, Col } from 'antd';

export default class SectionTwo extends Component {
    render() {
        return (
            <div className="col-24 section-two" style={{margin:"30px 0"}}>
                <Row>
                <Col xs={24} sm={24} md={12} lg={9} className="column-padding" style={{maxHeight: 1000, display:'inline-block', position:'relative'}}>
                    <div className="img-container">
                        <img src='https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Path+8.png' className="wave"/>
                    </div>
                </Col>
                {/* <Col xs={24} sm={24} md={24} lg={1} className="column-padding" style={{maxHeight: 1000, display:'inline-block', position:'relative'}}></Col> */}
                <Col xs={24} sm={24} md={12} lg={15} className="column-padding" style={{maxHeight: 1000, display:'inline-block', position:'relative',padding:'20px 35px;'}}>
                    <div className="text-content">
                        <h1>The quick risk-free solution to your growing graphic design needs</h1>
                        <div style={{margin:'35px 0'}}> </div>
                        <p>Finding the right graphic designer is time-consuming, and so is the hiring process.</p>
                        <p>We've done the hard work for you, so all you have to is choose when to start.</p>
                        <p>Renting your own dedicated graphic designer allows you a risk-free setup to meet your creative needs whenever you need it.</p>
                        <p>Our dedicated platform allows you easy, real-time communication with your graphic designer, enabling exceptional execution and ultra-fast turnarounds.</p>
                        <p>Plan better and accomplish more for your business when you rent your own dedicated graphic designer.</p>
                    </div>
                </Col>
                </Row>
            </div>
        )
    }
}
