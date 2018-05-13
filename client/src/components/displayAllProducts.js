import React from 'react';
import DisplayImage from './displayImage';
import ImageData from './imageData';
import {Link} from 'react-router-dom';

const DisplayAllProducts = () => {

    const images = ImageData.map((img, index) => {
        return (
            <DisplayImage key={index} about={img}/>
        )
    });

    return (
        <section className="product-container">
            <Link to="/product">
                {images}
            </Link>
        </section>
    )
}

export default DisplayAllProducts;