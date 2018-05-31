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

        this.fillOutAutoComplete = this.fillOutAutoComplete.bind(this);
    }

    async componentDidMount() {
        await axios.post(`http://localhost:8888/autocomplete.php`).then(res => {
            this.setState({
                productData: res.data
            })
        })
        this.setState({
            productDataArray: this.state.productData.productName.concat(this.state.productData.categories, this.state.productData.brand)
        });
        var arrayHolder = this.state.productDataArray;
        var prodIt = 0;
        while (prodIt < arrayHolder.length) {
            var insideIt = prodIt;
            while (insideIt > 0 && arrayHolder[insideIt - 1] > arrayHolder[insideIt]) {
                let suggestion = arrayHolder[insideIt - 1];
                arrayHolder[insideIt - 1] = arrayHolder[insideIt];
                arrayHolder[insideIt] = suggestion;
                insideIt--;
            }
            prodIt++;
        }
        var suggestionIt = 0;
        while (suggestionIt < arrayHolder.length) {
            var position = suggestionIt + 1;
            while (position < arrayHolder.length) {
                if (arrayHolder[suggestionIt] === arrayHolder[position]) {
                    arrayHolder.splice(position, 1);
                    position--;
                }
                position++;
            }
            suggestionIt++;
        }
        this.setState({
            productDataArray: arrayHolder
        });
    }

    checkForAutocomplete(){
        var curInput = this.state.input;
        var newArray = [];
        var tempHolder = [];
        var counter = 0;
        if(this.state.input === ''){
            return
        }
        for (var item in this.state.productData['categories']) {
            if (this.state.productData['categories'][item].substr(0, curInput.length).toUpperCase() == curInput.toUpperCase()) {
                if (counter < 1) {
                    newArray.push(this.state.productData['categories'][item]);
                }
            }
            counter++;
        }
        counter = 0;
        for (var item in this.state.productData['brand']) {
            if (this.state.productData['brand'][item].substr(0, curInput.length).toUpperCase() == curInput.toUpperCase()) {
                if (counter < 1) {
                    newArray.push(this.state.productData['brand'][item]);
                }
            }
            counter++;
        }
        for (var item in this.state.productData['productName']) {
            if (this.state.productData['productName'][item].substr(0, curInput.length).toUpperCase() == curInput.toUpperCase()) {
                newArray.push(this.state.productData['productName'][item])
                while (newArray.length > 10) {
                    newArray.pop();
                }
            }
        }
        
        this.setState({
            autoComplete: newArray
        })
    }

    handleInput(event) {
        event.preventDefault();
        this.setState({
            input: event.target.value,
            autoComplete: []
        }, this.checkForAutocomplete)
    }

    handleSubmit(event) {
        event.preventDefault();
        let uriEncodedInput = encodeURIComponent(this.state.input);
        this.props.history.push('/search_product_result/' + uriEncodedInput)
    }

    toggleSearchBar(event) {
        //if the search bar is open
        if (this.state.searchToggle) {
            this.setState({
                searchToggle: false,
                searchBarStyle: 'display-none',
                buttonStyle: 'display-none',
                advancedSearchButtonStyle: 'display-none',
                headerContainer: 'header-container-search',
                autoComplete: [],
                input: ""
            })
        } else {
            this.setState({
                searchToggle: true,
                searchBarStyle: 'search-bar-style-show',
                buttonStyle: 'button-style-show',
                advancedSearchButtonStyle: 'advanced-search-button-show',
                headerContainer: 'header-container-show',
                autoComplete: [],
                input: ""
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

    fillOutAutoComplete(event) {
        console.log(event);
        this.setState({
            input: event.target.innerText,
            autoComplete: []
        });
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
                        <input value={this.state.input} autoFocus={searchToggle} onChange={this.handleInput.bind(this)} type="text" placeholder="Search for products or ingredients..." id="search-bar-style-show" className={this.state.searchBarStyle} />
                    </div>
                    <button onClick={this.handleSubmit.bind(this)} className={this.state.buttonStyle}>Search</button>
                    <AutoComplete fillOutAutoComplete={this.fillOutAutoComplete} suggestions={autoComplete} />
                </form>
                <AdvancedSearch className={this.state.advancedSearchButtonStyle} />
            </div>
        )
    }
}

export default Header;
