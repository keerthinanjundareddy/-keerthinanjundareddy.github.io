import React from 'react';
// import { Container, Row, Col } from "reactstrap";

//Import Section Title
// import SectionTitle from "../common/section-title";

//Import Pricing
// import PricingBox from './pricing-box';
import '../../assets/css/Own.css'
// import '../../assets/css/New.scss'
// import Carousel from 'react-bootstrap/Carousel';
import one from "../../assets/images/Carosel 15.png";
import two from "../../assets/images/Carosel 13.png";
import three from "../../assets/images/Carosel 14.png";

// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';


function Pricing(){
  
  
    
        return (
            // <React.Fragment>
    <section className="section-five" id="pricing"  >
      
    {/* <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel"> */}
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div className='cone'>
        <img class="d-block w-100 "src={one} alt="First slide" className='cm-one'  />
        </div>
      </div>
      <div class="carousel-item">
      <div className='ctwo'>
        <img class="d-block w-100 " src={two} alt="Second slide" className='cm-two' />
        </div>
      </div>
      <div class="carousel-item">
      <div className='cthree'>
        <img class="d-block w-100 "   src={three} alt="Third slide" className='cm-three'  />
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  </div>
       {/* </div> */}
    </section>
            // </React.Fragment>
        )
        
    }


export default Pricing;