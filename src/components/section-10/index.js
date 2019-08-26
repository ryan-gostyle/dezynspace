import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }

export default class SectionTen extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="container col-24 section-ten"> 
        <h4 style={{textAlign:'left'}}>Startups, small businesses and agencies love us!</h4>
        <Slider {...settings}>
          <div>
            <img alt="" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/client-alpha-omega.db017425+(1).png"/>
          </div>
          <div>
             <img alt="" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/client-alpha-omega.db017425+(1).png"/>
          </div>
          <div>
             <img alt="" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/client-alpha-omega.db017425+(1).png"/>
          </div>
          <div>
             <img alt="" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/client-alpha-omega.db017425+(1).png"/>
          </div>
          <div>
             <img alt="" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/client-alpha-omega.db017425+(1).png"/>
          </div>
          <div>
             <img alt="" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/client-alpha-omega.db017425+(1).png"/>
          </div>
        </Slider>
      </div>
    );
  }
}