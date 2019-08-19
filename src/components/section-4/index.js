import React, { Component } from 'react'
import { Row, Col } from 'antd';

export default class SectionFour extends Component {
    render() {
        return (
            <div className="col-24 section-four">
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} className="column-padding section-container" >
                    <div className="jumbotron" >
                        <h1 className="title" >A Revolutionary Service With Awesome Benefits</h1>                 
                            <div className="img-container">
                            {/*add this!! marginTop:'30px' */}
                            <Row>
                            {/*img size for mobile!! width: 50px; height: 50px; */}
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Asset+1%402x.png"className="service-list" />
                                    <p style={{padding:'5px'}}>Direct Contact</p>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Asset+2%402x.png" className="service-list"/>
                                    <p style={{padding:'5px'}}>Ultra-fast Turnaround</p>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Asset+3%402x.png" className="service-list" />
                                    <p style={{padding:'5px'}}>1-to-1 Set-up</p>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Asset+4%402x.png" className="service-list" />
                                    <p style={{padding:'5px'}}>Moneyback Guarantee</p>
                                </Col>
                            </Row>
                            </div>
                    </div>
                </Col>
                </Row>

                <Row>
                    <Col xs={24} sm={24} md={12} lg={12} className="column-padding section-container" >
                    <div className="img-container">
                        <img src='https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Path+9.png' className="dots"/>
                    </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} className="column-padding section-container" >
                    </Col>
                </Row>
            </div>
        )
    }
}
