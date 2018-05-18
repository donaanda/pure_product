
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
                Dry: "N/A",
                Normal: "N/A",
                Oily: "N/A",
                Sensitive: "N/A",
                brand: "N/A",
                categories: "N/A",
                detail: "N/A",
                img_src: "N/A",
                price: "N/A",
                product_id: "N/A",
                product_name: "N/A",
                rating: "N/A",
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
        const { ingredients, product } = this.state.data;
        console.log(this.state.data);
        if (this.state.data.success === false) {
            return null;
        } else {

            return (
                <section>
                    <Header />
                    <DisplayImage brand={product.brand} product_name={product.product_name}
                        safety_rating={product.rating} gentle_rating={product.rating} />
                    <div className="product-page-gentle-safety-rating">
                        <div className="product-page-gentle-rating">GENTLE RATING
                    <span><img src={GentleIcon} />{product.rating}</span>
                        </div>
                        <div className="product-page-safety-rating">SAFETY RATING
                    <span><img src={SafetyIcon} />{product.rating}</span>
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