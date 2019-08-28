import React, { Component } from 'react'
import { Row, Col } from 'antd';

export default class SectionTwo extends Component {
    render() {
        return (
            <div className="col-24 section-two" >
                <Row>
                <Col xs={24} sm={24} md={5} lg={5} style={{}}>

                </Col>
                <Col xs={24} sm={24} md={14} lg={14} style={{}}>
                    <div className="text-content-head"  style={{maxWidth:'600px'}} >
                    <div className="img-container-rectangle" >
                        <img alt="" src='https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Group+232.png' className="corners"/>
                    </div>
                    <h2 className="head-1" >Are you struggling in finding a professional graphic designer?</h2>
                            <h2 className="head-2" style={{maxWidth:'430px'}}>Renting your own graphic designer is the modern day solution for
                            all your hiring woes.</h2>
                    </div>
                    <div className="text-content-head-3">
                        <h2 className="head-3">NO MORE</h2>
                        <p className="item-1">Scheduling job interviews.</p>
                        <p className="item-2">Dealing with HR and management concerns.</p>
                        <p className="item-3">Missing deadlines.</p>
                        <p className="item-4">Worrying about minimum contract period.</p>
                        <p className="item-5">Risking your money to the wrong talent.</p>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={5} lg={5}>
                    <div className="img-container" style={{textAlign:'right'}}>
                        <img alt="" src='https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Path+9.png' className="sectiontwo-dots"/>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} style={{}}>
                    <div className="sectiontwo-divlink">
                        <a href="/" className="sectiontwo-link">Plan your design needs better.<br/> Rent a graphic designer now.</a>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24}  style={{textAlign:'left'}}>
                    <div className="img-container-wave">
                            <img alt="" src='https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Asset+4%403x.png' className="wave"/>
                    </div>
                </Col>
                    {/* <div className="container" style={{maxWidth:'900px',marginTop:'20px'}}>

                        



                    </div>
 */}

                
                </Row>
            </div>
        )
    }
}
