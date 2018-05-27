import React, {Component} from 'react';
import Header from './header';
import Footer from "./footer";
import axios from 'axios';
import '../assets/css/ingredientDetails.css';
import Group_1 from '../assets/images/displayImages/Group_1.png';
import CompoundPath_1 from '../assets/images/displayImages/Compound Path_1.png';
import Loader from './loader';


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
        this.setState({
            input:'',
            data: {
                data: null
            }
        })
        this.props.history.push('/ingredient_details_page/' + this.state.input);
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
            return <Loader/>
        } else if (!this.state.data.success) {
            return <div>No Result Found</div>
        } else {
            const ingredientBlock = this.state.data.ingredients.map((item,index)=>{
                const {ingredient, safety_rating, gentle_rating, details} = item;
                return (
                    <div key={index}>
                        <div className="ingredient-info-container">
                            <div className="ingredient-name">
                                <div className="ingredient-name-span">{ingredient}</div>
                                <img className="ingredient-result-gentle-img" src={CompoundPath_1}/>
                                <span className="ingredient-result-gentle-rating">{gentle_rating}</span>
                                <img className="ingredient-result-safety-img" src={Group_1}/>
                                <span className="ingredient-result-safety-rating">{safety_rating}</span>
                            </div>
                        </div>
                        <p className="ingredient-description">{details}</p>
                    </div>
                )
            });

            return (
                <section>
                    <Header history={this.props.history} />
                    {ingredientBlock}
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

