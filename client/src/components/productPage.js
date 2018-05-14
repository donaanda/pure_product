import React from 'react';
import Tabs1 from './tabs';
import DisplayImage from './displayImage';
import '../assets/css/productPage.css';
import GentleIcon from '../assets/images/displayImages/Compound Path_1.png';
import SafetyIcon from '../assets/images/displayImages/Group_1.png';
import GentleRating from '../assets/images/displayImages/Text_1.png';
import SafetyRating from '../assets/images/displayImages/Text_2.png';
import Header from './header';
import Footer from './footer';

const ProductPage = () => {

    const page = {
        marginTop: '5%',
        bottom: '0px'
    }

    return (
        <div>
            <Header />
            <DisplayImage />
            <div className="product-page-gentle-safety-rating">
                <div className="product-page-gentle-rating">GENTLE RATING
                    <span><img src={GentleIcon} /><img src={GentleRating} /></span>
                </div>
                <div className="product-page-safety-rating">SAFETY RATING
                    <span><img src={SafetyIcon} /><img src={SafetyRating} /></span>
                </div>
            </div>

            <div style={page}>

                <Tabs1/>


            </div>
            <Footer />
        </div>
    )
};

export default ProductPage;