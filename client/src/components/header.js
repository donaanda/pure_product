import React, { Component } from 'react';
import '../assets/css/header.css';
import Image_1 from '../assets/images/header_images/Image_1.png';
import SearchIcon from '../assets/images/header_images/search.png';
import HamMenu from '../assets/images/header_images/ham_menu.png';
import LogoIcon from '../assets/images/header_images/logo.png';
import LoginIcon from '../assets/images/header_images/sign_in.png';
import { Link } from 'react-router-dom';

const imgs = {
    hamburgerMenu: '',
    logo: '',
    searchIcon: '',
    backgroundImage: Image_1
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchToggle: false,
            hamburgerToggle: false,
            searchBarStyle: {
                display: 'none',
            }
        }
    }
    toggleSearchBar() {
        //if the search bar is open
        if (this.state.searchToggle) {
            this.setState({
                searchToggle: false,
                searchBarStyle: {
                    display: 'none',

                }
            })
        } else {
            this.setState({
                searchToggle: true,
                searchBarStyle: {
                    display: 'block',
                    backgroundColor: 'lightgrey',
                    width: '85vw',
                    height: '10vw',
                    margin: '1.5% auto',
                    fontSize: '1em',
                    border: 'none'
                }
            })
        }
    }
    render() {
        return (
            <section>
                <Link to="/create_account">
                    <img className='headerIcon loginIcon' onClick={this.toggleSearchBar.bind(this)} src={LoginIcon} />
                </Link>
                <div className='headerContainer'>
                    <div className='iconContainer'>
                        <Link to="/expanded_menu">
                            <img className='headerIcon smallerIcon'
                                src={HamMenu} />
                        </Link>
                        <Link to="/">
                            <div className='headerIcon logoContainer smallerIcon'>
                                <img onClick={this.toggleSearchBar.bind(this)}
                                    src={LogoIcon} />
                                <div className='logoText siteTitle'>PureProduct</div>
                            </div>
                        </Link>
                        <img className='headerIcon' onClick={this.toggleSearchBar.bind(this)}
                            src={SearchIcon} />
                    </div>
                </div>
                <input style={this.state.searchBarStyle} />
            </section>
        )
    }
}

export default Header;
