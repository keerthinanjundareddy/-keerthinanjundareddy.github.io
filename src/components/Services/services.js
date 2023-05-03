import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Service Box
import ServiceBox from "./service-box";
import imageone from '../../assets/images/team/team1.jpg'
// imports brands from '../../assets/images/team/c.png'
class Services extends Component {
    state = {
        services1 : [
           { title : "Brand Exposure", icon:require("../../assets/images/kiosk.png") ,desc : "We help brands to showcase their products and services in a unique and innovative way by creating an interactive displays. " },
           { title : "Immersive Product Experience", icon :require("../../assets/images/vr.png") , desc : "We encourage customers to engage with the brand in innovative ways by providing fascinating experience for customers through the use of VR and AR technology." },
           { title : "Product Sampling Opportunities", icon : require("../../assets/images/human-hand.png") , desc : " We provide a platform for brands to offer product samples to their target audience, which can increase brand loyalty and drive conversions." },
        ],   
        services2 : [
            { title : "Data Analytics", icon : require("../../assets/images/data-analytics (1).png") , desc : "We enable brands to gather valuable data on customer behavior and preferences, which can be used to improve their products  and enhance customer satisfaction." },
            { title : "Interactive Gaming Zones", icon : require("../../assets/images/game-console.png") , desc : "We provide an entertaining gaming environment for the customers that goes beyond the traditional retail environments." },
            { title : "Mobile Scanning Capability", icon :require("../../assets/images/qr-scan.png") , desc : "We help Customers to easily access detailed product information on their mobile devices by scanning the QRcode displayed on interactive panels."},
        

         ],
        services3 : [
            { title : "Greater reach and accessibility", icon : require("../../assets/images/globe (2).png") , desc : "We provide great reach and accessibility to brands, allowing them to reach their target audience in high-traffic location." },
            { title : "Cost-effective Marketing", icon :require("../../assets/images/save-money (1).png") , desc : "We help brands save on physical showroom expenses, allowing them to showcase their products in a phygital environment." },
            // { title : "Creative Idea", icon : "ti-notepad", desc : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet." },
        ],     
    }
    render() {
        return (
            <React.Fragment>
    <section className={this.props.isBgWhite === true ? "section" : "section bg-lightgray"} id="services">
        <Container>
            <SectionTitle title1="Our" title2="Services" />          

            <Row>
                <ServiceBox services={this.state.services1} />                
            </Row>      

            <Row>
                <ServiceBox services={this.state.services2} />                
            </Row> 

            <Row>
                <ServiceBox services={this.state.services3} />                
            </Row>       

        </Container>
        
    </section>
            </React.Fragment>
        );
    }
}

export default Services;