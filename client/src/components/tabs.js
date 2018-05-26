import React, { Component } from 'react';
import IngredientList from './ingredientList';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../assets/css/tabs.css';
import axios from 'axios';

class MenuTabs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
        }

        this.ingredients = this.props.ingredients || [
            { "Ingredients": "No ingredients to display." },
        ];

        this.product = this.props.product;

    }

    handleClickIngredients(event) {
        console.log(event.target.name);
        event.preventDefault();
        this.setState({
            tab: event.target.name,
        });

    }

    handleClickVideos(event) {
        console.log(event.target.name);
        event.preventDefault();
        this.setState({
            tab: event.target.name,
        });

    }

    handleClickReviews(event) {
        console.log(event.target.name);
        event.preventDefault();
        this.setState({
            tab: event.target.name,
        });
    }

    // componentDidMount() {
    //     var youtubeAjaxObject = {
    // 'dataType': 'json',
    // 'url': 'http://s-apis.learningfuze.com/hackathon/youtube/search.php',
    // 'timeout': 3000,
    //         'success': function (result) {
    //             if (result.success === true) {
    //                 removeLoader();
    //                 var currentSolarBodiesArr = Object.keys(result.data);
    //                 solarBodies.videos = currentSolarBodiesArr;
    //                 renderVideosOnModal(currentSolarBodiesArr, planetInfo);
    //             } else {
    //                 errorDisplay();

    //             }
    //         },
    //         'error': function (error) {
    //             errorDisplay()
    //         }
    //     };

    //     $.ajax(youtubeAjaxObject);
    // }

    // onYouTubeIframeAPIReady

    async componentDidMount() {
        const API_KEY = 'AIzaSyCSizsUkb5GqPfSuxAG43QxyscxxJs7m5E';
        await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            'key': API_KEY,
            'q': 'cosmetics',
            'part': 'snippet',
            'maxResults': 3,
            'fields': 'items(id,kind,snippet)',
        }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                this.setState({
                    data: res.data
                }, console.log)
            })
            .catch(error => {
                console.log(error);
            })
    }
    handleClickDetails(event) {
        console.log(event.target.name);
        event.preventDefault();
        this.setState({
            tab: event.target.name,
        });
    }

    colorizeYes(binaryNumber) {
        if (binaryNumber === "1") {
            return "blue";
        }
    }

    colorizeNo(binaryNumber) {
        if (binaryNumber === "0") {
            return "purple";
        }
    }

    render() {
        //console.log(this.product);
        const { Details, Dry, Normal, Oily, Sensitive, Vegan } = this.product;
        const { tab } = this.state;

        return (
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                <TabList className="tab-list">
                    <Tab className="tab-header-ingredient" onClick={this.handleClickIngredients.bind(this)}>
                        Ingredients
                    </Tab>
                    <Tab className="tab-header-detail" onClick={this.handleClickDetails.bind(this)}>
                        Details
                    </Tab>
                    <Tab className="tab-header-video" onClick={this.handleClickVideos.bind(this)}>
                        Videos
                    </Tab>
                    <Tab className="tab-header-review" onClick={this.handleClickReviews.bind(this)}>
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
                        <p className="product-detail-description">{Details}</p>
                        <table className="product-detail-table">
                            <tbody>
                                <tr className="product-detail-row">
                                    <td>Dry</td>
                                    <td className="product-detail-yes"><p className={`${this.colorizeYes(Dry)}`}>Yes</p></td>
                                    <td className="product-detail-No"><p className={`${this.colorizeNo(Dry)}`}>No</p></td>
                                </tr>
                                <tr className="product-detail-row">
                                    <td>Normal</td>
                                    <td className="product-detail-yes"><p className={`${this.colorizeYes(Normal)}`}>Yes</p></td>
                                    <td className="product-detail-No"><p className={`${this.colorizeNo(Normal)}`}>No</p></td>
                                </tr>
                                <tr className="product-detail-row">
                                    <td>Oily</td>
                                    <td className="product-detail-yes"><p className={`${this.colorizeYes(Oily)}`}>Yes</p></td>
                                    <td className="product-detail-No"><p className={`${this.colorizeNo(Oily)}`}>No</p></td>
                                </tr>
                                <tr className="product-detail-row">
                                    <td>Sensitive</td>
                                    <td className="product-detail-yes"><p className={`${this.colorizeYes(Sensitive)}`}>Yes</p></td>
                                    <td className="product-detail-No"><p className={`${this.colorizeNo(Sensitive)}`}>No</p></td>
                                </tr>
                                <tr className="product-detail-row">
                                    <td>Vegan</td>
                                    <td className="product-detail-yes"><p className={`${this.colorizeYes(Vegan)}`}>Yes</p></td>
                                    <td className="product-detail-No"><p className={`${this.colorizeNo(Vegan)}`}>No</p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="tab-video">
                        <h2 className="videos-default-text">No videos to display.</h2>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="tab-review">
                        <h2>No Reviews Yet</h2>
                        <h5>Be the first to write a review!</h5>
                        <button className="tab-review-button">Add Review</button>
                    </div>
                </TabPanel>
            </Tabs>
        )
    }
}


export default MenuTabs;