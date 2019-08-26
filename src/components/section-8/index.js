import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { relative } from 'path';
import CountUp from 'react-countup';

export default class SectionEight extends Component {
    render() {
        return (
            <div className="col-24 section-eight container">
                <Row >
                <Col xs={24} sm={24} md={12} lg={12}>
                   <h3>We've Even Accumulated</h3>
                   <div className="count-up">
                    <h1><CountUp end={100} duration={20} />k +</h1>
                    <p>Hours of design service rendered to clients</p>
                    <h1><CountUp end={100} duration={10} /></h1>
                    <p>Clients served across 20 countries and growing</p>
                    <h1><CountUp end={1} /></h1>
                    <p>Vision. to serve with sincerity and of highest quality</p>
                   </div>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12}>

                </Col>
                </Row>
            </div>
        )
    }
}
