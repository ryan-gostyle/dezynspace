import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Content from './content';
class AboutUs extends Component {
    render() {
        return (
            <div className="col-24 sections section-3">
                <Row className="rowWidth">
                    <Col xs={24} sm={12} md={12} lg={12} className="column-padding content-align" >
                        <Content/>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} className="column-padding" >
                        <div style={{textAlign:'left',padding:20}}>
                            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Web_Stylegenie_Asia3_phone.png" alt=''  className="aboutUsImage"/>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AboutUs