import React, { Component } from 'react'
import { Row, Col } from 'antd'
import HowItWorks from '../../section-2/how-it-works'
import GetStartedButton from '../../get-started/get-started';
class About extends Component {
    render() {
        return (
            <div className="col-24 sections section-4">
                <h1 className='title'>ABOUT US</h1>
                <Row className="rowWidth"> 
                    <Col style={{maxWidth:600,margin:'0 auto'}}>
                        <h6>
                        Founded in August 2016 by fashion-forward, innovative women 
                        who are passionate about bringing an alternative way of shopping for clothes;
                        some don’t have the time, the budget, or are simply stuck in style ruts.
                        </h6>
                        <h6>
                        Hence, we released <b>StyleGenie</b> from the lamp.
                        </h6>
                        <h6>
                        Our mission is to grant style wishes and boost our customer's confidence through smart and sustainable fashion choices.
                        StyleGenie offers personal styling service so customers can try on pieces first before they buy!
                        </h6>
                    </Col>
                </Row>
                <HowItWorks/>
                <GetStartedButton/>
            </div> 
        )
    }
}

export default About