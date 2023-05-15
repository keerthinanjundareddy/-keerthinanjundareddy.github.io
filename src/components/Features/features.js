import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import '../../assets/css/style.css'
//Import Images
import mac from "../../assets/images/mac.png";
import watch1 from "../../assets/images/watch-1.png";
import FeatureBox from '../common/feature-box';
import Kioskimage from "../../assets/images/kioskimage.jpg"
import Vrar from "../../assets/images/Vrar.JPG"
import Qrimage from "../../assets/images/Qrimage.jpeg"
import kiosks from "../../assets/images/kiosk-image.jpg"
import thumb from "../../assets/images/thumb.jpg"
import multimedia from "../../assets/images/kiosk-white.jpg"
import thumbs from "../../assets/images/thumb(1).jpg"
import qrcodes from "../../assets/images/qrcodes.jpg"
import Picture1 from "../../assets/images/Picture1.png"


// import Scanner from "../../assets/images/Scanner.png"
import vrnew from "../../assets/images/VR (3).png"
import Gallery from "../../assets/images/video.png"
import Mobilescanner from "../../assets/images/Mobile scanner.png"
import digitalkiosk from "../../assets/images/Kiosk (1) (2).png"
// vrnew
class Features extends Component {
    render() {
        return (
            <React.Fragment>
    <section className={this.props.isBgWhite === true ? "sections" : "section bg-lightgray"} id="features">
        <Container>
            <Row>
                <Col sm="12">
                    <div className="title-box text-center">
                        <h2 >Our Features</h2>
                    </div>
                </Col>
            </Row>
            

            <Row className="verticalone">
                <Col sm="5">
                    <FeatureBox
                        number="1"
                        title="Virtual reality (VR) and Augmented reality (AR) "
                        desc1="Virtual reality (VR) and Augmented reality (AR)  are immersive digital technologies 
                        that creates a completely virtual environment with the use of a headset device."
                        // desc2="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        link="#"
                    />
                </Col>
                

                <Col sm={{size:6, offset : 1}}>
                    <img src={vrnew} className="img-fluid" alt="img" style={{borderRadius:"10px"}}/>
                </Col>
                
            </Row>
            

            <Row className="verticaltwo">
                <Col sm="5">
                    <img src={digitalkiosk} className="img-fluid" alt="img" />
                </Col>
                <Col sm={{size:6, offset : 1}}>

                    <FeatureBox
                        number="2"
                        title=" Interactive Panels "
                        desc1=" They  are typically designed to be easy to use, intuitive, and visually appealing,It  is a technology-based solution that provide a self-service option to their customers." 
                        // desc2="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        link="#"
                    />

                </Col>
                

            </Row>


            
            <Row className="vertical-content features">
                <Col sm="5">
                    <FeatureBox
                        number="3"
                        title="  High-quality images and videos"
                        desc1="High-quality images and videos  refers to visual content that is produced at a high resolution  with superior image and video quality on the interactive panels.  "
                        
                        // desc2="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        link="#"
                    />
                </Col>
                

                <Col sm={{size:6, offset : 1}}>
                    <img src={ Gallery} className="img-fluid" alt="img" style={{borderRadius:"10px"}} />
                </Col>
                
            </Row>


            
            <Row className="vertical-content features">
                <Col sm="5">
                    <img src={Mobilescanner } className="img-fluid" alt="img" />
                </Col>
                <Col sm={{size:6, offset : 1}}>

                    <FeatureBox
                        number="4"
                        title="  Mobile QR code Scanner "
                        desc1= " QR code scanner is a innovative technology feature used in our digital kiosk setup to enhance the customer experience, it is a two-dimensional barcode that can be scanned using a smartphone camera to access the product information in smart phone."
                        // desc2="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        link="#"
                    />

                </Col>
                

            </Row>

        </Container>
        
    </section>
            </React.Fragment>
        );
    }
}

export default Features;