import React, { Component } from 'react';
import '../assets/css/header.css'
import Image_1 from '../assets/images/header_images/Image_1.png';
import SearchIcon from '../assets/images/header_images/Group_1.png';
import sideNavButton from '../assets/images/header_images/Group_2.png';
import LogoIcon from '../assets/images/header_images/Group_3.png';
import LoginIcon from '../assets/images/header_images/CompoundPath_1.png';

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
                    margin: '1.5% auto',
                    fontSize:'200%',
                    border:'none'
                }
            })
        }
    }
    render() {
        return (
            <section>
                <img className='headerIcon loginIcon' onClick={this.toggleSearchBar.bind(this)} src={LoginIcon} />
                <div className='headerContainer'>
                    <div className='iconContainer'>
                        <img className='headerIcon smallerIcon' onClick={this.toggleSearchBar.bind(this)} src={sideNavButton} />
                        <div className='headerIcon logoContainer smallerIcon'>
                            <img onClick={this.toggleSearchBar.bind(this)} src={LogoIcon} />
                            <div className='logoText'>PureProduct</div>
                        </div>
                        <img className='headerIcon' onClick={this.toggleSearchBar.bind(this)} src={SearchIcon} />
                    </div>
                </div>
                <input style={this.state.searchBarStyle} />
            </section>
        )
    }
}

export default Header;
