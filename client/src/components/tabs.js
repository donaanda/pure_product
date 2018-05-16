import React, { Component } from 'react';
import IngredientList from './ingredientList';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../assets/css/tabs.css';

class Tabs1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
        }

        this.ingredients = this.props.ingredients || [
            { "Ingredient": "Mica", "Gentle": "2", "Safety": "2" },
            { "Ingredient": "Titanium Dioxide", "Gentle": "2", "Safety": "3" },
            { "Ingredient": "Zinc Oxide", "Gentle": "2", "Safety": "3" },
            { "Ingredient": "Iron Oxides", "Gentle": "3", "Safety": "4" }
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

    render() {

        const { tab } = this.state;

        return (
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                <TabList className="tab-list">
                    <Tab className="tab-header-ingredient" onClick={this.handleClickIngredients.bind(this)}>Ingredients</Tab>
                    <Tab className="tab-header-video" onClick={this.handleClickVideos.bind(this)}>Videos</Tab>
                    <Tab className="tab-header-review" onClick={this.handleClickReviews.bind(this)}>Reviews</Tab>
                </TabList>
                <TabPanel>
                    <div className="tab-ingredient">
                        <IngredientList info={this.ingredients}/>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="tab-video">
                        <h2>Any content 2</h2>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="tab-review">
                        <h3>No Reviews Yet</h3>
                        <h5>Be the first to write a review!</h5>
                        <button className="tab-review-button">Add Review</button>
                    </div>
                </TabPanel>
            </Tabs>
        )
    }
}


export default Tabs1;