import React, { Component } from 'react'
import { Row, Col } from 'antd'
class SeenOn extends Component {
    render() {
        return (
            <div className="col-24 sections section-4">
                <h1 className='title'>AS SEEN ON</h1>
                <Row className="rowWidth"> 
                    <Col>
                        <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Web_Stylegenie_Asia3_As-see-on.jpg" alt='' style={{width:'100%'}}/>
                    </Col>
                </Row>
            </div>  
        )
    }
}

export default SeenOn