import React from 'react';
import Header from './header';
import Footer from './footer';
import '../assets/css/aboutPP.css';
import { Link } from 'react-router-dom';

const OurTeam = () => {
    return (
        <section>
        <Header />
        <div className="site-about-container">
            <h1>About The Site</h1>
            <p>Pure Product was born out of one woman’s frustration in being unable to find products that were effective and suitable for her ultra-sensitive skin.
            </p>
            <p>The aim of Pure Product is to help people find products that suit their skin and sensitivities, as well as to create awareness as to what ingredients go into products, and how safe they are overall.
            </p>
            <p>We hope that you are able to find what you need by using our site by finding the intersection between safety and efficiency in products being produced every day.
            </p>
            <p>
            Cheers,
            The Pure Product team.
            </p>
        </div>
        <Footer />
        </section>
    )
}

export default OurTeam;