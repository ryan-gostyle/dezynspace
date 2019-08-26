import { Row, Col  } from 'antd';
import React, { Component } from 'react'

export default class SectionFourteen extends Component {
    render() {
      return (
        <div className="col-24 section-fourteen"> 
            <Row>
                <Col xs={24} sm={24} md={12} lg={12} >
                    <div className="team-text">
                        <p>RENT YOUR OWN PROFESSIONAL GRAPHIC DESIGNER IN LESS THAN 24 HOURS</p> 
                    </div>
                    <div className="team-link">
                        <a href="/"><button>Ask Now</button></a>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} >

                </Col>
            </Row>
        </div>
      );
    }
  }
