import React, {Component} from 'react';
import Header from './header';
import Footer from './footer';
import safety_icon from '../assets/images/landing_page_icons/safety.png';
import { Link } from 'react-router-dom';

class SafetyRating extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <section>
                <Header history={this.props.history} />
                <div className="site-about-container">
                    <img className="gentle_icon_gentle_page" src={safety_icon} />
                    <h1>About The Safety Rating</h1>
                    <p>Our safety rating is based on data from Environmental Working Group's analysis. It represents overall safety based on ingredients in a product as it relates to the average human body and the envrionment. It differs from the gentle rating as it does not rate products that can cause irritation (such as many essential oils) as negative, while the gentle rating addresses irritation.</p>
                    <p> All data should be taken with a grain of salt, as the amount of data available on each ingredient can range from robust to limited. Additionally, ever person has different tolerances, allergies, and other limiting factors in which products they can use, and it’s always best to choose products based on your individual needs. We attempt to do our best to organize the data in the most easy to use way possible, but as always, it’s important to consult your doctor when using any new products, as well as listen to your own skin and body when trying something new.</p>
                    <p>Cheers,
                </p>
                    <p>The Pure Product Team
                </p>


                </div>
                <Footer />
            </section>
        )
    }
}

export default SafetyRating;