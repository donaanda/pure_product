import React from 'react';
import DisplayImage from './displayImage';
import ImageData from './imageData';
import { Link } from 'react-router-dom';
import Loader from './loader';

const styleClasses = {
    displayCont: 'product-display-container',
    imgProductPage: 'image-container',
    productImg: 'product-image',
    heartIcon: 'gentle-icon',
    crossIcon: 'safety-icon',
    gentleRating: 'gentle-rating',
    safetyRating: 'safety-rating'
}



const DisplayAllProducts = (props) => {
    if (props.data.data === null) {
        return <Loader/>
    } else if (!props.data.success) {
        return <div>No Result Found</div>
    } else {
        let products = props.data.data.map((item, index) => {
            return (
                <DisplayImage key={index} product={item} className={styleClasses} />
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