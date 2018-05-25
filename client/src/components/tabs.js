import React, { Component } from 'react';
import IngredientList from './ingredientList';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../assets/css/tabs.css';
import axios from 'axios';

class Tabs1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
        }

        this.ingredients = this.props.ingredients || [
            { "Ingredients": "No ingredients to display." },
        ];

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

    async componentDidMount() {
        await axios.post(`http://s-apis.learningfuze.com/hackathon/youtube/search.php`, {
            'q': 'cosmetics',
            'maxResults': 3,
            'type': 'video',
            'detailLevel': 'verbose'
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

    render() {
        const { tab } = this.state;

        return (
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                <TabList className="tab-list">
                    <Tab className="tab-header-ingredient" onClick={this.handleClickIngredients.bind(this)}>
                        Ingredients
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


export default Tabs1;