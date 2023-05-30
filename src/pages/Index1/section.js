import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import Carousel from 'react-bootstrap/Carousel';
import carousel1 from "../../assets/images/Gallery (1).png";
import carousel2 from "../../assets/images/Gallery (1).png";
import carousel3 from "../../assets/images/Carosel 4.png";
// import carousel1 from '../images/Gallery (1).png';
// import carousel2 from '../images/Gallery (1).jpg';
// import carousel3 from '../images/Gallery (1).png';

//Importing Modal
import ModalSection from '../../components/common/ModalSection';

//Import Image
// import img1 from "../../assets/images/bg-home.jpg";

class Section extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            height:window.innerHeight
        }
        this.setFullScreen.bind(this);
        this.callModal.bind(this);
    }

    callModal = () => {
        this.refs.child.openModal();
    }

    setFullScreen = () => {
        var topSectionEl = document.getElementById('home-fullscreen');
        if(topSectionEl.clientHeight>0) {
            var windowHeight = window.innerHeight;
            this.setState({ 
                height: windowHeight
            });
        }
    }

    componentDidMount(){
        this.setFullScreen();
        window.addEventListener("resize", this.setFullScreen);
    }

    componentWillUnmount(){
        window.addEventListener("resize", this.setFullScreen);
    }
    
    render() {
        return (
            <React.Fragment>
            <section className=" home bg-home " id="home">

                <Container>
                    
                    <Row>
                        <Col md="12">
                            <div className="home-fullscreen" id="home-fullscreen" style={{height : this.state.height+"px"}}>
                                <div className="full-screen">
                                    <div className="home-wrapper home-wrapper-alt" >
                                        <div>
                                        < div className="full-container">
   
    </div>
                                        </div>
                                        <Row >
                                            <Col md="6">
                                                <h2 style={{fontSize:"20px",color:"grey"}}><span className="font-2"  style={{fontSize:"35px",color:""}}>AYATANA</span><br/>Phygital Perfection:Where Innovation Meets Experience</h2>
                                              
                                                <h4 className="font-20" style={{color:"black"}}>Ayatana is a phygital retail platform that uses AI to blend the physical and digital worlds. We offer brands a comprehensive suite of tools and capabilities to optimize their operations and engage customers in groundbreaking ways.</h4>
                                                <h4 className="font-20" style={{color:"black"}}>Whether you are a small boutique or a global brand, our platform can help you connect with your customers on a deeper level and achieve remarkable business results. Join us on this exciting journey as we redefine the future of retail through the fusion of physical and digital realms, guided by the power of AI.</h4>
                                                <h3>Welcome to the future of shopping. Welcome to Ayatana!</h3>
                                                {/* <Link to="" className="btn btn-custom">Learn more</Link> */}
                                                <div style={{textAlign:"center"}}>
                                                <Link onClick={this.callModal} to="#" className="video-btn btn popup-video"style={{border:"1px solid #f56363",backgroundColor:"#f56363",textAlign:"center"}}>Watch Video</Link>
                                                </div>
                                                {/* <button><a href="http://127.0.0.1:5500/Exhibiz/Exhibiz/index.html"  target="_blank">Explore Phygital</a></button> */}
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* Render ModalSection Component for Modal */}
                    <ModalSection ref="child" channel='vimeo' videoId='99025203' />
                </Container>
            </section>
            </React.Fragment>
        );
    }
}

export default Section;