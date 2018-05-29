import React, {Component} from 'react';
import Header from './header';
import Lipstick from '../assets/images/landing_page_icons/lipstick.png';
import { Link } from 'react-router-dom';
import '../assets/css/productAnalyzer.css';

class ProductAnalyzer extends Component{
    constructor(props){
        super(props);
        this.state = {
            input:''
        }
    }

    handleSubmit(event){
        event.preventDefault();
        let searchQuery = this.state.input.replace(/\//g, '%2F');
        this.props.history.push('/product_analyzer_result/' + searchQuery)
    }

    handleInput(event){
        event.preventDefault();
        this.setState({
            input: event.target.value
        });
    }
    render(){
        return (
            <section>
                <Header history={this.props.history} />
                <div className="check-product-image-container">
                    <div className="logo-background-color">
                        <img className="check-product-logo" src={Lipstick}/>
                    </div>
                    <div className="check-product-description">
                        See if a product is made with ingredients that are dermatologically approved and safe to use.
                    </div>
                    <form className="check-product-form-field">
                        <div className="check-product-input-container">
                            <textarea autoFocus onChange={this.handleInput.bind(this)} className="check-product-input-field" type="text" placeholder="copy and paste ingredients here..."></textarea>
                        </div>
                        <div className="check-product-button-container">
                            <button className="check-product-button" onClick={this.handleSubmit.bind(this)}>Analyze</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}
export default ProductAnalyzer