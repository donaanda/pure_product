import React from 'react';
import DisplayImage from './displayImage';
import ImageData from './imageData';
import { Link } from 'react-router-dom';

const DisplayAllProducts = (props) => {
    console.log('product',props.data.data);
    if (props.data.data === null){
        return <div>Nothing</div>
    }
        const products = props.data.data.map((item, index) => {
        return (
            <DisplayImage key={index} product={item} />
        )
    });

    return (
        <section className="product-container">
            <Link to="/product">
                {products}
            </Link>
        </section>
    )
}

export default DisplayAllProducts;