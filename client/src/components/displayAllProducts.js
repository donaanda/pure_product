import React from 'react';
import DisplayImage from './displayImage';
import ImageData from './imageData';
import { Link } from 'react-router-dom';

const DisplayAllProducts = (props) => {
    if (props.data.data === null) {
        return <div>Nothing</div>
    } else {
        const products = props.data.data.map((item, index) => {
            return (
                <DisplayImage key={index} product={item} />
            )
        });

        return (
            <div className="display-all-products-content">
                {products}
            </div>
        )
    }
}

export default DisplayAllProducts;