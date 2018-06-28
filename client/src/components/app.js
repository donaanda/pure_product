import React from 'react';
import '../assets/css/app.css';
import LandingPage from './landing_page';
import SignIn from './user/sign_in';
import ProductWizard from './productWizard/productWizard';
import { Route } from 'react-router-dom';
import MyAccountPage from './user/myAccount';
import IngredientDetailSearch from './ingredientDetail/ingredientDetailSearch';
import ProductAnalyzer from './productAnalyzer/productAnalyzer';
import ProductAnalyzerResult from './productAnalyzer/productAnalyzerResult';
import ProductPage from './productPage';
import SafetyRating from './ratingInfo/safetyRating';
import GentleRating from './ratingInfo/gentleRating';
import GentleProducts from './gentle_products';
import CreateAccount from './user/create_account';
import OurTeam from './footer/ourTeam';
import FAQ from './footer/FAQ';
import AboutTheSite from './footer/aboutTheSite';
import ExpandedMenu from './header/expandedMenuWelcome';
import SearchProductResult from './searchProductResult';
import IngredientDetailPage from './ingredientDetail/ingredientDetailPage';
import Recommendations from './productWizard/recommendations';

const App = () => {
    return (
        <div className="app-wrap">
            <Route exact path="/" component={LandingPage} />
            <Route path="/sign_in" component={SignIn} />
            <Route path="/product_wizard" component={ProductWizard} />
            <Route path="/myAccount" component={MyAccountPage} />
            <Route path="/ingredient_detail_search" component={IngredientDetailSearch} />
            <Route path="/product_analyzer" component={ProductAnalyzer} />
            <Route path="/product_analyzer_result/:search?" component={ProductAnalyzerResult} />
            <Route path="/product/:id?" component={ProductPage} />
            <Route path="/safety_rating" component={SafetyRating} />
            <Route path="/gentle_rating" component={GentleRating} />
            <Route path="/gentle_products" component={GentleProducts} />
            <Route path="/create_account" component={CreateAccount} />
            <Route path="/our_team" component={OurTeam} />
            <Route path="/product/our_team" component={OurTeam} />
            <Route path="/faq" component={FAQ} />
            <Route path="/about_the_site" component={AboutTheSite} />
            <Route path="/expanded_menu" component={ExpandedMenu} />
            <Route path="/search_product_result/:search?" component={SearchProductResult} />
            <Route path="/ingredient_detail_page/:search?" component={IngredientDetailPage} />
            <Route path="/product_recommendations" component={Recommendations} />
        </div>
    )
};

export default App;
