import React, { Component, Suspense } from 'react';
// import ProductCarousel from '../../components/Carousel/ProductCarousel';

const NavbarPage = React.lazy(() => import('../../components/Navbar/Navbar_Page'));
// const Carousel=React.lazy(() => import('../../components/Carousel/ProductCarousel'));
const Section = React.lazy(() => import('./section'));
const Pricing = React.lazy(() => import('../../components/Pricing/pricing'));
const Features = React.lazy(() => import('../../components/Features/features'));
const Services = React.lazy(() => import('../../components/Services/services'));
// const Clients = React.lazy(() => import('../../components/Clients/clients'));
// const OurTeam = React.lazy(() => import('../../components/Team/our-team'));

const Counter = React.lazy(() => import('../../components/Counter/counter'));
const Contact = React.lazy(() => import('../../components/Contact/contact'));
const Footer = React.lazy(() => import('../../components/Footer/footer'));

class Index1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems : [
                { id: 1, idnm : "pricing", navheading: "Home" },
                { id: 2, idnm : "home", navheading: "About Us" },

                { id: 3 , idnm : "counter", navheading: "Mission" },
                { id: 4 , idnm : "features", navheading: "Features" },
                { id: 5 , idnm : "services", navheading: "Services" },
                // { id: 6, idnm : "team", navheading: "Team" },
               
                { id: 6, idnm : "contact", navheading: "Contact" },
               

                
            ],
            pos : document.documentElement.scrollTop,
            imglight : true,
            navClass : ""
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var scrollup=document.documentElement.scrollTop;
        if(scrollup > this.state.pos)
        {
            this.setState({navClass : "darkheader", imglight : false});
        }
        else
        {
            this.setState({navClass : "", imglight : true});
        }
    };

    Loader = () => {
        return (
            <div id="preloader">
                <div id="status">
                    <div className="spinner">Loading...</div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <React.Fragment>
                <Suspense fallback = {this.Loader()} >

                    {/* Importing Navbar */}
                    <NavbarPage navItems={this.state.navItems} navclassName={this.state.navClass}/>
                   {/* importing carousel */}
                   
                    {/* Importing section */}
                    <Pricing/>
                    

                    <Section/>
                    {/* impo */}
                    {/* <Carousel /> */}
                    {/* Importing features */}

                    <Counter/>
                    <Features isBgWhite={true}/>

                    {/* Importing services */}
                    <Services/>

                    {/* Importing clients */}
                    {/* <Clients/> */}

                    {/* Importing team */}
                    {/* <OurTeam/> */}

                    {/* Importing pricing */}
               

                    {/* Importing counter */}
               

                    {/* Importing contact */}
                    <Contact/>

                    {/* Importing footer */}
                    <Footer/>
                </Suspense>

            </React.Fragment>
        );
    }
}

export default Index1;