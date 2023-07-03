import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Logo
import logo from "../../assets/images/logo.png";

//Import Footer link
import FooterLinks from "./footer-links";
import LinkSection from "./link-section";

import imagetwo from '../../assets/images/newl.png';

class Footer extends Component {
    state = {
        links1 : [
            { link : "#", title : "Web Design" },
            { link : "#", title : "Graphic Design" },
            { link : "#", title : "Power & Energy" },
            { link : "#", title : "Solar Power" },
            { link : "#", title : "Green energy" },
        ],
        links2 : [
            { link : "#", title : "About Us" },
            { link : "#", title : "Help & Support" },
            { link : "#", title : "Privacy Policy" },
            { link : "#", title : "Terms & Conditions" },
            { link : "#", title : "FAQ" },
        ],
        socials : [
            { class : "bg-twitter", icon : "ti-twitter-alt", link : "#" },
            { class : "bg-dribbble", icon : "ti-dribbble", link : "#" },
            { class : "bg-linkedin", icon : "ti-linkedin", link : "#" },
            { class : "bg-googleplus", icon : "ti-google", link : "#" },
            { class : "bg-facebook", icon : "ti-facebook", link : "#" },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <footer className="footer  bg-lightgray ">
                    <Container>
                        <Row>

                            <Col md="4" sm="12">
                                {/* <img src={logo} alt="logo" height="24" /> */}
                                {/* <div style={{color:"black",fontSize:"20px"}}>Ayatana</div> */}
                                <img src={ imagetwo }  style={{width:"300px",height:"200px"}} />
                                {/* <p className="margin-t-20">The digital marketing platform that connects small businesses with their target audience.</p> */}

                                {/* <ul className="list-inline social">
                                    {
                                        this.state.socials.map((social, key) =>
                                            <li key={key} className="list-inline-item">
                                                <Link to={social.link} className={social.class + " mr-1"}><i className={social.icon}></i></Link>
                                            </li>
                                        )
                                    }
                                </ul> */}
                            </Col>

                            {/* <Col md={{size:3, offset : 2}} sm="6">
                                <LinkSection title="Solutions" links={this.state.links1} />
                            </Col> */}

                            {/* <Col md="6" sm="6"> */}
                               {/* Discover Phygital Santhe Website Here */}
                                 {/* <button style={{ border:"none",outline:"none",border:"1px solid #f56363",backgroundColor:"#f56363",borderRadius:"20px",color:"white",width:"300px",height:"40px"}}><a href="https://incomparable-hamster-92fd22.netlify.app/"  target="_blank" style={{color:"white"}}><b>EXPLORE PHYGITAL</b></a></button> */}
                            {/* <LinkSection title="Useful Links" links={this.state.links2}  /> */}
                            {/* </Col> */}

                        </Row>

                    </Container>
                </footer>
                {/* Render footer links */}
                <FooterLinks/>
            </React.Fragment>
        );
    }
}

export default Footer;