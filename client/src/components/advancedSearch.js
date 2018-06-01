import React, { Component } from 'react';
import '../assets/css/advancedSearch.css';
import axios from 'axios';

class AdvancedSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            advancedSearchExpand: false,
            selection: {}
        }
        this.handleAdvancedSearchClick = this.handleAdvancedSearchClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleAdvancedSearchClick() {
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

    async handleSubmit(event) {
        event.preventDefault();
        var query = this.state.selection;
        await axios.post(`http://localhost:8888/advanced_search.php`, { query }).then(response => {
            this.setState({
                data: response.data
            }, () => console.log("axios", this.state))
        });
        console.log(this.state.data);
    }

    handleChange(event) {
        event.preventDefault();
        var name = event.target.name;
        var value = event.target.value;
        const newSelection = {};
        for (let key in this.state.selection) {
            newSelection[key] = this.state.selection[key];
        }
        if (event.target.checked) {
            newSelection[name] = value;
        } else {
            delete newSelection[name];
        }
        this.setState({
            selection: newSelection
        }, ()=>console.log('selection', this.state.selection));
    }

    render() {
        if (this.state.advancedSearchExpand === true) {
            return (
                <section>
                    <div className={`adv-search-fade-cont ${this.props.className}`} onClick={this.handleAdvancedSearchClick}></div>
                    <div>
                        <button type="button" onClick={this.handleAdvancedSearchClick} className={this.props.className}>Advanced Search</button>
                        <div className={`advanced-search-cont ${this.props.className}`}>
                            <form>
                                <div>
                                    <h5 className="adv-titles">Skin Type:</h5>
                                    <div><input id="advanced-search-input-check" value="yes" onChange={this.handleChange} type="checkbox" name="oily" /> <label id="adv-label">oily</label></div>
                                    <div><input id="advanced-search-input-check" value="yes" onChange={this.handleChange} type="checkbox" name="sensitive" /> <label id="adv-label">sensitive</label></div>
                                    <div><input id="advanced-search-input-check" value="yes" onChange={this.handleChange} type="checkbox" name="dry" /> <label id="adv-label">dry</label></div>
                                    <div><input id="advanced-search-input-check" value="yes" onChange={this.handleChange} type="checkbox" name="normal" /> <label id="adv-label">normal</label></div>
                                    <div><input id="advanced-search-input-check" value="yes" onChange={this.handleChange} type="checkbox" name="combination" /> <label id="adv-label">combination</label></div>
                                </div>
                                <div>
                                    <h5 className="adv-titles">Price Range:</h5>
                                    <input id="advanced-search-input" type="number" onChange={this.handleChange} placeholder="dollar amount" name="price-range-low" /> <label id="adv-label">low</label>
                                    <input id="advanced-search-input" type="number" onChange={this.handleChange} placeholder="dollar amount" name="price-range-high" /> <label id="adv-label">high</label>
                                </div>
                                <div>
                                    <h5 className="adv-titles">Safety Rating Range:</h5>
                                    <input id="advanced-search-input" type="number" onChange={this.handleChange} placeholder="1 is best, 10 is worst" name="safety-low" /> <label id="adv-label">low</label>
                                    <input id="advanced-search-input" type="number" onChange={this.handleChange} placeholder="1 is best, 10 is worst" name="safety-high" /> <label id="adv-label">high</label>
                                </div>
                                <div>
                                    <h5 className="adv-titles">Gentle Rating Range:</h5>
                                    <input id="advanced-search-input" type="number" onChange={this.handleChange} placeholder="1 is best, 4 is worst" name="gentle-low" /> <label id="adv-label">low</label>
                                    <input id="advanced-search-input" type="number" onChange={this.handleChange} placeholder="1 is best, 4 is worst" name="gentle-high" /> <label id="adv-label">high</label>
                                </div>
                                <div>
                                    <h5 className="adv-titles"> Vegan and Cruelty Free:</h5>
                                    <div><input id="advanced-search-input-check" value="yes" onChange={this.handleChange} type="checkbox" name="cruelty_free" /> <label id="adv-label">cruelty free</label></div>
                                    <div><input id="advanced-search-input-check" value="yes" onChange={this.handleChange} type="checkbox" name="vegan" /> <label id="adv-label">vegan</label></div>
                                </div>
                                <button onClick={this.handleSubmit} className="btn">Submit</button>
                            </form>
                        </div>
                    </div >
                </section>
            )
        }
        return (
            <button type="button" onClick={this.handleAdvancedSearchClick} className={this.props.className}>Advanced Search</button>
        )
    }
}

export default AdvancedSearch;

