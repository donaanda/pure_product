import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';
import DisplayAllProducts from './displayAllProducts';
import gentle_rating from '../assets/images/landing_page_icons/gentle_heart.png';
import foundation from '../assets/images/landing_page_icons/foundation.png';
import lipstick from '../assets/images/landing_page_icons/lipstick.png';
import safety_icon from '../assets/images/landing_page_icons/safety.png';
import product from '../assets/images/landing_page_icons/product.png';
import Header from './header.js';
import '../assets/css/footer_landing_sign_in.css';
import ExpandedMenuWelcome from './expandedMenuWelcome';



class LandingPage extends Component {
    render() {
        return (
            <section className="landing_page">
                <Header />
                <Link to="/check_products">
                    <div className="landing_button safety">
                        <div className="wrap-landing-img">
                            <img className="landing_img" src={lipstick} />
                            <span>Check the safety of personal care products</span>
                        </div>
                    </div>
                </Link>
                <Link to="/sign_in">
                    <div className="landing_button products">
                        <div className="wrap-landing-img">
                            <img className="landing_img" src={product} />
                            <span>Discover gentle and effective products </span>
                        </div>
                    </div>
                </Link>
                <Link to="/sign_in">
                    <div className="landing_button safety_rating">
                        <div className="wrap-landing-img">
                            <img className="landing_img" src={safety_icon} />
                            <span>What our safety rating means</span>
                        </div>
                    </div>
                </Link>
                <Link to="/sign_in">
                    <div className="landing_button gentle_rating">
                        <div className="wrap-landing-img">
                            <img className="landing_img" src={gentle_rating} />
                            <span>What our gentle rating means</span>
                        </div>
                    </div>
                </Link>
                <Link to="/product_finder">
                    <div className="product_finder">
                        <span>Product finder</span>
                    </div>
                </Link>
                <DisplayAllProducts/>
                <Footer />
                <ExpandedMenuWelcome/>
            </section>
        )
    }
}

export default LandingPage;