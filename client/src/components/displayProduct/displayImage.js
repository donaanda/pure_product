import React, { Component } from 'react';
import '../../assets/css/displayImage.css';
import Image_1 from '../../assets/images/displayImages/Image_1.png';
import safety_img from '../../assets/images/landing_page_icons/icons/cross.png';
import gentle_img from '../../assets/images/landing_page_icons/gentle_feather.png';
import foundation_alt_img from '../../assets/images/landing_page_icons/foundation_alt_image.jpg';
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
    colorizeSafetyNum(rating) {
        switch (rating) {
            case "1":
                return "green-text lighten-3 shadow";
            case "2":
                return "light-green-text shadow";
            case "3":
                return "green-text shadow";
            case "4":
                return "yellow-text lighten-3 shadow";
            case "5":
                return "yellow-text shadow";
            case "6":
                return "orange-text shadow";
            case "7":
                return "deep-orange-text shadow";
            case "8":
                return "red-text shadow";
            case "9":
                return "red-text darken-1 shadow";
            case "10":
                return "red-text darken-2 shadow";
            case "1-2":
                return "green-text shadow";
            case "1-3":
                return "green-text shadow";
            default:
                return
        }
    };

    colorizeGentleNum(rating) {
        switch (rating) {
            case "Best":
                return "green-text lighten-3";
            case "Good":
                return "light-green-text";
            case "Average":
                return "orange-text";
            case "Poor":
                return "red-text";
            default:
                return
        }
    }

    truncateAverage(gentleRating) {
        switch (gentleRating) {
            case "Average":
                return "Avg";
            default:
                return gentleRating;
        }
    }

    render() {
        if (!this.props || this.state.product === false) {
            return (<div>no product specified</div>)
        } else {
            const { product_name,
                brand,
                price,
                img_src,
                categories,
                product_id,
                gentle_avg_rating,
                safety_avg_rating,
                rating, } = this.props.product;

            const { displayCont,
                imgProductPage,
                heartIcon, crossIcon,
                gentleRating,
                safetyRating,
                productImg,
                displayNone } = this.props.className;

            const image = "/client/dist/product_images/" + categories + "/" + product_id + "/" + img_src;
            return (
                <Link to={"/product/" + product_id}>
                    <div className={displayCont}>
                        <div className={imgProductPage}>
                            <img className={productImg} src={image} />
                            <div className="display-cont">
                                <div className={`icon-cont-gentle ${displayNone} ${this.colorizeGentleNum(gentle_avg_rating)}`}>
                                    <img className={heartIcon} src={gentle_img} />
                                    <span className={gentleRating}>{this.truncateAverage(gentle_avg_rating)}</span>
                                </div>
                                <div className={`icon-cont-safety ${displayNone} ${this.colorizeSafetyNum(safety_avg_rating)}`}>
                                    <img className={crossIcon} src={safety_img} />
                                    <span className={safetyRating}>{safety_avg_rating}</span>
                                </div>
                            </div>
                            <div className="info-container">
                                <h4 className='product-name'>
                                    sephora user rating: {rating}
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
                        </div>
                    </div >
                </Link>
            )
        };
    };
};

