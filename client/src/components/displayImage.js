import React from 'react';
import '../assets/css/displayImage.css';
import Image_1 from '../assets/images/displayImages/Image_1.png';
import Group_1 from '../assets/images/displayImages/Group_1.png';
import CompoundPath_1 from '../assets/images/displayImages/Compound Path_1.png';
import Text_1 from '../assets/images/displayImages/Text_1.png';
import Text_2 from '../assets/images/displayImages/Text_2.png';


export default (props) => {

    const {src} = props.about;

    return (
        <section className='image-container'>
            <img className='product-image' src={src}/>
            <img className='gentle-icon' src={CompoundPath_1}/>
            <img className='safety-icon' src={Group_1}/>
            <img className='gentle-rating' src={Text_1}/>
            <img className='safety-rating' src={Text_2}/>
            <h3>FENTY BEAUTY BY RIHANNA</h3>
            <p>Pro Filt'r Soft Matte Longwear Foundation</p>
        </section>
    )
}