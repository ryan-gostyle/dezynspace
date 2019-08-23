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
                                    <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Asset+5%402x.png"className="service-list" />
                                    <p>Direct Contact</p>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Asset+6%402x.png" className="service-list"/>
                                    <p>Ultra-fast Turnaround</p>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Asset+7%402x.png" className="service-list" />
                                    <p>1-to-1 Set-up</p>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Asset+8%402x.png" className="service-list" />
                                    <p>Moneyback Guarantee</p>
                                </Col>
                            </Row>
                            </div>
                    </div>
                </Col>
                </Row>

                <Row>
                    <Col xs={24} sm={24} md={12} lg={9} className="column-padding section-container" >
                    <div className="img-container">
                        <img src='https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Path+9.png' className="dots"/>
                        <img src='https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Iphone+8.png' className="mobile"/>
                    </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={15} className="column-padding section-container" >
                        <section className="position-content-four">
                            <div className="text-content-head-four" >
                                    <h2 className="head-5" >Real-time questions, real-time answers.</h2>
                            </div>
                            <div className="text-content-head-four" style={{maxWidth:'600px'}}>
                                    <h5 className="head-6" >No more back-and-forth and missed deadlines,communicate as much as you need, in any manner you wish via Slack. <br/> <br/>
                                    Our 1-to-1 setup assures you of your designer’s focus and responsiveness with your needs. Ready whenever and wherever you are.</h5>
                            </div>
                        </section>
                        <div className="laptop-container">
                        <img src='https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Slack+Screenshot_laptop.png' className="laptop"/>
                        </div>
                        <img src='https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Path+10.png' className="xmarks"/>
                    </Col>
                </Row>
            </div>
        )
    }
}
