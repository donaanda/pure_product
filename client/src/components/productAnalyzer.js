import React, { Component } from 'react';
import Header from './header';
import Lipstick from '../assets/images/landing_page_icons/icons/cross2.png';
import { Link } from 'react-router-dom';
import '../assets/css/productAnalyzer.css';

class ProductAnalyzer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        let uriEncodedInput = encodeURIComponent(this.state.input);
        this.props.history.push('/product_analyzer_result/' + uriEncodedInput)
    }

    handleInput(event) {
        event.preventDefault();
        this.setState({
            input: event.target.value
        });
    }
    render() {
        return (
            <section>
                <Header history={this.props.history} />
                <div className="check-product-image-container">
                    <div className="logo-background-color">
                        <img className="check-product-logo" src={Lipstick} />
                    </div>
                    <div className="check-product-description">
                        Copy and paste comma seperated ingredient lists here for a safety/gentle breakdown of a product.
                    </div>
                    <form className="check-product-form-field">
                        <div className="check-product-input-container">
                            <textarea autoFocus onChange={this.handleInput.bind(this)} className="check-product-input-field" type="text" placeholder="copy and paste ingredients here..."></textarea>
                        </div>
                        <div className="check-product-button-container">
                            <button className="btn purple" onClick={this.handleSubmit.bind(this)}>Analyze</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}
export default ProductAnalyzer