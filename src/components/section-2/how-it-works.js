import React, { Component } from 'react'
import { Row, Col } from 'antd';

class HowItWorks extends Component{
    constructor(props){
        super(props);
        this.state = {
            steps : [
                {
                   key : 1,
                   image :'https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/VIP_How-it-works_1.png',
                   button :'Step 1',
                   title: 'Create a Style Profile',
                   description :'Let us get to know you! Your style wish, sizes and style preferences!'
                },
                {
                    key : 2,
                    image :'https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/VIP_How-it-works_2.png',
                    button :'Step 2',
                    title: 'Subscribe to VIP',
                    description :'Same time, money, and effort with help from our expert stylist!'
                 },
                 {
                    key : 3,
                    image :'https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/VIP_How-it-works_3.png',
                    button :'Step 3',
                    title: 'Dress up',
                    description :'Try on new clothes and accessories every week!'
                 },
                 {
                    key : 4,
                    image :'https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/VIP_How-it-works_4.png',
                    button :'Step 4',
                    title: 'Keep or Swap',
                    description :'Keep items you love & enjoy special discounts! OR swap with new items on the next delivery!'
                 }
            ]
        }
    }
    render() {
        const renderSteps = this.state.steps;
        const renderState = renderSteps.map(steps => 
            <Col xs={24} sm={12} md={12} lg={6} className="column-padding" key={steps.key} style={{maxHeight: 1000, display:'inline-block', position:'relative'}}>
               <img src={steps.image} alt="" className="howItWorksImage" />
               <button className="howItWorksButton"> {steps.button}</button>
               <h1 className="howItWorksTitle"> {steps.title}</h1>
               <p> {steps.description}</p>
            </Col>
            
            )
        return (
            <div className="col-24 sections section-2">
                <h1 className='title'>HOW IT WORKS</h1>
                <Row className="rowWidth">
                    {renderState}
                </Row>

            </div>
        )
    }
}

export default HowItWorks