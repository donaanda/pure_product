import React from 'react';
import Header from './header';
import Footer from './footer';
import '../assets/css/aboutPP.css';
import { Link } from 'react-router-dom';

const OurTeam = () => {
    return (
        <section>
            <Header />
            <div className="our_team">
            <h1>Our Team</h1>
            <p>Hanh Pham</p>
                <p>Harrison Chen</p>
                <p>Omer Futerman</p>
                <p>Dona Anda</p>
                <p>Alia Wilkinson</p> 
                
               <p> came together to create this application.  
            </p>
            </div>
            <Footer />
            </section>
    )
}

export default OurTeam;