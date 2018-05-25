import React, { Component } from 'react';
import '../assets/css/header.css';
import SearchIcon from '../assets/images/header_images/search.png';
import SiteTitle from '../assets/images/header_images/site-title.png';
import LoginIcon from '../assets/images/header_images/user-login.png';
import HamburgerMenu from './burger-menu.js';
import { Link } from 'react-router-dom';
import ExpandedMenu from './expandedMenuWelcome';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            searchToggle: false,
            searchBarStyle: 'display-none',
            buttonStyle: 'display-none',
            headerContainer: 'header-container',
            hamburgerClick: false,
            ExpandedMenuSize: 'expanded-menu-size'
        };
    }

    handleInput(event) {
        event.preventDefault();
        this.setState({
            input: event.target.value
        }, () => console.log('input:', this.state)
        );
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.history.push('/search_product_result/' + this.state.input)
    }

    toggleSearchBar() {
        //if the search bar is open
        if (this.state.searchToggle) {
            this.setState({
                searchToggle: false,
                searchBarStyle: 'display-none',
                buttonStyle: 'display-none',
                headerContainer: 'header-container-search'
            })
        } else {
            this.setState({
                searchToggle: true,
                searchBarStyle: 'search-bar-style-show',
                buttonStyle: 'button-style-show',
                headerContainer: 'header-container-show'
            });
        }
    }
    

    showExpandedMenu() {
        if (this.state.hamburgerClick) {
            this.setState({
                hamburgerClick: false,
                ExpandedMenuSize: 'expanded-menu-hide'
            });
        } else {
            this.setState({
                hamburgerClick: true,
                ExpandedMenuSize: 'expanded-menu-show'
            });
        }
    }

    render() {
        const {searchToggle} = this.state;
        return (
            <div className={this.state.headerContainer}>
                <div className="side-nav">
                    <ExpandedMenu className={this.state.ExpandedMenuSize} />
                    <HamburgerMenu open={this.state.hamburgerClick} onClick={this.showExpandedMenu.bind(this)} />
                </div>

                <div className="header-icon login-icon">
                    <Link to="/create_account">
                        <img className='headerIcon loginIcon' onClick={this.toggleSearchBar.bind(this)} src={LoginIcon} />
                    </Link>
                </div>

                <div className="header-icon site-title">
                    <Link to="/">
                        <img src={SiteTitle} />
                    </Link>
                </div>

                <div className="header-icon search-bar">
                    <img className='headerIcon' onClick={this.toggleSearchBar.bind(this)} src={SearchIcon} />
                </div>
                <form>
                    <input autoFocus={searchToggle} onChange={this.handleInput.bind(this)} type="text" placeholder="Search for products or ingredients..." className={this.state.searchBarStyle} />
                    <button onClick={this.handleSubmit.bind(this)} className={this.state.buttonStyle}>Search</button>
                </form>
            </div >
        )
    }
}

export default Header;
