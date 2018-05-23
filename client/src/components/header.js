import React, { Component } from 'react';
import '../assets/css/header.css';
import SearchIcon from '../assets/images/header_images/search.png';
import SiteTitle from '../assets/images/header_images/site-title.png';
import LoginIcon from '../assets/images/header_images/user-login.png';
import HamburgerMenu from './burger-menu.js';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input:"",
            searchToggle: false,
            searchBarStyle: {
                display: 'none',
            },
            buttonStyle: {
                display: 'none'
            },
            headerContainer: {
                display: 'block',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                height: '10vh',
                backgroundColor: 'white',
                zIndex: '1'

            }
        };
    }

    handleInput(event){
        event.preventDefault();
        this.setState({
            input: event.target.value
        }, ()=>console.log('input:', this.state)
        );
    }
    handleSubmit(){
        this.props.history.push('/searchProductResult/' + this.state.input)
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

                },
                headerContainer: {
                    display: 'block',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    height: '10vh',
                    backgroundColor: 'white',
                    zIndex: '1'

                }
            })
        } else {
            this.setState({
                searchToggle: true,
                searchBarStyle: {
                    display: 'inline-block',
                    color: '#555555',
                    width: '65vw',
                    height: '10vw',
                    margin: '1.5% 0 1.5% 5%',
                    fontSize: '1em',
                    border: 'none',
                    positon: 'relative',
                    zIndex: 1
                },

                buttonStyle: {
                    display: 'inline-block',
                    backgroundColor: 'aliceblue',
                    borderRadius: '10%',
                    width: '20vw',
                    height: '10vw',
                    margin: '1.5% 0 1.5% 5%',
                    fontcolor: 'black',
                    zIndex: 1
                },
                headerContainer: {
                    display: 'block',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    height: '20vh',
                    backgroundColor: 'white',
                    zIndex: '1'

                }
            })
        }
    }
    render() {
        return (
            <div style={this.state.headerContainer}>
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

                <input onChange={this.handleInput.bind(this)} type="text" placeholder="Search for products or ingredients..." style={this.state.searchBarStyle} />
                
                <button onClick={this.handleSubmit.bind(this)} style={this.state.buttonStyle}>Search</button>
                

            </div >
        )
    }
}

export default Header;
