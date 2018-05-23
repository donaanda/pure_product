import React, {Component} from 'react';
import Header from './header';
import Lipstick from '../assets/images/landing_page_icons/lipstick.png';
import { Link } from 'react-router-dom';
import '../assets/css/checkProduct.css';

class CheckProducts extends Component{
    constructor(props){
        super(props);
        this.state = {
            input:''
        }
    }
    handleInput(event){
        event.preventDefault();
        this.setState({
            input: event.target.value
        }, ()=>console.log('input:', this.state)
        );
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
                            <input onChange={this.handleInput.bind(this)} className="check-product-input-field" type="text" placeholder="copy and paste ingredients here..."/>
                        </div>
                    </form>
                    <div className="check-product-button-container">
                        <Link to="TBD">
                            <button className="check-product-button">Analyze</button>
                        </Link>
                    </div>
                </div>
            </section>
        )
    }
}
export default CheckProducts