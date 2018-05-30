import React, { Component } from 'react';
import IngredientList from './ingredientList';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../assets/css/tabs.css';
import axios from 'axios';
import dry_icon from '../assets/images/skintype_icons/dry.png';
import sensitive_icon from '../assets/images/skintype_icons/sensitive.png';
import oily_icon from '../assets/images/skintype_icons/oily.png';
import combo_icon from '../assets/images/skintype_icons/combo.png';
import normal_icon from '../assets/images/skintype_icons/normal.png';
import vegan_icon from '../assets/images/ethical_icons/vegan.png';
import cruelty_free_icon from '../assets/images/ethical_icons/cruelty_free.png';
import YoutubeVideoReviews from './youtubeReviews';


class MenuTabs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
            data: null,
            backgroundColor: 'white'
        }

        this.ingredients = this.props.ingredients || [
            { "Ingredients": "No ingredients to display." },
        ];

        this.product = this.props.product;

    }

    handleClickIngredients(event) {
        event.preventDefault();
        console.log(event.target.tabIndex);
        this.setState({
            tab: event.target.name,
            className: 'active-tab-ingredients',
            backgroundColor: '#9df39f'
        });
    }

    handleClickDetails(event) {
        event.preventDefault();
        this.setState({
            tab: event.target.name,
            className: 'active-tab-details',
            backgroundColor: '#9df39f'
        });
    }


    handleClickVideos(event) {
        event.preventDefault();
        this.setState({
            tab: event.target.name,
            className: 'active-tab-videos',
            backgroundColor: '#9df39f'
        });

    }

    handleClickReviews(event) {
        event.preventDefault();
        this.setState({
            tab: event.target.name,
            className: 'active-tab-reviews',
            backgroundColor: '#9df39f'
        });
    }


    validateLabelDisplay(productAttributes) {
        var yesCount = null;
        var noCount = null;
        const length = Object.keys(productAttributes).length;
        for (var key in productAttributes) {
            if (productAttributes[key] === "1") {
                yesCount++;
            } else {
                noCount++;
            }
        }
        if (noCount === length) {
            return false;
        } else {
            return true;
        }
    }


    async componentDidMount() {
        //youtube search results per product
        const { product_name, brand, categories } = this.product;
        const API_KEY = 'AIzaSyCSizsUkb5GqPfSuxAG43QxyscxxJs7m5E';
        var review = 'review';
        var youtubeAddress = 'https://www.googleapis.com/youtube/v3/search';
        var dataConfig = {
            params: {
                part: 'snippet',
                q: `${product_name},${brand}, ${categories}, ${review}`,
                fields: 'items(id, kind, snippet)',
                maxResults: 6,
                key: API_KEY
            }
        }
        await axios.get(youtubeAddress, dataConfig)
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { className } = this.state;
        const { Details, Dry, Normal, Oily, Sensitive, Vegan, categories, Cruelty_Free } = this.product;

        var skinTypeValues = {
            Dry,
            Normal,
            Oily,
            Sensitive
        }

        var ethicalValues = {
            Vegan,
            Cruelty_Free
        }
        return (
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                <TabList className="tab-list">
                    <Tab className="tab-header-ingredient" style={{backgroundColor: this.state.tabIndex === 0 ? this.state.backgroundColor : 'white'}} onClick={this.handleClickIngredients.bind(this)}>
                        Ingredients
                    </Tab>
                    <Tab className="tab-header-detail" style={{backgroundColor: this.state.tabIndex === 1 ? this.state.backgroundColor : 'white'}} onClick={this.handleClickDetails.bind(this)}>
                        Details
                    </Tab>
                    <Tab className="tab-header-video" style={{backgroundColor: this.state.tabIndex === 2 ? this.state.backgroundColor : 'white'}} onClick={this.handleClickVideos.bind(this)}>
                        Videos
                    </Tab>
                    <Tab className="tab-header-review" style={{backgroundColor: this.state.tabIndex === 3 ? this.state.backgroundColor : 'white'}} onClick={this.handleClickReviews.bind(this)}>
                        Reviews
                    </Tab>
                </TabList>
                <TabPanel>
                    <div className="tab-ingredient">
                        <IngredientList info={this.ingredients} />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="tab-detail">
                        <h5 className="center">What it is:</h5>
                        <p className="product-detail-description">
                            {Details}
                        </p>
                        {/* Display label and content for skintype */}
                        <div className="icon-container-const">
                            {this.validateLabelDisplay(skinTypeValues) ?
                                <div className="icon-container">
                                    <h5 className="center">Skin types it works for:</h5>
                                </div> : ''}
                            {Dry === '1' ? <img className="skintype-icon" src={dry_icon} /> : ''}
                            {Normal === '1' ? <img className="skintype-icon" src={normal_icon} /> : ''}
                            {Oily === '1' ? <img className="skintype-icon" src={oily_icon} /> : ''}
                            {Sensitive === '1' ? <img className="skintype-icon" src={sensitive_icon} /> : ''}
                        </div>
                        {/* Display label and content for animal ethics*/}
                        <div className="icon-container-const">
                            {this.validateLabelDisplay(ethicalValues) ?
                                <div className="icon-container">
                                    <h5 className="center">Cruelty Free and Vegan:</h5>
                                </div> : ''}
                            <div className="icon-container-const">
                                {Vegan === '1' ? <img className="ethical-icon" src={vegan_icon} /> : ''}
                                {Cruelty_Free === '1' ? <img className="ethical-icon" src={cruelty_free_icon} /> : ''}
                            </div>
                        </div>
                    </div>
                </TabPanel >
                <TabPanel>
                    <YoutubeVideoReviews videoArray={this.state.data} />
                </TabPanel>
                <TabPanel>
                    <div className="tab-review">
                        <h2>No Reviews Yet</h2>
                        <h5>Be the first to write a review!</h5>
                        <button className="tab-review-button">Add Review</button>
                    </div>
                </TabPanel>
            </Tabs >
        )
    }
}


export default MenuTabs;