import React, { Component } from 'react'
import { Row, Col } from 'antd';
class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            subscribes : [
                {
                   key : 1,
                   image :'https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/VIP_Why-Subscribe_1-1.png',
                   title: 'Refresh your look',
                   description :'Think of StyleGenie VIP as your ultimate rotating closet! You can invigorate your wardrobe & discover new favourites. Be ready for anything on your calendar.'
                },
                {
                    key : 2,
                    image :'https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/VIP_Why-Subscribe_2-2.png',
                    title: 'Experiment with your style',
                    description :"Experiment with your personal style without the burden of ownership. Your personal style is always evolving, so why should'nt your wardrobe be too?"     
                },
                 {
                    key : 3,
                    image :'https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/VIP_Why-Subscribe_3-3.png',
                    title: 'Save money',
                    description :"Our original goal is to provide you with great value for money. Take back time spent shopping & let us cover the cleaning. Enjoy the freedom of trying styles without the buyer's remorse."
                 },
                 {
                    key : 4,
                    image :'https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/VIP_Why-Subscribe_4-4.png',
                    title: 'Dedicated stylist',
                    description :"Your stylist are here to help! Arrange a complimentary styling session over the phone any time or email us any styling inquiries."                
                 },
                 {
                    key : 5,
                    image :'https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/VIP_Why-Subscribe_5-5.png',
                    title: 'Save wardrobe space',
                    description :"Our customers report a significant reduction in the build up of unused clothing in their wardrobes. Reduce clutter in your life & keep your wardrobe on rotation instead."
                 },
                 {
                    key : 6,
                    image :'https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/VIP_Why-Subscribe_6-6.png',
                    title: 'Minimal Impact',
                    description :"Be renting instead of buying. you are supporting Circular Fashion to reduce the environmental impact of unused clothing and diverting significant amounts of waste from landfill."
                 }
            ]
        }
    }
    render() {  
        const renderSubscribes = this.state.subscribes;
        const renderState = renderSubscribes.map(subscribe => 
            <Col xs={24} sm={12} md={12} lg={8}  key={subscribe.key} className="column-padding" style={{maxHeight: 660,minHeight:450}}>
                <img src={subscribe.image} alt="" className="subscribeImage" />
               <h1 className="subscribeTitle"> {subscribe.title}</h1>
               <p className="contentParagraphSubscribe"> {subscribe.description}</p>
            </Col>
            
            )      
        return (
            <div>
                <Row className="rowWidth">
                    {renderState}
                </Row> 
            </div>         
        )
    }
}
export default Content