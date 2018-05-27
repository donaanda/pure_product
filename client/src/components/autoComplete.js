import React, { Component } from 'react';
import '../assets/css/autoComplete.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AutoComplete extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
        var list = null;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            return this.list = nextProps;
        } else {
            return
        }
    }

    makeCuteDisplayDivs(suggestions) {
        if (suggestions.length > 0) {
            let productSuggestions = suggestions.map((item, index) => {
                return (
                    <div key={index}>{item}</div>
                )
            });

            return (
                <div>{productSuggestions}</div>
            )
        }
    }

    render() {
        if (this.list) {
            return (
                <div className="auto-complete">{this.makeCuteDisplayDivs(this.list.stateChange)}</div >
            )
        }
        return (
            <div></div>
        )
    }
}

export default AutoComplete;