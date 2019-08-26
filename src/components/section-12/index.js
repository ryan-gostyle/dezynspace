import { Row, Col  } from 'antd';
import React, { Component } from 'react'

export default class SectionTwelve extends Component {
    render() {
      return (
        <div className="col-24 section-twelve"> 
            <Row>
                <Col xs={24} sm={24} md={12} lg={12} >
                    <div className="team-text">
                        <h1>We are a team </h1>
                        <h1 style={{textAlign:'right'}}>powered by passion, </h1>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} >
                    <div className="square-orange">
                        <div className="video-content" >
                            <iframe  src="https://www.youtube.com/embed/2aYPbeBZrG4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
      );
    }
  }
