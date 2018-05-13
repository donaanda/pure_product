import React from 'react';
import '../assets/css/footer_landing_sign_in.css';
import LandingPage from './landing_page';
import SignIn from './sign_in';
import ProductFinder from './product_finder';
import { Route } from 'react-router-dom';
import MyAccountPage from './myAccount';
import ExpandedMenuWelcome from './expandedMenuWelcome';
import LookUpIngredient from './lookUpIngredient';
import CheckProducts from './checkProducts';
import ProductPage from './productPage';

const App = () => {
    return (
        <section>
            <Route exact path="/" component={LandingPage} />
            <Route path="/sign_in" component={SignIn} />
            <Route path="/product_finder" component={ProductFinder} />
            <Route path="/myAccount" component={MyAccountPage} />
            <Route path="/search_ingredient" component={LookUpIngredient}/>
            <Route path="/check_products" component={CheckProducts}/>
            <Route path="/product" component={ProductPage}/>
        </section>
    )
};

export default App;

//componentwill mount, scroll  up to the top of the page