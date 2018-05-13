import React from 'react';
import Header from './header';
import Lipstick from '../assets/images/landing_page_icons/lipstick.png';
import '../assets/css/checkProduct.css';

export default () => {
    return (
        <section>
            <Header/>
            <div className="check-product-image-container">
                <div className="logo-background-color">
                    <img className="check-product-logo" src={Lipstick}/>
                </div>
                <div className="check-product-description">
                    See if a product is made with ingredients that are dermatologically approved and safe to use.
                </div>
                <form className="check-product-form-field">
                    <div className="check-product-input-container">
                        <input className="check-product-input-field" type="text" placeholder="copy and paste ingredients here..."/>
                    </div>
                </form>
                <div className="check-product-button-container">
                    <button className="check-product-button">Analyze</button>
                </div>
            </div>
        </section>
    )
}