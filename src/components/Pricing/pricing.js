import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Pricing
// import PricingBox from './pricing-box';
import '../../assets/css/Own.css'
// import Carousel from 'react-bootstrap/Carousel';
import carousel1 from "../../assets/images/Carosel 10 (1).png";
import carousel2 from "../../assets/images/Carosel 3.png";
import carousel3 from "../../assets/images/Carosel 2 (1).png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  //   itemPadding: 20,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
    // itemPadding: 20, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
    itemPadding: 1, // optional, default to 1.
  },
};

class Pricing extends Component {
  
  
    render() {
        return (
            <React.Fragment>
    <section className="section" id="pricing" style={{width:"100%",marginTop:"0px",bottom:"0px",marginBottom:"0px"}} >
    
    <div >
    
    <Carousel
   swipeable
   draggable
   showDots={true}
   responsive={responsive}
   ssr={true} // means to render carousel on server-side.
   infinite={false}
   autoPlay={false}
   
 
   // autoPlaySpeed={1000}
   keyBoardControl={true}
   // customTransition="all .5"
   // transitionDuration={500}
   containerClass="carousel-container"
   removeArrowOnDeviceType={['tablet', 'mobile', ]}
   // dotListClass="custom-dot-list-style"
   itemClass="carousel-item-padding"
 >
  
    

     <div  className='full-div'>
     
       <img src={carousel1} alt="imageone" className='image-section' style={{height:"110vh"}}
        />
       <p className="firstSlide" style={{position:"absolute",textAlign:"center",AlignItem:"center"}}><b>Phygital Store</b></p>
       <p className="topfirstSlide" style={{position:"absolute",textAlign:"center",AlignItem:"center"}}>Step into the phygital world of shopping</p>
     </div>
     <div>
     
     <img src={carousel2} alt="imageone" className='image-section'  style={{height:"95vh"}}
       />
     <p  className="firstSlide" style={{position:"absolute"}}><b>Virtual Experience</b></p>
     <p className="topfirstSlide" style={{position:"absolute",textAlign:"center",AlignItem:"center"}}>Experience Products in Virtual World</p>
   </div>

   <div>
     
     <img src={carousel3} alt="imageone" className='image-section'  style={{height:"110vh"}}
       />
     <p className="firstSlide" style={{position:"absolute"}}><b>Phygital Shopping</b></p>
     <p className="topfirstSlide" style={{position:"absolute",textAlign:"center",AlignItem:"center"}}>Explore products in inovative ways</p>
   </div>
   
 </Carousel>
 </div>

                    
        
    </section>
            </React.Fragment>
        );
    }
}

export default Pricing;