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
            return this.list = nextProps;
        } else {
            return
        }
    }

    makeSuggestionDisplayDivs(suggestions) {
        let productSuggestions = '';
        if (suggestions.length > 0) {
            productSuggestions = suggestions.map((item, index) => 
            <li key={index} onClick={this.props.fillOutAutoComplete}>{item}</li>
            );
            return (
                <div><ul>{productSuggestions}</ul></div>
            )
        }
        return;
    }

    render() {
        if (this.list) {
            return (
                <div className="auto-complete">{this.makeSuggestionDisplayDivs(this.list.suggestions)}</div >
            )
        }
        return (
            <div></div>
        )
    }
}

export default AutoComplete;


