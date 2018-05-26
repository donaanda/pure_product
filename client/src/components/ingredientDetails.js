import React, {Component} from 'react';
import Header from './header';
import Footer from "./footer";
import axios from 'axios';
import '../assets/css/ingredientDetails.css';
import Group_1 from '../assets/images/displayImages/Group_1.png';
import CompoundPath_1 from '../assets/images/displayImages/Compound Path_1.png';


class IngredientDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            input:'',
            data: {
                data: null
            }
        }
    }

    async componentDidMount() {
        var query = this.props.match.params.search;
        await axios.post(`http://localhost:8888/get_ingredient_by_name.php`, {query}).then(response => {
            this.setState({
                data: response.data
            }, () => console.log(this.state));
        });
    }

    async componentWillReceiveProps(nextProps) {
        if (this.props.match.params.search !== nextProps.match.params.search) {
            let query = nextProps.match.params.search;
            await axios.post(`http://localhost:8888/get_ingredient_by_name.php`, {query}).then(response => {
                this.setState({
                    data: response.data
                }, () => console.log(this.state));
            });
        }
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.history.push('/ingredient_details/' + this.state.input)
    }

    handleInput(event){
        event.preventDefault();
        this.setState({
            input: event.target.value
        }, ()=>console.log('input:', this.state)
        );
    }

    render(){

        if (this.state.data.data === null) {
            return <div>Loading...</div>
        } else if (!this.state.data.success) {
            return <div>No Result Found</div>
        } else {
            const {ingredient, safety, gentle, details} = this.state.data.ingredients;

            return (
                <section>
                    <Header history={this.props.history} />

                    <div className="ingredient-info-container">
                        <div className="ingredient-name">
                            <div className="ingredient-name-span">{ingredient}</div>
                            <img className="ingredient-result-gentle-img" src={CompoundPath_1}/>
                            <span className="ingredient-result-gentle-rating">{gentle}</span>
                            <img className="ingredient-result-safety-img" src={Group_1}/>
                            <span className="ingredient-result-safety-rating">{safety}</span>
                        </div>
                    </div>
                    <p className="ingredient-description">{details}</p>
                    <form className="search-ingredient">
                        <input autoFocus value={this.state.input} onChange={this.handleInput.bind(this)} className="search-ingredient-input" type="text" placeholder="type ingredients to look up here" size="30"/>
                        <button onClick={this.handleSubmit.bind(this)}className="search-ingredient-button">Search</button>
                    </form>
                    <Footer/>
                </section>
            )
        }
    }
}

export default IngredientDetails;

