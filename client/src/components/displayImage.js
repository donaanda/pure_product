import React from 'react';
import '../assets/css/displayImage.css';
import Image_1 from '../assets/images/displayImages/Image_1.png';
import Group_1 from '../assets/images/displayImages/Group_1.png';
import CompoundPath_1 from '../assets/images/displayImages/Compound Path_1.png';
import Text_1 from '../assets/images/displayImages/Text_1.png';
import SafetyRating from '../assets/images/displayImages/Text_2.png';


export default (props) => {
    if (props.product === undefined) {
        return (<div>no product specified</div>)
    }
    console.log(props.product);

    const { product_name, brand, price, img_src, categories, Product_ID, gentle_avg_rating, safety_avg_ating} = props.product;

    return (
        <section>
            <div className='image-container'>
                <img className='product-image' src={Image_1} />
                <img className='gentle-icon' src={CompoundPath_1} />
                <img className='safety-icon' src={Group_1} />
                <img className='gentle-rating' src={Text_1} />
                <img className='safety-rating' src={SafetyRating} />
                <h1 className='product-name'>Product Name: {product_name}</h1>
                <h3 className='product-name'>Brand: {brand}</h3>
                <h3 className='product-name'>Price: {price}</h3>
                {/* <h3 className='product-name'>Detail: {Detail}</h3> */}
                <h3 className='product-name'>Categories: {categories}</h3>
            </div>
        </section >
    )
}