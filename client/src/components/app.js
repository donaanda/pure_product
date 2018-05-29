import React from 'react';
import '../assets/css/app.css';
import LandingPage from './landing_page';
import SignIn from './sign_in';
import ProductWizard from './productWizard';
import { Route } from 'react-router-dom';
import MyAccountPage from './myAccount';
import SingleIngredientSearch from './singleIngredientSearch';
import ProductAnalyzer from './productAnalyzer';
import ProductAnalyzerResult from './productAnalyzerResult';
import ProductPage from './productPage';
import SafetyRating from './safetyRating';
import GentleRating from './gentleRating';
import GentleProducts from './gentle_products';
import CreateAccount from './create_account';
import OurTeam from './ourTeam';
import FAQ from './FAQ';
import AboutTheSite from './aboutTheSite';
import ExpandedMenu from './expandedMenuWelcome';
import SearchProductResult from './searchProductResult';
import IngredientDetailsPage from './ingredientDetailsPage';

const App = () => {
    return (
        <section>
            <Route exact path="/" component={LandingPage} />
            <Route path="/sign_in" component={SignIn} />
            <Route path="/product_wizard" component={ProductWizard} />
            <Route path="/myAccount" component={MyAccountPage} />
            <Route path="/single_ingredient_search" component={SingleIngredientSearch} />
            <Route path="/product_analyzer" component={ProductAnalyzer} />
            <Route path="/product_analyzer_result/:search?" component={ProductAnalyzerResult} />
            <Route path="/product/:id?" component={ProductPage} />
            <Route path="/safety_rating" component={SafetyRating} />
            <Route path="/gentle_rating" component={GentleRating} />
            <Route path="/gentle_products" component={GentleProducts} />
            <Route path="/create_account" component={CreateAccount} />
            <Route path="/our_team" component={OurTeam} />
            <Route path="/faq" component={FAQ} />
            <Route path="/about_the_site" component={AboutTheSite} />
            <Route path="/expanded_menu" component={ExpandedMenu} />
            <Route path="/search_product_result/:search?" component={SearchProductResult} />
            <Route path="/ingredient_details_page/:search?" component={IngredientDetailsPage} />
        </section>
    )
};

export default App;
