
import React, { Component } from 'react';
import Tabs1 from './tabs';
import DisplayImage from './displayImage';
import '../assets/css/productPage.css';
import GentleIcon from '../assets/images/displayImages/Compound Path_1.png';
import SafetyIcon from '../assets/images/displayImages/Group_1.png';
import Header from './header';
import Footer from './footer';
import axios from 'axios';
import ingredient from './ingredient';
// props.match.params.id


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
                safety_avg_ating: "N/A",
                size: "N/A"
            },
        }
    }

    async componentDidMount() {
        var id = this.props.match.params.id;
        await axios.post(`http://localhost:8888/find_product_by_id.php`, id)
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
    }

    render() {
        console.log(props);
        const { ingredients, product } = this.state.data;

        if (this.state.data.success === false) {
            return null;
        } else {
            debugger;
            const displayImageComponent = product !== undefined ? <DisplayImage product={product} /> : <div>no product specified}</div>;
            return (
                <section>
                    <Header />

                    {displayImageComponent}

                    <div className="product-page-gentle-safety-rating">
                        <div className="product-page-gentle-rating">GENTLE RATING
                    <span><img src={GentleIcon} />{product.gentle_avg_rating}</span>
                        </div>
                        <div className="product-page-safety-rating">SAFETY RATING
                    <span><img src={SafetyIcon} />{product.safety_avg_ating}</span>
                        </div>
                    </div>

                    <div>

                        <Tabs1 ingredients={ingredients} />

                    </div>
                    <Footer />
                </section>
            )
        };
    };
};
export default ProductPage;