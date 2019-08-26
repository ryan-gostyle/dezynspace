import React, { Component } from 'react'
import { Row, Col } from 'antd';

export default class SectionFive extends Component {
    render() {
        return (
            <div className="col-24 section-five ">
            <Row >
                <Col xs={24} sm={24} md={24} lg={24} className="column-padding " >
                        <h1 className="title" style={{fontSize:"2.5em!important",fontWeight:"400"}}>3 Easy Steps</h1>                 
                            <div className="img-container container" >
                            {/*add this!! marginTop:'30px' */}
                            <Row>
                            {/*img size for mobile!! width: 50px; height: 50px; */}
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <img alt="" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Group+229.png" className="arrow" />
                                    <p>Decide the length of time you need your dedicated designer.</p>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <img alt="" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Group+230.png"  className="arrow"/>
                                    <p>Settle the agreed cost online. Hassle-free,secure, and easy!</p>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <img alt="" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Group+231.png"  className="arrow" />
                                    <p>In less than 24 hours from confirmed payment,a dedicated graphic designer will contact you to get started.</p>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24}>
                                <a  href="/" className="section-five-link">See why clients love working with our dedicated designers!</a>
                                </Col>
                            </Row>
                            </div>

                </Col>
                </Row>
            </div>
        )
    }
}
