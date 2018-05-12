import React from 'react';
import '../assets/css/footer_landing_sign_in.css';
import LandingPage from './landing_page';
import SignIn from './sign_in';
import ProductFinder from './product_finder';
import { Route } from 'react-router-dom';

const App = () => {
    return (
        <section>
            <Route exact path="/" component={LandingPage} />
            <Route path="/sign_in" component={SignIn} />
            <Route path="/product_finder" component={ProductFinder} />
        </section>
    )
};

export default App;
