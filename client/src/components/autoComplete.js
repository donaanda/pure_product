import React, { Component } from 'react';
import '../assets/css/autoComplete.css';
import Header from './header';

class AutoComplete extends Component {
    constructor(props) {
        super(props);
        this.list = null;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            console.log(nextProps);
            return this.list = nextProps;
        } else {
            return
        }
    }

    makeSuggestionDisplayDivs(suggestions, input) {
        let productSuggestions = '';
        if (suggestions.length > 0) {
            productSuggestions = suggestions.map((item, index) => {
                let productName = item.slice(input.length);
                let currentInput = input.toUpperCase();
                return (
                <li key={index} onClick={this.props.fillOutAutoComplete}><strong className="current-input">{currentInput}</strong>{productName}</li> 
            )});
            return (
                <div><ul>{productSuggestions}</ul></div>
            )
        }
        return;
    }

    render() {
        if (this.list) {
            return (
                <div className="auto-complete">{this.makeSuggestionDisplayDivs(this.list.suggestions, this.list.currentInput)}</div >
            )
        }
        return (
            <div></div>
        )
    }
}

export default AutoComplete;


