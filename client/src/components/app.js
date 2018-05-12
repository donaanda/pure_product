import React from 'react';
import '../assets/css/footer_landing_sign_in.css';
import LandingPage from './landing_page';
import SignIn from './sign_in';
import ProductFinder from './product_finder';
import { Route } from 'react-router-dom';
import MyAccountPage from './myAccount';
import ExpandedMenuWelcome from './expandedMenuWelcome';

const App = () => {
    return (
        <section>
            <Route exact path="/" component={LandingPage} />
            <Route path="/sign_in" component={SignIn} />
            <Route path="/product_finder" component={ProductFinder} />
            <Route path="/myAccount" component={MyAccountPage} />
        </section>
    )
};

export default App;

//componentwill mount, scroll  up to the top of the page