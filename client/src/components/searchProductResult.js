import React, {Component} from 'react';
import axios from 'axios';

class SearchProductResult extends Component {

    constructor(props) {
        super(props);

        this.state = {
            response : {
                data: {
                    data: [{
                        Product_ID: null,
                        product_name: null,
                        brand: null,
                        categories: null,
                        gentle_avg_rating: null,
                        safety_avg_ating: null
                    }]
                }
            }
        }
    }

    async componentDidMount() {
        await axios.post(`http://localhost:8888/search_product.php`).then(response => {
            this.setState({
                response: response
            })
        });
    }


    render() {
        const {Product_ID, product_name, brand, categories, gentle_avg_rating, safety_avg_ating} = this.state.response.data.data[0];
        console.log(this.state.response.data.data[0]);
        return (
            <section>
                <div>{Product_ID}</div>
                <div>{product_name}</div>
                <div>{brand}</div>
                <div>{categories}</div>
                <div>{gentle_avg_rating}</div>
                <div>{safety_avg_ating}</div>
            </section>
        )
    }
}

export default SearchProductResult;

