import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { Avatar } from 'antd';
import Carousel from 'nuka-carousel';
class Testimonials extends Component {
    constructor(props){
        super(props);
        this.state={
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            user : "ABBIE VICTORINO"
        }
    }
    render() {
        const inline = {height:'100%',padding:8,margin: '10px 15px', border: '3px solid #4f3949',position:'relative'}
        return (
            <div className="col-24 sections section-5">
                <h1 className='title'>TESTIMONIALS</h1>
                <Row className="rowWidthTestimonial">
                {/* <Carousel> */}
                    <Col  xs={24} sm={24} md={12} lg={12} className="column-padding" key="key1">
                        <div style={inline}>
                            <Avatar size={64} icon="user" /> 
                            <p className="contentParagraphInverse">{this.state.description}</p>
                            <h3 className="h3Testimonial">{this.state.user}</h3>
                        </div>
                     
                    </Col>
                    <Col  xs={24} sm={24} md={12} lg={12} className="column-padding" key="key2">
                        <div style={inline}>
                            <Avatar size={64} icon="user" /> 
                            <p className="contentParagraphInverse">{this.state.description}</p>
                            <h3 className="h3Testimonial">{this.state.user}</h3>
                        </div>
                    </Col>
                {/* </Carousel> */}
                </Row> 
 
            </div>
        )
    }
}

export default Testimonials