
import React, { Component } from 'react';
import MenuTabs from './tabs';
import DisplayImage from './displayImage';
import '../assets/css/productPage.css';
import GentleIcon from '../assets/images/displayImages/Compound Path_1.png';
import SafetyIcon from '../assets/images/displayImages/Group_1.png';
import Header from './header';
import Footer from './footer';
import axios from 'axios';
import ingredient from './ingredient';
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
        await axios.post(`http://localhost:8888/find_product_by_id.php`, { id })
            .then(res => {
                this.setState({
                    data: res.data

                })
            })
    }

    render() {
        const { ingredients, product } = this.state.data;
        if (this.state.data.success === false) {
            return <Loader />;
        } else {
            const displayImageComponent = product !== undefined ? <DisplayImage product={product} className={styleClasses} /> : <div>no product specified}</div>;
            return (
                <section>
                    <Header history={this.props.history} />

                    {displayImageComponent}
                    <div className="product-page-gentle-safety-rating">
                        <Link to="/gentle_rating">
                            <div className="product-page-gentle-rating">GENTLE RATING
                    <span><img src={GentleIcon} />
                                    {product.gentle_avg_rating}
                                </span>
                            </div>
                        </Link>
                        <Link to="/safety_rating">
                            <div className="product-page-safety-rating">SAFETY RATING
                    <span><img src={SafetyIcon} />
                                    {product.safety_avg_rating}
                                </span>
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