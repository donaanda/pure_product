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

    const { Product_Name, Brand, Price, Image, Detail, Categories, Product_ID } = props.product;

    return (
        <section>
            <div className='image-container'>
                <img className='product-image' src={Image_1} />
                <img className='gentle-icon' src={CompoundPath_1} />
                <img className='safety-icon' src={Group_1} />
                <img className='gentle-rating' src={Text_1} />
                <img className='safety-rating' src={SafetyRating} />
                <h1 className='product-name'>Product Name: {Product_Name}</h1>
                <h3 className='product-name'>Brand: {Brand}</h3>
                <h3 className='product-name'>Price: {Price}</h3>
                <h3 className='product-name'>Detail: {Detail}</h3>
                <h3 className='product-name'>Categories: {Categories}</h3>
            </div>
        </section >
    )
}