import React, { Component } from 'react';
import '../assets/css/sortProduct.css';

class SortProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dropContent: 'hide-drop-content',
            dropDownMenuClicked: false
        };
        this.dropDownMenu = this.dropDownMenu.bind(this);
    }

    dropDownMenu() {
        if (this.state.dropDownMenuClicked) {
            this.setState({
                dropContent: 'hide-drop-content',
                dropDownMenuClicked: false
            });
        } else {
            this.setState({
                dropContent: 'show-drop-content',
                dropDownMenuClicked: true
            });
        }
    }

    render() {
        return (
            <div>
                <button className="drop-down" onClick={this.dropDownMenu}>Sort by</button>
                <div className={this.state.dropContent}>
                    <div className="drop-down-cont">
                        <div className="drop-down-category" onClick={this.props.selectedCategory}>Price</div>
                        <div className="drop-down-category" onClick={this.props.selectedCategory}>Gentle Rating</div>
                        <div className="drop-down-category" onClick={this.props.selectedCategory}>Safety Rating</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SortProduct;