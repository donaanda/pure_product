import React, {Component} from 'react';
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
        await axios.post(`http://localhost:8888/search_product.php`).then(response => {
            this.setState({
                data: response.data
            })
        });
    }


    render() {
        const {data} = this.state;
        //console.log(this.state.response.data.data[0]);
        return (
            <section className="product-container">
                <Header history={this.props.history} />
                    <DisplayAllProducts data={data}/>
                <Footer/>
            </section>
        )
    }
}

export default SearchProductResult;

