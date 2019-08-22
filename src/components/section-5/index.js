import React, { Component } from 'react'
import { Row, Col } from 'antd';

export default class SectionFive extends Component {
    render() {
        return (
            <div className="col-24 section-five ">
            <Row >
                <Col xs={24} sm={24} md={24} lg={24} className="column-padding " >
                        <h1 className="title" style={{fontSize:"2.5em!important"}}>3 Easy Steps</h1>                 
                            <div className="img-container" style={{marginTop:'70px'}}>
                            {/*add this!! marginTop:'30px' */}
                            <Row>
                            {/*img size for mobile!! width: 50px; height: 50px; */}
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Asset+18%402x.png" className="arrow" />
                                    <p>Decide the length of time you need your dedicated designer.</p>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Asset+19%402x.png"  className="arrow"/>
                                    <p>Settle the agreed cost online. Hassle-free,secure, and easy!</p>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Asset+20%402x.png"  className="arrow" />
                                    <p>In less than 24 hours from confirmed payment,a dedicated graphic designer will contact you to get started.</p>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24}>
                                <h1 className="title" style={{textDecoration:'underline',margin:'25px 5px'}}>See why clients love working with our dedicated designers!</h1>
                                </Col>
                            </Row>
                            </div>

                </Col>
                </Row>
            </div>
        )
    }
}
