import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { relative } from 'path';

export default class SectionSeven extends Component {
    render() {
        return (
            <div className="col-24 section-seven" style={{margin:"0 0 30px 0",overflow:"hidden",}}>
                <Row>
                <Col xs={24} sm={24} md={7} lg={7} className="pink-gradient" >
                    <h2 style={{color:'#fff',margin:'15px 10px'}}>Pricing</h2>
                    <div class="price-box" style={{height:'120px',width:'230px',background:'#fff',margin:'0 auto',marginTop:'20px',marginBottom:'15px',borderRadius:'2px'}}>

                    </div>
                    <div class="price-box" style={{height:'120px',width:'230px',background:'#fff',margin:'0 auto',marginTop:'20px',marginBottom:'15px',borderRadius:'2px'}}>
                        
                    </div>
                    <div class="price-box" style={{height:'120px',width:'230px',background:'#fff',margin:'0 auto',marginTop:'20px',marginBottom:'15px',borderRadius:'2px'}}>
                        
                    </div>
                    <div class="price-box" style={{height:'120px',width:'230px',background:'#fff',margin:'0 auto',marginTop:'20px',marginBottom:'15px',borderRadius:'2px'}}>
                        
                    </div>
                </Col>

                <Col xs={24} sm={24} md={17} lg={17} className="" style={{maxHeight: 1000, display:'inline-block', position:'relative'}}>

                </Col>
                </Row>
            </div>
        )
    }
}
