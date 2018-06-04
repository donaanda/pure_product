
import React, { Component } from 'react';
import MenuTabs from './tabs';
import DisplayImage from './displayProduct/displayImage';
import '../assets/css/productPage.css';
import GentleIcon from '../assets/images/landing_page_icons/icons/gentle.png';
import SafetyIcon from '../assets/images/landing_page_icons/icons/cross.png';
import Header from './header/header';
import Footer from './footer/footer';
import axios from 'axios';
import ingredient from './displayIngredient/ingredient';
import { Link } from 'react-router-dom';
import Loader from './loader';

const styleClasses = {
    displayCont: 'product-display-container-product-page',
    imgProductPage: 'image-container-product-page',
    productImg: 'product-image-product-page',
    heartIcon: 'gentle-icon-product-page',
    crossIcon: 'safety-icon-product-page',
    gentleRating: 'gentle-rating-product-page',
    safetyRating: 'safety-rating-product-page',
    displayNone: 'display-none'
}

class ProductPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: { success: false },
            ingredients: undefined,
            product: {
                Combo: "N/A",
                Coverage: "N/A",
                Cruelty_Free: "N/A",
                Dry: "N/A",
                Normal: "N/A",
                Oily: "N/A",
                product_ID: "N/A",
                Sensitive: "N/A",
                Vegan: "N/A",
                brand: "N/A",
                categories: "N/A",
                gentle_avg_rating: "N/A",
                detail: "N/A",
                img_src: "N/A",
                price: "N/A",
                product_name: "N/A",
                rating: "N/A",
                safety_avg_rating: "N/A",
                size: "N/A"
            },
        }
    }

    async componentDidMount() {
        var id = this.props.match.params.id;
        await axios.post(`/api_find_product_by_id.php`, { id })
            .then(res => {
                this.setState({
                    data: res.data

                })
            })
    }

    render() {
        const { ingredients, product } = this.state.data;
        if (this.state.data.success === false) {
            return <Loader className="loader prod-pg-loader" />;
        } else {
            const displayImageComponent = product !== undefined ? <DisplayImage product={product} className={styleClasses} /> : <div>no product specified}</div>;
            return (
                <section>
                    <Header history={this.props.history} />
                    {displayImageComponent}
                    <div className="product-page-gentle-safety-rating">
                        <Link to="/gentle_rating">
                            <div className="product-page-gentle-rating">
                                <div className="product-page-gentle-icon-div">
                                    <img className="product-page-gentle-icon" src={GentleIcon} />
                                </div>
                                <div className="product-page-gentle-text-div">
                                    <div className="product-page-gentle-text">GENTLE RATING</div>
                                    <div className="product-page-gentle-result">{product.gentle_avg_rating}</div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/safety_rating">
                            <div className="product-page-safety-rating">
                                <div className="product-page-safety-icon-div">
                                    <img className="product-page-safety-icon" src={SafetyIcon} />
                                </div>
                                <div className="product-page-safety-text-div">
                                    <div className="product-page-safety-text">SAFETY RATING</div>
                                    <div className="product-page-safety-result">{product.safety_avg_rating}</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <MenuTabs ingredients={ingredients} product={product} />
                    </div>
                    <Footer />
                </section>
            )
        };
    };
};
export default ProductPage;