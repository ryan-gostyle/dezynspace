import React, { Component } from 'react'
import { Row, Col } from 'antd'
class PickCountry extends Component {
    render() {

        return (
            <div className="col-24 sections section-4">
                <h1 className='title' style={{marginBottom: 25}}>PICK A COUNTRY</h1>
                <Row className="rowWidth" > 
                    <Col xs={24} sm={12} md={6} lg={6} className="column-padding">
                        <a href="/"><img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/xIndonesia.png.pagespeed.ic.yV9hYjeOWx.webp" alt="" /></a>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6} className="column-padding">
                        <a href="/"><img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/xMalaysa.png.pagespeed.ic.mN4zPKn60U.webp" alt="" /></a>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6} className="column-padding">
                        <a href="https://stylegenie.ph/"><img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/xPhilippines.png.pagespeed.ic.Clt0AilONO.webp" alt="" /></a>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6} className="column-padding">
                        <a href="/"><img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/xSingapore.png.pagespeed.ic.osN6BNeHzu.webp" alt="" /></a>
                    </Col>
                </Row>
            </div> 
        )
    }
}

export default PickCountry