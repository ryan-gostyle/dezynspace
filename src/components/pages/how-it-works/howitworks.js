import React, { Component } from 'react'
import { Row, Col } from 'antd'
class HowItWorksPage extends Component {
    render() {
        return (
            <div className="col-24 sections section-4">
                <h1 className='title' style={{margin: '25px 5px'}}>HOW IT WORKS</h1>
                <Row className="rowWidth"> 
                    <Col style={{margin:'0 auto'}}>
                        <iframe width="100%" height="422" src="https://www.youtube.com/embed/v_IqTmNx500" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="sghowitworks" allowFullScreen></iframe>
                        <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/HIW_1024x1024.png" width="100%" height="auto" alt=""/>
                    </Col>
                </Row>
            </div> 
        )
    }
}

export default HowItWorksPage