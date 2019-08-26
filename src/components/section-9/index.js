import React, { Component } from 'react'
import { Row, Col } from 'antd';

export default class SectionNine extends Component {
    render() {
        return (
            <div className="col-24 section-nine ">
            <Row >
                <Col xs={24} sm={24} md={24} lg={24} >                
                            <div className="container" >
                            {/*add this!! marginTop:'30px' */}
                            <Row>
                            {/*img size for mobile!! width: 50px; height: 50px; */}
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <img alt="" src="#" className="arrow" />
                                    <p>Lorem ipsum dolor sit amet, eos et congue percipitur, ex vis vidit lorem forensibus. </p>
                                    <h6 style={{textAlign:'right'}}>- client name</h6>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <img alt="" src="#"  className="arrow"/>
                                    <p>Lorem ipsum dolor sit amet, eos et congue percipitur, ex vis vidit lorem forensibus.</p>
                                    <h6 style={{textAlign:'right'}}>- client name</h6>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <img alt="" src="#"  className="arrow" />
                                    <p>Lorem ipsum dolor sit amet, eos et congue percipitur, ex vis vidit lorem forensibus.</p>
                                    <h6 style={{textAlign:'right'}}>- client name</h6>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} className="section-nine-position-link">
                                <a  href="/" className="section-nine-link">Read more success stories here.</a>
                                </Col>
                            </Row>
                            </div>

                </Col>
                </Row>
            </div>
        )
    }
}
