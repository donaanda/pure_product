import React from 'react';
import '../assets/css/displayImage.css';
import Image_1 from '../assets/images/displayImages/Image_1.png';
import Group_1 from '../assets/images/displayImages/Group_1.png';
import CompoundPath_1 from '../assets/images/displayImages/Compound Path_1.png';


export default (props) => {
    if (props.product === undefined || props.product === null) {
        return (<div>no product specified</div>)
    } else {
        console.log(props.product);

        const { product_name, brand, price, img_src, categories, Product_ID, gentle_avg_rating, safety_avg_ating } = props.product;

        return (
            <div className="product-display-container">
                <div className='image-container'>
                    <img className='product-image' src={Image_1} />
                    <img className='gentle-icon' src={CompoundPath_1} />
                    <img className='safety-icon' src={Group_1} />
                    {/* <img className='gentle-rating' src={Text_1} /> */}
                    {/* <img className='safety-rating' src={SafetyRating} /> */}
                    <h3 className='product-name'>
                        <span className="hidden">
                            Brand:
                    </span>
                        <span className="brand-text">
                            {brand}
                        </span>
                    </h3>
                    <h1 className='product-name'>
                        <span className="hidden">
                            Product Name:
                    </span>
                        <span className="product-name-text">
                            {product_name}
                        </span>
                    </h1>
                    <h3 className='product-name'>
                        <span className="hidden">
                            Price:
                    </span>
                        <span className="price-text">
                            MSRP: ${price}
                        </span>
                    </h3>
                    {/* <h3 className='product-name'>Detail: {Detail}</h3> */}
                    <h3 className='product-name hidden'>
                        {/* <span className="hidden">
                            Categories:
                    </span> */}
                        {categories}
                    </h3>
                </div>
            </div >
        )
    };
};