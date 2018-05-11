import React from 'react';
import '../assets/css/app.css';
import LandingPage from './landing_page';
import SignIn from './sign_in';
import { Route } from 'react-router-dom';

const App = () => {
    return (
        <section>
            <Route exact path="/" component={LandingPage} />
            <Route path="/sign_in" component={SignIn} />
        </section>
    )
};

export default App;
