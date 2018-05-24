import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/header.css';
import MyAccountPicture from '../assets/images/menu_icons/sign_in.png';
import CreateAccountPicture from '../assets/images/menu_icons/sign_up.png';
import CheckProductSafety from '../assets/images/menu_icons/check.png';
import LookIngredients from '../assets/images/menu_icons/lipstick.png';
import MethodologyPicutre from '../assets/images/menu_icons/home.png';
import DiscoverProducts from '../assets/images/menu_icons/search.png';
import '../assets/css/expandedMenuStyle.css';




function ExpandedMenuWelcome(props) {

    return (
        <section className={props.className}>
            <div className="menu-container">
                <Link to="/myAccount" >
                    <div className="menu-item-cont">

                        <img className="ExpandMenuImage" src={MyAccountPicture} />
                        <span>My Account</span>
                    </div>
                </Link>

                <Link to="/create_account" >
                    <div className="menu-item-cont">

                        <img className="ExpandMenuImage" src={CreateAccountPicture} />
                        <span>Create Account</span>
                    </div>
                </Link>

                <Link to="/check_products" >
                    <div className="menu-item-cont">

                        <img className="ExpandMenuImage" src={CheckProductSafety} />
                        <span>Check Product Safety</span>
                    </div>
                </Link>

                <Link to="/search_ingredient">
                    <div className="menu-item-cont">

                        <img className="ExpandMenuImage" src={LookIngredients} />
                        <span>Search Ingredients</span>
                    </div>
                </Link>

                <Link to="/search_ingredient">
                    <div className="menu-item-cont">

                        <img className="LipstickImg" src={DiscoverProducts} />
                        <span>Discover Products</span>
                    </div>
                </Link>
            </div>
        </section>
    )
};

export default ExpandedMenuWelcome;