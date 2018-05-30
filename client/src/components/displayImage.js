import React, { Component } from 'react';
import '../assets/css/displayImage.css';
import Image_1 from '../assets/images/displayImages/Image_1.png';
import Group_1 from '../assets/images/displayImages/Group_1.png';
import gentle_img from '../assets/images/landing_page_icons/gentle_feather.png';
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
            const { displayCont, imgProductPage, heartIcon, crossIcon, gentleRating, safetyRating } = this.props.className;
            const image = "/product_images/" + categories + "/" + product_id + "/" + img_src;
            return (
                <Link to={"/product/" + product_id}>
                    <div className={displayCont}>
                        <div className={imgProductPage} style={{ backgroundImage: `url(${image})` }}>
                            <div className="display-cont">
                                <div className="icon-cont">
                                    <img className={heartIcon} src={gentle_img} />
                                    <span className={gentleRating}>{gentle_avg_rating}</span>
                                </div>
                                <div className="icon-cont">
                                    <img className={crossIcon} src={Group_1} />
                                    <span className={safetyRating}>{safety_avg_rating}</span>
                                </div>
                            </div>
                            <h4 className='product-name'>
                                average user rating: {rating}
                            </h4>
                            <h4 className='product-name'>
                                <span className="brand-text">
                                    {brand}
                                </span>
                            </h4>
                            <h3 className='product-name'>
                                <span className="product-name-text">
                                    {product_name}
                                </span>
                            </h3>
                            <h4 className='product-name'>
                                <span className="price-text">
                                    MSRP: ${price}
                                </span>
                            </h4>
                            <h4 className='product-name hidden'>
                                {categories}
                            </h4>
                        </div>
                    </div >
                </Link>
            )
        };
    };
};

