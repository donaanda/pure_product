import React, { Component } from 'react';
import DisplayImage from './displayProduct/displayImage';
import Header from './header/header';
import Footer from './footer/footer';
import { Link } from 'react-router-dom';
import DisplayAllProducts from './displayProduct/displayAllProducts';
import axios from 'axios';

class GentleProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                data: null
            }
        }
    }


    async componentDidMount() {
        var id = this.props.match.params.id;
        await axios.post(`/api_get_product_by_categories.php`)
            .then(res => {
                this.setState({
                    data: res.data
                }, () => console.log(this.state))
            })
    }
    render() {
        const { data } = this.state;
        return (
            <section className="product-container">
                <Header history={this.props.history} />
                <DisplayAllProducts data={data} />
                <Footer />
            </section>
        )
    }
}

export default GentleProducts;