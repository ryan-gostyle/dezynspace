import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { relative } from 'path';

export default class SectionThree extends Component {
    render() {
        return (
            <div className="col-24 section-three" style={{margin:"30px 0",overflow:"hidden",height:"600px"}}>
                <Row style={{margin: '5rem 0'}}>
                <Col xs={24} sm={24} md={12} lg={12} className="column-padding" style={{maxHeight: 1000, display:'inline-block', position:'relative'}}>
                    <div className="text-container">
                        <div className="text-content" >
                            <h2>
                                The First-ever Graphic Designer Renting Platform
                            </h2>
                                <p>
                                    Have your in-house graphic designer without the hassles of hiring one. Choose the plan that best suits you needs, pay* through our secure platform, and you're ready to start. *money-back guarantee   
                                </p>
                                <p>
                                    Communicate with your designer real-time using Slack. And the best part? Our 1-to-1 setup assures you that your rented graphic designer is focused on your needs, enabling faster, error-free, and efficient design turnarounds.
                                </p>
                        </div>
                    </div>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} className="column-padding" style={{maxHeight: 1000, display:'inline-block', position:'relative'}}>
                    <div className="video-container">
                        <div className="video-content" >
                        <iframe width="500" height="350" src="https://www.youtube.com/embed/2aYPbeBZrG4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </Col>
                </Row>
            </div>
        )
    }
}
