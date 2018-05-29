import React, { Component } from 'react';
import '../assets/css/header.css';
import SearchIcon from '../assets/images/header_images/search.png';
import SiteTitle from '../assets/images/header_images/site-title.png';
import LoginIcon from '../assets/images/header_images/user-login.png';
import HamburgerMenu from './burger-menu.js';
import { Link } from 'react-router-dom';
import ExpandedMenu from './expandedMenuWelcome';
import axios from 'axios';
import AutoComplete from './autoComplete';
import AdvancedSearch from './advancedSearch';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            autoComplete: [],
            input: "",
            searchToggle: false,
            searchBarStyle: 'display-none',
            buttonStyle: 'display-none',
            advancedSearchButtonStyle: 'display-none',
            headerContainer: 'header-container',
            hamburgerClick: false,
            ExpandedMenuSize: 'expanded-menu-hide',
            advancedSearchClicked: false
        };
    }

    async componentDidMount() {
        await axios.post(`http://localhost:8888/autocomplete.php`).then(res => {
            this.setState({
                productData: res.data
            })
        })
        this.setState({
            productDataAlpha: this.state.productData.productName.concat(this.state.productData.categories, this.state.productData.brand)
        });
        var arrHolder = this.state.productDataAlpha;
        var prodIt = 0;
        while (prodIt < arrHolder.length) {
            var insideIt = prodIt;
            while (insideIt > 0 && arrHolder[insideIt - 1] > arrHolder[insideIt]) {
                let suggestion = arrHolder[insideIt - 1];
                arrHolder[insideIt - 1] = arrHolder[insideIt];
                arrHolder[insideIt] = suggestion;
                insideIt--;
            }
            prodIt++;
        }
        var suggestionIt = 0;
        while (suggestionIt < arrHolder.length) {
            var position = suggestionIt + 1;
            while (position < arrHolder.length) {
                if (arrHolder[suggestionIt] === arrHolder[position]) {
                    arrHolder.splice(position, 1);
                    position--;
                }
                position++;
            }
            suggestionIt++;
        }
        this.setState({
            productDataAlpha: arrHolder
        });
    }

    handleInput(event) {
        event.preventDefault();
        this.setState({
            input: event.target.value,
            autoComplete: []
        });
        var curInput = this.state.input;
        var newArr = [];
        var tempHolder = [];
        var counter = 0;
        for (var item in this.state.productData['categories']) {
            if (this.state.productData['categories'][item].toUpperCase().includes(curInput.toUpperCase())) {
                if (counter < 1) {
                    newArr.push(this.state.productData['categories'][item]);
                }
            }
            counter++;
        }
        counter = 0;
        for (var item in this.state.productData['brand']) {
            if (this.state.productData['brand'][item].toUpperCase().includes(curInput.toUpperCase())) {
                if (counter < 1) {
                    newArr.push(this.state.productData['brand'][item]);
                }
            }
            counter++;
        }
        for (var item in this.state.productDataAlpha) {
            if (this.state.productDataAlpha[item].toUpperCase().includes(curInput.toUpperCase())) {
                newArr.push(this.state.productDataAlpha[item]);
                for (var l = 1; l <= 10; l++) {
                    tempHolder.push(this.state.productDataAlpha[item + l]);
                }
                if (tempHolder.length <= 10) {
                    for (var l = 1; l <= 10; l++) {
                        tempHolder.push(this.state.productDataAlpha[item + l]);
                    }
                }
            }
        }
        var p = 0;
        while (newArr.length <= 10) {
            if (tempHolder[p] && newArr.length < 9) {
                newArr.push(tempHolder[p]);
                p++;
            } else {
                newArr.push('no suggestions');
                break;
            }
        }
        while (newArr.length > 10) {
            newArr.pop();
        }
        for (var item in this.state.productDataAlpha) {
            if (this.state.productDataAlpha[item].toUpperCase() === curInput.toUpperCase()) {
                for (var k = 0; k < newArr.length; k++) {
                    if (this.state.productDataAlpha[item].toUpperCase() === newArr[k]) {
                    } else {
                        newArr[0] = this.state.productDataAlpha[item];
                    }
                }
            }
        }
        this.setState({
            autoComplete: newArr
        });
        return (
            <div>AutoComplete in omer function</div>
        )
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
                advancedSearchButtonStyle: 'display-none',
                headerContainer: 'header-container-search'
            })
        } else {
            this.setState({
                searchToggle: true,
                searchBarStyle: 'search-bar-style-show',
                buttonStyle: 'button-style-show',
                advancedSearchButtonStyle: 'advanced-search-button-show',
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
        const { searchToggle, autoComplete } = this.state;
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
                <form autoComplete="off">
                    <div className="autocomplete">
                        <input autoFocus={searchToggle} onChange={this.handleInput.bind(this)} type="text" placeholder="Search for products or ingredients..." id="search-bar-style-show" className={this.state.searchBarStyle} />
                    </div>
                    <button onClick={this.handleSubmit.bind(this)} className={this.state.buttonStyle}>Search</button>
                    <AutoComplete suggestions={autoComplete} />
                </form>
                <AdvancedSearch className={this.state.advancedSearchButtonStyle} />
            </div>
        )
    }
}

export default Header;
