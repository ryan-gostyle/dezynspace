import { Row, Col  } from 'antd';
import React, { Component } from 'react'

export default class SectionThirteen extends Component {
    render() {
      return (
        <div className="col-24 section-thirteen"> 
            <Row>
                <Col xs={24} sm={24} md={12} lg={12} >
                    <div className="team-text">
                        <h1 style={{textAlign:'right'}}>guided by a strong mission </h1>
                        <div className="team-about">
                            <p>Hi there! We're Dezynspace, a creative company that cares about the future of design. We believe that the future of design rest on the future of the next generation.</p>
                            <p>That's why we make it our goal to ensure that they do.</p>
                            <p><b>DOTO: Design One, Teach One.</b></p>
                            <p>For every XXX hours of rented designer time, we're teaching XXX under-priveleged children the basics of graphic design...</p>
                        </div>
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
