import React, { Component } from 'react';
import github from '..//assets/images/footer_icons/git_hub.png';
import new_user from '../assets/images/footer_icons/new_user.png';
import our_team from '../assets/images/footer_icons/our_team.png';
import q_a from '../assets/images/footer_icons/q_a.png';
import temp_logo from '../assets/images/footer_icons/temp_logo.png';
import '../assets/css/footer_landing.css';

class Footer extends Component {
    render() {
        return (
            <section className="site-footer">
                <footer className="site-footer">
                    <div className="footer-content">
                        <img src={github} /><span>Github</span>
                    </div>
                    <div className="footer-content">
                        <img src={new_user} /><span>Create Account</span>
                    </div>
                    <div className="footer-content">
                        <img src={our_team} /><span>Our Team</span>
                    </div>
                    <div className="footer-content">
                        <img src={q_a} /><span>FAQ</span>
                    </div>
                    <div className="footer-content">
                        <img src={temp_logo} /><span>About The Site</span>
                    </div>
                    <div className="footer-content copyright_span">
                        <span className="copyright_span">Copyright © 2018  Pure Product . All rights reserved.</span>
                    </div>
                </footer>
            </section>
        )
    }
}

export default Footer;
