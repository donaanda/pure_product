import React, { Component } from 'react';
import '../assets/css/displayImage.css';
import Image_1 from '../assets/images/displayImages/Image_1.png';
import Group_1 from '../assets/images/displayImages/Group_1.png';
import CompoundPath_1 from '../assets/images/displayImages/Compound Path_1.png';
import foundation_alt_img from '../assets/images/landing_page_icons/foundation_alt_image.jpg';
import { Link } from 'react-router-dom';


export default class DisplayImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product:
                {
                    Cruelty_Free: "N/A",
                    Vegan: "N/A",
                    brand: "N/A",
                    categories: "N/A",
                    gentle_avg_rating: "N/A",
                    img_src: foundation_alt_img,
                    price: "N/A",
                    product_id: "N/A",
                    product_name: "N/A",
                    rating: "N/A",
                    safety_avg_rating: "N/A"
                },
        }
    }

    render() {
        if (!this.props || this.state.product === false) {
            return (<div>no product specified</div>)
        } else {
            const { product_name, brand, price, img_src, categories, product_id, gentle_avg_rating, safety_avg_rating, rating } = this.props.product;
            return (
                <Link to={"product/" + product_id}>
                    <div className="product-display-container">
                        <div className='image-container'>
                            <img className='product-image' src={img_src} />
                            <img className='gentle-icon' src={CompoundPath_1} />
                            <img className='safety-icon' src={Group_1} />
                            <span className='gentle-rating'>{gentle_avg_rating}</span>
                            <span className='safety-rating'>{safety_avg_rating}</span>
                            <span>average user rating: {rating}</span>
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
                            <h3 className='product-name hidden'>
                                {categories}
                            </h3>
                        </div>
                    </div >
                </Link>
            )
        };
    };
};