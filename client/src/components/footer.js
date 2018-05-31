import React, { Component } from 'react';
import '../assets/css/footer.css';
import new_user from '../assets/images/footer_icons/new_user.png';
import our_team from '../assets/images/footer_icons/our_team.png';
import q_a from '../assets/images/footer_icons/q_a.png';
import temp_logo from '../assets/images/footer_icons/temp_logo.png';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <section className="site-footer">
                <footer className="site-footer">
                    {/* <Link to="/create_account" onClick={window.scrollTo(0, 0)}>
                        <div className="footer-content">
                            <img src={new_user} /><span>Create Account</span>
                        </div>
                    </Link> */}
                    <Link to="./our_team" onClick={window.scrollTo(0, 0)}>
                        <div className="footer-content">
                            <img src={our_team} /><span>Our Team</span>
                        </div>
                    </Link>
                    <Link to="./FAQ" onClick={window.scrollTo(0, 0)}>
                        <div className="footer-content">
                            <img src={q_a} /><span>FAQ</span>
                        </div>
                    </Link>
                    <Link to="/about_the_site" onClick={window.scrollTo(0, 0)}>
                        <div className="footer-content">
                            <img src={temp_logo} /><span>About The Site</span>
                        </div>
                    </Link>
                    <div className="footer-content copyright_span">
                        <span className="copyright_span">Copyright © 2018  Pure Product . All rights reserved.</span>
                    </div>
                </footer>
            </section>
        )
    }
}

export default Footer;
