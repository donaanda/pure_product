import React, { Component } from 'react';
import '../assets/css/header.css';
import SearchIcon from '../assets/images/header_images/search.png';
import SiteTitle from '../assets/images/header_images/site-title.png';
import LoginIcon from '../assets/images/header_images/user-login.png';
import HamburgerMenu from './burger-menu.js';
import { Link } from 'react-router-dom';

const imgs = {
    hamburgerMenu: '',
    logo: '',
    searchIcon: ''
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchToggle: false,
            hamburgerToggle: false,
            searchBarStyle: {
                display: 'none',
            },
            buttonStyle: {
                display: 'none'
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

                },
                buttonStyle: {
                    display: 'none'
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
                    border: 'none',
                    position: 'relative',
                    zIndex: 1
                },
                buttonStyle: {
                    display: 'block',
                    backgroundColor: 'blue',
                    width: '20vw',
                    height: '10vw',
                    margin: '1.5% auto',
                    fontcolor: 'black',
                    zIndex: 1
                }
            })
        }
    }
    render() {
        return (
            <div className="header-container">

                <div className="header-icon login-icon">
                    <Link to="/create_account">
                        <img className='headerIcon loginIcon' onClick={this.toggleSearchBar.bind(this)} src={LoginIcon} />
                    </Link>
                </div>

                <Link to="/expanded_menu">
                    <HamburgerMenu />
                </Link>

                <div className="header-icon site-title">
                    <Link to="/">
                        <img src={SiteTitle} />
                    </Link>
                </div>

                <div className="header-icon search-bar">
                    <img className='headerIcon' onClick={this.toggleSearchBar.bind(this)} src={SearchIcon} />
                </div>
                <input style={this.state.searchBarStyle} />
                <Link to="/search_product_result">
                    <button onClick={this.toggleSearchBar.bind(this)} style={this.state.buttonStyle}>Search</button>
                </Link>
            </div >
        )
    }
}

export default Header;
