import React from 'react';
import DisplayImage from './displayImage';
import ImageData from './imageData';
import { Link } from 'react-router-dom';
import Loader from './loader';
import '../assets/css/displayImage.css';

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
    console.log(props);

    if (props.data.data === null) {
        return <Loader />
    } else if (!props.data.success) {
        return (
            <section>
                <h1>Oops! No results found...</h1>
                <Link to="/">
                    <div className="return-home-cont">
                        <button className="btn return-home-btn">
                            Return Home
                        </button>
                    </div>
                </Link>
            </section>
        )
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