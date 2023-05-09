import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Pricing
// import PricingBox from './pricing-box';
import '../../assets/css/Own.css'
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from "../../assets/images/Carosel 1.png";
import carousel2 from "../../assets/images/Carosel 2.png";
import carousel3 from "../../assets/images/Gallery (1).png";

class Pricing extends Component {
    // state = {
    //     pricings : [
    //         { id : 1, title : "Economy Plan", price : "9", duration : "month",
    //             features : 
    //                 { hosting : "1", users : "10", database : "3", other : "Website builder", support : "Free", other2 : "Basic Updates" }
                
    //         },
    //         { id : 2, title : "Deluxe Plan", price : "19", duration : "month", isActive : true,
    //             features : 
    //                 { hosting : "9", users : "100", database : "10", other : "Website builder", support : "Free", other2 : "Premium Updates" }
                
    //         },
    //         { id : 3, title : "Ultimate Plan", price : "29", duration : "month",
    //             features : 
    //                 { hosting : "Unlimited", users : "1000", database : "Unlimited", other : "Website builder", support : "Free", other2 : "Premium Updates" }
                
    //         },
    //     ]
    // }
    render() {
        return (
            <React.Fragment>
    <section className="section" id="pricing" style={{width:"100%"}} >
        <Container >
{/* 
        <SectionTitle title1="Simple" title2="Pricing" />
            

            <Row>
                <Col md={{size:10, offset:1}}>
                    <Row className="pricing-section">
                        <PricingBox pricings={this.state.pricings} />
                    </Row>
                </Col>
            </Row> */}
            
                    {/* hii */}


                    < div className="full-container">
                    <div className="carousel slide" data-touch="true">
    <Carousel interval={null} indicators={true} className="my-indicators" style={{ color:"red  !important"}}>
      {/* <Carousel.Item   > */}
        {/* <div style={{height:"100vh",width:"100%"}}>
        <img
          className="rt"
          src={carousel1}
          alt="First slide"
          style={{width:"100%",height:"100%",objectFit:"cover"}}
        />
        </div>
        <Carousel.Caption>
          <h3 style={{fontSize:"70px"}}><b>First slide label</b></h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item > */}

<Carousel.Item  > 
        {/* <img
          className="d-block w-100"
          src={carousel2}
          alt="Second slide"
          style={{height:"500px"}}
        /> */}
        <div style={{width:"100%",height:"100%"}}>

<img
            className="rt"
            src={carousel1}
            alt="First slide"
            style={{width:"100%",height:"100%",objectFit:"cover"}}
            // playsInline
            // autoPlay
            // controls
            // loop
            // muted
          />
</div>
        <Carousel.Caption>
          <h3><b>VIRTUAL WORLD</b></h3>
          <p>Experience The Products In Virtual World</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  > 
        {/* <img
          className="d-block w-100"
          src={carousel2}
          alt="Second slide"
          style={{height:"500px"}}
        /> */}
        <div style={{width:"100%",height:"100%"}}>

<img
            className="rt"
            src={carousel2}
            alt="First slide"
            style={{width:"100%",height:"100%",objectFit:"cover"}}
            // playsInline
            // autoPlay
            // controls
            // loop
            // muted
          />
</div>
        <Carousel.Caption>
          <h3><b>PHYGITAL SHOPPING</b></h3>
          <p >Step into the phygital world of shopping</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item   >
      <div style={{height:"100vh",width:"100%"}}>
        <img
          className="d-block w-100"
          src={carousel2}
          alt="Third slide"
          style={{width:"100%",height:"100%",objectFit:"cover"}}
        />
</div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
    </div>
    </div>



        </Container>
        
    </section>
            </React.Fragment>
        );
    }
}

export default Pricing;