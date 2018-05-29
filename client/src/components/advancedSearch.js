import React, { Component } from 'react';
import '../assets/css/advancedSearch.css';

class AdvancedSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            advancedSearchExpand: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if (this.state.advancedSearchExpand === false) {
            this.setState({
                advancedSearchExpand: true
            })
        } else {
            this.setState({
                advancedSearchExpand: false
            })
        }
    }

    render() {
        if (this.state.advancedSearchExpand === true) {
            return (
                <section>
                    <div className={`adv-search-fade-cont ${this.props.className}`} onClick={this.handleClick}></div>
                    <div>
                        <button type="button" onClick={this.handleClick} className={this.props.className}>Advanced Search</button>
                        <div className={`advanced-search-cont ${this.props.className}`}>
                            <form>
                                <div>
                                    <h5 className="adv-titles">Skin Type:</h5>
                                    <div><input id="advanced-search-input-check" type="checkbox" name="oily" /> <label id="adv-label">oily</label></div>
                                    <div><input id="advanced-search-input-check" type="checkbox" name="sensitive" /> <label id="adv-label">sensitive</label></div>
                                    <div><input id="advanced-search-input-check" type="checkbox" name="dry" /> <label id="adv-label">dry</label></div>
                                    <div><input id="advanced-search-input-check" type="checkbox" name="normal" /> <label id="adv-label">normal</label></div>
                                </div>
                                <div>
                                    <h5 className="adv-titles">Price Range:</h5>
                                    <input id="advanced-search-input" type="number" placeholder="dollar amount" name="price-range-low" /> <label id="adv-label">low</label>
                                    <input id="advanced-search-input" type="number" placeholder="dollar amount" name="price-range-high" /> <label id="adv-label">high</label>
                                </div>
                                <div>
                                    <h5 className="adv-titles">Safety Rating Range:</h5>
                                    <input id="advanced-search-input" type="number" placeholder="1 is best, 10 is worst" name="safety-low" /> <label id="adv-label">low</label>
                                    <input id="advanced-search-input" type="number" placeholder="1 is best, 10 is worst" name="safety-high" /> <label id="adv-label">high</label>
                                </div>
                                <div>
                                    <h5 className="adv-titles">Gentle Rating Range:</h5>
                                    <input id="advanced-search-input" type="number" placeholder="1 is best, 4 is worst" name="gentle-low" /> <label id="adv-label">low</label>
                                    <input id="advanced-search-input" type="number" placeholder="1 is best, 4 is worst" name="gentle-high" /> <label id="adv-label">high</label>
                                </div>
                                <div>
                                    <h5 className="adv-titles"> Vegan and Cruelty Free:</h5>
                                    <div><input id="advanced-search-input-check" type="checkbox" name="cruelty_free" /> <label id="adv-label">cruelty free</label></div>
                                    <div><input id="advanced-search-input-check" type="checkbox" name="vegan" /> <label id="adv-label">vegan</label></div>
                                </div>
                                <button className="btn">Submit</button>
                            </form>
                        </div>
                    </div >
                </section>
            )
        }
        return (
            <button type="button" onClick={this.handleClick} className={this.props.className}>Advanced Search</button>
        )
    }
}

export default AdvancedSearch;

