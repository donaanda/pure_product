import React, { Component } from 'react';
import '../assets/css/autoComplete.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AutoComplete extends Component {
    constructor(props) {
        super(props);
        console.log('from autocomplete', props);

        this.state = {

        }
        var list = null;
    }

    componentWillReceiveProps(nextProps) {
        // console.log('next props:', nextProps)
        if (nextProps) {
            return this.list = nextProps;
        } else {
            return
        }
    }

    render() {
        if (this.list) {
            console.log(this.list.stateChange)
            return (
                <div className="autoComplete">{this.list.stateChange}</div >
            )
        }
        return (
            <div></div >
        )
    }
}

export default AutoComplete;