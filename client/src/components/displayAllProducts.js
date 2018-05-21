import React from 'react';
import DisplayImage from './displayImage';
import ImageData from './imageData';
import { Link } from 'react-router-dom';

const DisplayAllProducts = (props) => {
    // console.log('product',props.data.data);
    console.log(props);
    if (props.data.data === null) {
        return <div>Nothing</div>
    } else {
        const products = props.data.data.map((item, index) => {
            return (
                <DisplayImage key={index} product={item} img_src={item.img_src} />
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