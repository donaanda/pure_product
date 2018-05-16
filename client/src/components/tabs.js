import React, { Component } from 'react';
import IngList from './ingredientList';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../assets/css/tabs.css';

class Tabs1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
            tab: 'ingredients',
            fieldStyle: {
                backgroundColor: '#ffcc99',
                width: '100vw',
                height: '50vh',
                overflow: 'hidden'
            }
        }
        this.tabs1 = {
            backgroundColor: '#ffcc99',
            font: 'bold 20px Arial',
            color: '#0099ff',
            display: 'inline-block',
            width: '33.3vw',
            cursor: 'pointer',
            borderColor: '#ffcc99',
            outline: 'none'
        }

        this.tabs2 = {
            backgroundColor: '#99ffcc',
            font: 'bold 20px Arial',
            color: '#0099ff',
            display: 'inline-block',
            width: '33.3vw',
            cursor: 'pointer',
            borderColor: '#99ffcc',
            outline: 'none'
        }

        this.tabs3 = {
            backgroundColor: '#ffb3ff',
            font: 'bold 20px Arial',
            color: '#0099ff',
            display: 'inline-block',
            width: '33.3vw',
            cursor: 'pointer',
            borderColor: '#ffb3ff',
            outline: 'none'
        }
    }

    handleClickIngredients(event) {
        console.log(event.target.name);
        event.preventDefault();
        this.setState({
            tab: event.target.name,
            fieldStyle: {
                backgroundColor: '#ffcc99',
                width: '100vw',
                height: '50vh',
                overflow: 'hidden'
            }
        });

    }

    handleClickVideos(event) {
        console.log(event.target.name);
        event.preventDefault();
        this.setState({
            tab: event.target.name,
            fieldStyle: {
                backgroundColor: '#99ffcc',
                width: '100vw',
                height: '50vh',
                overflow: 'hidden'
            }
        });

    }

    handleClickReviews(event) {
        console.log(event.target.name);
        event.preventDefault();
        this.setState({
            tab: event.target.name,
            fieldStyle: {
                backgroundColor: '#ffb3ff',
                width: '100vw',
                height: '50vh',
                overflow: 'hidden'
            }
        });
    }

    render() {

        const { tab } = this.state;

        return (
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                <TabList className="tab-list">
                    <Tab style={this.tabs1} onClick={this.handleClickIngredients.bind(this)}>Ingredients</Tab>
                    <Tab style={this.tabs2} onClick={this.handleClickVideos.bind(this)}>Videos</Tab>
                    <Tab style={this.tabs3} onClick={this.handleClickReviews.bind(this)}>Reviews</Tab>
                </TabList>
                <TabPanel>
                    <div style={this.state.fieldStyle}>
                        <IngList />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div style={this.state.fieldStyle}>
                        <h2>Any content 2</h2>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="tab-review" style={this.state.fieldStyle}>
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