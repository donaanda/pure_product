import React from 'react';
import '../assets/css/displayImage.css';
import Image_1 from '../assets/images/displayImages/Image_1.png';
import Group_1 from '../assets/images/displayImages/Group_1.png';
import CompoundPath_1 from '../assets/images/displayImages/Compound Path_1.png';
import Text_1 from '../assets/images/displayImages/Text_1.png';
import SafetyRating from '../assets/images/displayImages/Text_2.png';


export default (props) => {

    /*const {src} = props.about;*/

    return (
        <section>
            <div className='image-container'>
                <img className='product-image' src={Image_1} />
                <img className='gentle-icon' src={CompoundPath_1} />
                <img className='safety-icon' src={Group_1} />
                <img className='gentle-rating' src={Text_1} />
                <img className='safety-rating' src={SafetyRating} />
                <h3 className='product-name'>FENTY BEAUTY BY RIHANNA</h3>
                <p className='product-name'>Pro Filt'r Soft Matte Longwear Foundation</p>
            </div>
        </section>
    )
}