import React, {Component} from 'react';
import IngList from './ingredients';
import Video from './video';

class Tabs extends Component{
    constructor(){
    super();
    this.state ={
        tab: 'ingredients',
        fieldStyle: {
            backgroundColor: '#ffcc99',
            width:'100vw',
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
        borderColor:'#ffcc99',
        outline:'none'
    }

    this.tabs2 = {
        backgroundColor: '#99ffcc',
        font: 'bold 20px Arial',
        color: '#0099ff',
        display: 'inline-block',
        width: '33.3vw',
        cursor: 'pointer',
        borderColor:'#99ffcc',
        outline:'none'
    }

    this.tabs3 = {
        backgroundColor: '#ffb3ff',
        font: 'bold 20px Arial',
        color: '#0099ff',
        display: 'inline-block',
        width: '33.3vw',
        cursor: 'pointer',
        borderColor:'#ffb3ff',
        outline:'none'
    }
}
    handleClickIngredients(event){
        console.log(event.target.name);
        event.preventDefault();
        this.setState({
            tab: event.target.name,
            fieldStyle: {
                backgroundColor: '#ffcc99',
                width:'100vw',
                height: '50vh',
                overflow: 'hidden'
            }
        });
    
    }
    handleClickVideos(event){
        console.log(event.target.name);
        event.preventDefault();
        this.setState({
            tab: event.target.name,
            fieldStyle: {
                backgroundColor: '#99ffcc',
                width:'100vw',
                height: '50vh',
                overflow: 'hidden'
            }
        });
    
    }
    handleClickReviews(event){
        console.log(event.target.name);
        event.preventDefault();
        this.setState({
            tab: event.target.name,
            fieldStyle: {
                backgroundColor: '#ffb3ff',
                width:'100vw',
                height: '50vh',
                overflow: 'hidden'
            }
        });
    
    }

    render(){
        const {tab} = this.state;
        return(
        <div>
            <button name='ingredients' style={this.tabs1} onClick={this.handleClickIngredients.bind(this)}>Ingredients</button>
            <button name='videos' style={this.tabs2} onClick={this.handleClickVideos.bind(this)}>Videos</button>
            <button name='reviews' style={this.tabs3} onClick={this.handleClickReviews.bind(this)}>Reviews</button>
            <div style={this.state.fieldStyle}>
                <IngList/>
            </div>
        </div>
        )
    }
}


export default Tabs;