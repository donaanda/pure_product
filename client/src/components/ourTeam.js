import React, {Component} from 'react';
import Header from './header';
import Footer from './footer';
import '../assets/css/aboutPP.css';
import Hanh from '../assets/images/ourTeam/hanh.png';
import Harrison from '../assets/images/ourTeam/harrison.png';
import Omer from '../assets/images/ourTeam/omer.png';
import Dona from '../assets/images/ourTeam/dona.png';
import Alia from '../assets/images/ourTeam/alia.png';
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
                    <div className="person-profile"><img className='ourTeamPic' src={Hanh} align="middle"/>Hanh Pham</div>
                    <div className="person-profile"><img className='ourTeamPic' src={Harrison} align="middle"/>Harrison Chen</div>
                    <div className="person-profile"><img className='ourTeamPic' src={Omer} align="middle"/>Omer Futerman</div>
                    <div className="person-profile"><img className='ourTeamPic' src={Dona} align="middle"/>Dona Anda</div>
                    <div className="person-profile"><img className='ourTeamPic' src={Alia} align="middle"/>Alia Wilkinson</div>
                    <p> came together to create this application.</p>
                </div>
                <Footer />
            </section>
        )
    }
}

export default OurTeam;