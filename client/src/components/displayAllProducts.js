import React from 'react';
import DisplayImage from './displayImage';
import ImageData from './imageData';

const DisplayAllProducts = () => {

    const images = ImageData.map((img, index) => {
        return (
            <DisplayImage key={index} about={img}/>
        )
    });

    return (
        <section className="product-container">
            {images}
        </section>
    )
}

export default DisplayAllProducts;