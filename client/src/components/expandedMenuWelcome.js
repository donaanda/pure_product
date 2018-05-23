import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/expandedMenuStyle.css';
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
                    <div className="MyAccount">
                        <div className="divPicture">
                            <img className="ExpandMenuImage" src={MyAccountPicture} />
                        </div>
                        <span className="AccountFont"> My Account
                    </span>
                    </div>
                </Link>
                <div className="CreateAccount">
                    <div className="divPicture">
                        <img className="ExpandMenuImage" src={CreateAccountPicture} />
                    </div>
                    <span className="AccountFont">Create Account</span>
                </div>
                <div className="FeatureSetLink">
                    <div className="Check_Product_Safety">
                        <div className="divPicture">
                            <img className="ExpandMenuImage" src={CheckProductSafety} />
                        </div>
                        <div className=" FeatureSetFont LongTextFeatureSet">Check Product Safety</div>
                    </div>
                    <Link to="/search_ingredient">
                        <div className="Look_Up_Ingrediants">
                            <div className="divPicture">
                                <img className="ExpandMenuImage" src={LookIngredients} />
                            </div>
                            <span className=" FeatureSetFont">Search Ingrediants</span>
                        </div>
                    </Link>
                    <div className="DiscoverProducts">
                        <div className="LipstickCenter">
                            <img className="LipstickImg" src={DiscoverProducts} />
                        </div>
                        <span className=" FeatureSetFont LipstickFont">Discover Products</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ExpandedMenuWelcome;