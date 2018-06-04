import React, { Component } from 'react';
import axios from 'axios';
import Header from "./header/header";
import Footer from "./footer/footer";
import DisplayAllProducts from "./displayProduct/displayAllProducts";

class SearchProductResult extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                data: null
            }
        }
    }
    async componentDidMount() {
        let query = decodeURIComponent(this.props.match.params.search);
        await axios.post(`/api_search_product.php`, { query }).then(response => {
            this.setState({
                data: response.data
            }, () => console.log(this.state));
        });
    }

    async componentWillReceiveProps(nextProps) {
        if (this.props.match.params.search !== nextProps.match.params.search) {
            let query = decodeURIComponent(nextProps.match.params.search);
            await axios.post(`/api_search_product.php`, { query }).then(response => {
                this.setState({
                    data: response.data
                }, () => console.log(this.state));
            });
        }
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

export default SearchProductResult;

