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
import '../assets/css/landing_page.css';
import ExpandedMenuWelcome from './expandedMenuWelcome';
import axios from 'axios';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                data: null
            }
        }
    }

    async componentDidMount() {
        await axios.post(`http://localhost:8888/get_product_by_categories.php`)
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
    }

    render() {
        const { data } = this.state;
        return (
            <section className="landing_page">
                <Header history={this.props.history} />

                <div className="landing-page-button-container">
                    <div className="landing-two-container">
                        <Link to="/check_products">
                            <div className="landing_button safety">
                                <div className="wrap-landing-img">
                                    <img className="landing_img" src={lipstick} />
                                    <span>Check ingredients</span>
                                </div>
                            </div>
                        </Link>
                        <Link to="/gentle_products">
                            <div className="landing_button products">
                                <div className="wrap-landing-img">
                                    <img className="landing_img" src={product} />
                                    <span>Browse products </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="landing-two-container">
                        <Link to="/safety_rating">
                            <div className="landing_button safety_rating">
                                <div className="wrap-landing-img">
                                    <img className="landing_img" src={safety_icon} />
                                    <span>Safety Rating</span>
                                </div>
                            </div>
                        </Link>
                        <Link to="/gentle_rating">
                            <div className="landing_button gentle_rating">
                                <div className="wrap-landing-img">
                                    <img className="landing_img" src={gentle_rating} />
                                    <span>Gentle Rating</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <Link to="/product_finder">
                    <div className="product_finder_landing_button waves-effect waves-light">
                        <span>Product finder</span>
                    </div>
                </Link>
                <DisplayAllProducts data={data} />
                <Footer />
            </section>
        )
    }
}

export default LandingPage;