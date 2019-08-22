import React, { Component } from 'react'
import { Row, Col } from 'antd';

export default class SectionTwo extends Component {
    render() {
        return (
            <div className="col-24 section-two" style={{margin:"30px 0",overflow:"hidden",height:"900px"}}>
                <Row>
                <Col xs={24} sm={24} md={24} lg={24} className="column-padding" style={{maxHeight: 1000, display:'inline-block', position:'relative',padding:'20px 35px;'}}>
                    <section className="container" style={{maxWidth:'900px'}}>
                    <div className="img-container">
                            <img src='https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Path+9.png' className="sectiontwo-dots"/>
                        </div>
                        <div className="text-content-head" >
                            <h2 className="head-1" >Are you struggling in finding a professional graphic designer?</h2>
                        </div>
                        <div className="text-content-head" style={{maxWidth:'600px'}}>
                            <h2 className="head-2" >Renting your own graphic designer is the modern day solution for
    all your hiring woes.</h2>
                        </div>
                        <div className="text-content-head">
                            <h2 className="head-3">No more stress</h2>
                            <p className="item-1">Scheduling job interviews</p>
                            <p className="item-2">Dealing with all HR and management concerns.</p>
                            <p className="item-3">On missing deadlines just because you don’t have a graphic designer</p>
                            <p className="item-4">Worrying about minimum contract period.</p>
                            <p className="item-5">Risking your money to the wrong talent</p>
                        </div>
                        <div style={{borderRadius:'26px',width:'100%',padding:'20px 25px',border:'2px solid #a3cea4',maxWidth:'320px',background:'#a3cea4',margin:'0 auto',marginTop:'120px',marginBottom:'15px'}}>
                            <h2 style={{color:'#fff',fontSize:'1.2em',fontWeight:'500',textAlign:'center'}}>Plan your design needs better.<br/> Rent a graphic designer now.</h2>
                        </div>
                    </section>
                        <div className="img-container">
                            <img src='https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/Asset+4%403x.png' className="wave"/>
                        </div>

                </Col>
                </Row>
                {/* <Row>
                <Col xs={24} sm={24} md={12} lg={9} className="column-padding" style={{maxHeight: 1000, display:'inline-block', position:'relative'}}>

                </Col> */}
                {/* <Col xs={24} sm={24} md={24} lg={1} className="column-padding" style={{maxHeight: 1000, display:'inline-block', position:'relative'}}></Col> */}
                {/* <Col xs={24} sm={24} md={12} lg={15} className="column-padding" style={{maxHeight: 1000, display:'inline-block', position:'relative',padding:'20px 35px;'}}>
                    <div className="text-content">
                        <h1>The quick risk-free solution to your growing graphic design needs</h1>
                        <div style={{margin:'35px 0'}}> </div>
                        <p>Finding the right graphic designer is time-consuming, and so is the hiring process.</p>
                        <p>We've done the hard work for you, so all you have to is choose when to start.</p>
                        <p>Renting your own dedicated graphic designer allows you a risk-free setup to meet your creative needs whenever you need it.</p>
                        <p>Our dedicated platform allows you easy, real-time communication with your graphic designer, enabling exceptional execution and ultra-fast turnarounds.</p>
                        <p>Plan better and accomplish more for your business when you rent your own dedicated graphic designer.</p>
                    </div>
                </Col>
                </Row> */}
            </div>
        )
    }
}
