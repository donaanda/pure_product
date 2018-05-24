import React, {Component} from 'react';
import Header from './header';
import Footer from './footer';
import '../assets/css/aboutPP.css';
import { Link } from 'react-router-dom';

class OurTeam extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <section>
                <Header history={this.props.history} />
                <div className="our_team">
                    <h1>Our Team</h1>
                    <p>Hanh Pham</p>
                    <p>Harrison Chen</p>
                    <p>Omer Futerman</p>
                    <p>Dona Anda</p>
                    <p>Alia Wilkinson</p>

                    <p> came together to create this application.
                </p>
                </div>
                <Footer />
            </section>
        )
    }
}

export default OurTeam;