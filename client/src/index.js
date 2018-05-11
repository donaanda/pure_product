import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter as Router } from 'react-router-dom';
// import LandingPage from './components/landing_page';


ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);
