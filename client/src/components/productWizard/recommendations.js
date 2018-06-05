import React, { Component } from 'react';
import axios from 'axios';
import Header from "../header/header";
import Footer from "../footer/footer";
import DisplayAllProducts from "../displayProduct/displayAllProducts";

class Recommendations extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                data: null
            }
        }
    }
    async componentDidMount() {
        const query = this.props.history.location.state.data;
        console.log(query);
        await axios.post(`/server/api_find_product_by_multiple_id.php`, { query }).then(response => {
            this.setState({
                selection: this.props.history.location.state.selection,
                data: response.data
            }, () => console.log(this.state));
        });
    }

    render() {
        const { data } = this.state;
        return (
            <section className="product-container">
                <Header history={this.props.history} />
                <h4 className="recommendations-title">Your Recommendations...</h4>
                <h6 className="recommendations-title">Enjoy! :)</h6>
                <DisplayAllProducts data={data} />
                <Footer />
            </section>
        )
    }
}

export default Recommendations;