import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import '../assets/css/aboutPP.css';
import Hanh from '../assets/images/ourTeam/hanh.png';
import hanhDerp from '../assets/images/ourTeam/derp_pics/hanh_derp.png';
import Harrison from '../assets/images/ourTeam/harrison.png';
import harrisonDerp from '../assets/images/ourTeam/derp_pics/harrison_derp.png';
import Omer from '../assets/images/ourTeam/omer.png';
import omerDerp from '../assets/images/ourTeam/derp_pics/omer_derp.png';
import Dona from '../assets/images/ourTeam/dona.png';
import donaDerp from '../assets/images/ourTeam/derp_pics/dona_da_g.png';
import Alia from '../assets/images/ourTeam/alia.png';
import aliaDerp from '../assets/images/ourTeam/derp_pics/alia_derp.png';
import portfolio from '../assets/images/ourTeam/portfolio.png';
import heart from '../assets/images/landing_page_icons/icons/heart.png';
import github from '../assets/images/footer_icons/git_hub.png';

import { Link } from 'react-router-dom';

class OurTeam extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section>
                <Header history={this.props.history} />
                <div className="our_team">
                    <h1 className="our-team-title">Our Team</h1>
                    <div className="two-person-cont">
                        <div className="person-profile alia">
                            <a href="http://aliawilkinson.com" target="blank">
                                <div className="pic-cont">
                                    <img className='ourTeamPic' src={Alia} align="middle" />
                                    <img className='ourTeamPic derp' src={aliaDerp} align="middle" />
                                </div>
                                <h5>Alia Wilkinson</h5>
                                <h6>web developer</h6>
                                <p>&amp; ideation expert</p>
                                <button className="port-but">
                                    <h6>portfolio</h6>
                                    <img className="but-icon" src={portfolio} />
                                </button>
                            </a>
                            <a href="https://github.com/aliawilkinson" target="blank">
                                <button className="git-but">
                                    <h6>github</h6>
                                    <img className="but-icon" src={github} />
                                </button>
                            </a>
                        </div>
                        <div className="person-profile harrison">
                            <a href="http://harrisonbchen.com" target="blank">
                                <div className="pic-cont">
                                    <img className='ourTeamPic' src={Harrison} align="middle" />
                                    <img className='ourTeamPic derp' src={harrisonDerp} align="middle" />
                                </div>
                                <h5>Harrison Chen</h5>
                                <h6>web developer</h6>
                                <p>&amp; jack of all trades</p>
                                <button className="port-but">
                                    <h6>portfolio</h6>
                                    <img className="but-icon" src={portfolio} />
                                </button>
                            </a>
                            <a href="https://github.com/harrison8024" target="blank">
                                <button className="git-but">
                                    <h6>github</h6>
                                    <img className="but-icon" src={github} />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="person-profile hanh">
                        <a href="http://hanhpham.live" target="blank">
                            <div className="pic-cont">
                                <img className='ourTeamPic' src={Hanh} align="middle" />
                                <img className='ourTeamPic derp' src={hanhDerp} align="middle" />
                            </div>
                            <h5>Hanh Pham</h5>
                            <h6>web developer</h6>
                            <p>&amp; SQL magician</p>
                            <button className="port-but">
                                <h6>portfolio</h6>
                                <img className="but-icon" src={portfolio} />
                            </button>
                        </a>
                        <a href="https://github.com/hanhpham327" target="blank">
                            <button className="git-but">
                                <h6>github</h6>
                                <img className="but-icon" src={github} />
                            </button>
                        </a>
                    </div>
                    <div className="person-profile omer">
                        <a href="http://omerfuterman.com" target="blank">
                            <div className="pic-cont">
                                <img className='ourTeamPic' src={Omer} align="middle" />
                                <img className='ourTeamPic derp' src={omerDerp} align="middle" />
                            </div>
                            <h5>Omer Futerman</h5>
                            <h6>web developer</h6>
                            <p>&amp; endpoint extrordinaire</p>
                            <button className="port-but">
                                <h6>portfolio</h6>
                                <img className="but-icon" src={portfolio} />
                            </button>
                        </a>
                        <a href="https://github.com/oFuterman" target="blank">
                            <button className="git-but">
                                <h6>github</h6>
                                <img className="but-icon" src={github} />
                            </button>
                        </a>
                    </div>
                    <div className="person-profile dona">
                        <a href="http://donaanda.com" target="blank">
                            <div className="pic-cont">
                                <img className='ourTeamPic' src={Dona} align="middle" />
                                <img className='derp' src={donaDerp} align="middle" />
                            </div>
                            <h5>Dona Anda</h5>
                            <h6>web developer</h6>
                            <p>&amp; pagination expert</p>
                            <button className="port-but">
                                <h6>portfolio</h6>
                                <img className="but-icon" src={portfolio} />
                            </button>
                        </a>
                        <a href="https://github.com/donaanda" target="blank"><button className="git-but">
                            <h6>github</h6>
                            <img className="but-icon" src={github} />
                        </button>
                        </a>
                    </div>
                    <div className="honorable-mention">
                        <img src={heart} /><p className="honorable-mention-p" align="middle">
                            Honorable mention: Yu-Chen Chen, a graphic designer who designed our landing page icons.
                        </p>
                    </div>
                    <div className="honorable-mention">
                        <img src={heart} /><p className="honorable-mention-p" align="middle">
                            Special thanks to Christian Brown, who taught us how to webscrape.
                        </p>
                    </div>
                </div>
                <Footer />
            </section>
        )
    }
}

export default OurTeam;