import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import safety_icon from '../assets/images/landing_page_icons/icons/cross.png';
import '../assets/css/app.css';
import { Link } from 'react-router-dom';

class SafetyRating extends Component {
    constructor(props) {
        super(props);
    }

    colorizeSafetyNum(rating) {
        switch (rating) {
            case "1":
                return "green lighten-3";
            case "2":
                return "light-green";
            case "3":
                return "green";
            case "4":
                return "yellow lighten-3";
            case "5":
                return "yellow";
            case "6":
                return "orange";
            case "7":
                return "deep-orange";
            case "8":
                return "red";
            case "9":
                return "red darken-1";
            case "10":
                return "red darken-2";
            case "1-2":
                return "green";
            case "1-3":
                return "green";
            case "1-4":
                return "yellow";
            case "2-3":
                return "teal";
            default:
                return
        }
    }

    render() {
        return (
            <section>
                <Header history={this.props.history} />s
                <div className="site-about-container">
                    <img className="gentle_icon_gentle_page" src={safety_icon} />
                    <h3>Safety Rating</h3>
                    <p className="scale-text-safety"><span className={this.colorizeSafetyNum("1")}>1</span><span className={this.colorizeSafetyNum("2")}>2</span><span className={this.colorizeSafetyNum("3")}>3</span><span className={this.colorizeSafetyNum("4")}>4</span><span className={this.colorizeSafetyNum("5")}>5</span><span className={this.colorizeSafetyNum("6")}>6</span><span className={this.colorizeSafetyNum("7")}>7</span><span className={this.colorizeSafetyNum("8")}>8</span><span className={this.colorizeSafetyNum("9")}>9</span><span className={this.colorizeSafetyNum("10")}>10</span></p>
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