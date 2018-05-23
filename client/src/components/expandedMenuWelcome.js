import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/expandedMenuStyle.css';
import MyAccountPicture from '../assets/images/account_page_icons/user_acount.png';
import CreateAccountPicture from '../assets/images/account_page_icons/create_account.png';
import CheckProductSafety from '../assets/images/account_page_icons/check_product_safety.png';
import LookIngredients from '../assets/images/account_page_icons/look_up_ingredients.png';
import MethodologyPicutre from '../assets/images/account_page_icons/discover_products.png';
import DiscoverProducts from '../assets/images/account_page_icons/discover_products.png';




function ExpandedMenuWelcome(props) {
    
    return(
        <section>
            <div style={props.style}>
            <Link to="/myAccount" >
                <div className="MyAccount">
                    <div className="divPicture">
                        <img className="ExpandMenuImage" src={MyAccountPicture}/>
                    </div>
                    <span className="AccountFont"> My Account
                    </span>
                </div>
            </Link>
                <div className="CreateAccount">
                    <div className="divPicture">
                        <img className="ExpandMenuImage" src={CreateAccountPicture}/>
                    </div>
                    <span className="AccountFont">Create Account</span>
                </div>
                <div className="FeatureSetLink">
                    <div className="Check_Product_Safety">
                        <div className="divPicture">
                            <img className="ExpandMenuImage" src={CheckProductSafety}/>
                        </div>
                        <div className=" FeatureSetFont LongTextFeatureSet">Check Product Safety</div>
                    </div>
                    <Link to="/search_ingredient">
                        <div className="Look_Up_Ingrediants">
                            <div className="divPicture">
                                <img className="ExpandMenuImage" src={LookIngredients}/>
                            </div>
                            <span className=" FeatureSetFont">Search Ingrediants</span>
                        </div>
                    </Link>
                    <div className="DiscoverProducts">
                        <div className="LipstickCenter"> 
                            <img className="LipstickImg" src={DiscoverProducts}/>
                        </div>
                        <span className=" FeatureSetFont LipstickFont">Discover Products</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ExpandedMenuWelcome;

//  style="background-color:lavender;"