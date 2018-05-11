import React, {Component} from 'react';
import axios from 'axios';


class Test extends Component {
    componentDidMount(){
        this.getUserData();
    }
    async getUserData(){
        const response = await axios.get('http://localhost:8888');
        console.log(response);
    }

    render(){
        return <h1>Test</h1>
    }
}

export default Test;