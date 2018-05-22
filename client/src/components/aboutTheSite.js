import React from 'react';
import Header from './header';
import Footer from './footer';
import '../assets/css/aboutPP.css';
import github from '..//assets/images/footer_icons/git_hub.png';
import temp_logo from '../assets/images/footer_icons/temp_logo.png';
import { Link } from 'react-router-dom';

const AboutTheSite = () => {
    return (
        <section>
            <Header />
            <div className="about-the-site-container">
                <a href="https://github.com/aliawilkinson/c318_pureproduct">
                    <div className="button button-git github-info-about-site">
                        <img className="git-logo" src={github} />
                        <p>
                            Github
                            </p>
                    </div>
                </a>
                <div className="site-about-container">
                    <h1>About The Site</h1>
                    <p>Pure Product is designed to help people find personal care products as quickly as possible while making it easier to analyze safety, efficiency, and gentleness of products in one spot. It was born out of a student project at a web development bootcamp by passionate developers who care for consumer safety.
            </p>
                    <p>We hope that you are able to find what you need by using our site by finding the intersection between safety and efficiency in products being produced every day.
            </p>
                    <p>
                        Cheers,</p>
                    <p>The Pure Product team.
            </p>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default AboutTheSite;