import React, { Component } from 'react';
import axios from 'axios';
import Header from "./header";
import Footer from "./footer";
import DisplayAllProducts from "./displayAllProducts";

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
        var query = this.props.match.params.search;
        await axios.post(`http://localhost:8888/search_product.php`, { query }).then(response => {
            this.setState({
                data: response.data
            }, () => console.log(this.state));
        });
    }

    async componentWillReceiveProps(nextProps) {
        if (this.props.match.params.search !== nextProps.match.params.search) {
            let query = nextProps.match.params.search;
            await axios.post(`http://localhost:8888/search_product.php`, { query }).then(response => {
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

