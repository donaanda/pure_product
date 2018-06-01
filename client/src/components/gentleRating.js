import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import gentle_rating from '../assets/images/landing_page_icons/icons/gentle.png';
import { Link } from 'react-router-dom';
import '../assets/css/app.css';

class GentleRating extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section>
                <Header history={this.props.history} />
                <div className="site-about-container">
                    <img className="gentle_icon_gentle_page" src={gentle_rating} />
                    <h3>Gentle Rating</h3>
                    <p>The Gentle Rating scale:</p>
                    <p className="scale-text-gentle"><span className="green">Best</span> <span className="yellow darken-2">Good</span > <span className="orange">Average</span> <span className="red">Poor</span></p>
                    <p>Our gentle rating is based on data from Paula's Choice, a site dedicated to determining the dermatological safety of products. This differs from the safety rating in that it determines how gentle products are for a person's skin, as opposed to how safe they are for the average person's body and for the environment at large. For example, parabens are considered "good" under the gentle rating as they cause little or no irritation, while parabens are an 8 under the safety rating, as they can cause endocrine disruption in humans (can be adverse to a person's hormones).</p>
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

export default GentleRating;