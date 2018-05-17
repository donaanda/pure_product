import React, { Component } from 'react';
import Tabs1 from './tabs';
import DisplayImage from './displayImage';
import '../assets/css/productPage.css';
import GentleIcon from '../assets/images/displayImages/Compound Path_1.png';
import SafetyIcon from '../assets/images/displayImages/Group_1.png';
import GentleRating from '../assets/images/displayImages/Text_1.png';
import SafetyRating from '../assets/images/displayImages/Text_2.png';
import Header from './header';
import Footer from './footer';
import axios from 'axios';
// props.match.params.id


class ProductPage extends Component {
    constructor(props) {
        super(props);
        console.log('props', props, 'id: ', props.match.params.id);

        this.state = {}

    }

    componentDidMount() {
        var id = this.props.match.params.id;
        axios.post(`http://localhost:8888/find_product_by_id.php`, id)
            .then(res => {
                console.log(res);
                this.setState({
                    data: res
                })
            })
    }

    render() {
        return (
            <section>
                <Header />
                <DisplayImage />
                <div className="product-page-gentle-safety-rating">
                    <div className="product-page-gentle-rating">GENTLE RATING
                    <span><img src={GentleIcon} /><img src={GentleRating} /></span>
                    </div>
                    <div className="product-page-safety-rating">SAFETY RATING
                    <span><img src={SafetyIcon} /><img src={SafetyRating} /></span>
                    </div>
                </div>

                <div>

                    <Tabs1 />

                </div>
                <Footer />
            </section>
        )
    }
}

export default ProductPage;