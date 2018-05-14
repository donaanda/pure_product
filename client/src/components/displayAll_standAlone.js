import React from 'react';
import DisplayImage from './displayImage';
import ImageData from './imageData';
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';

const DisplayAllStandAlone = () => {

    const images = ImageData.map((img, index) => {
        return (
            <DisplayImage key={index} about={img} />
        )
    });

    return (
        <section className="product-container">
            <Header />
            <Link to="/product">
                {images}
            </Link>
            <Footer />
        </section>
    )
}

export default DisplayAllStandAlone;