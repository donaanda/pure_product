import React, {Component} from 'react';
import SearchIngredient from '../../assets/images/search_ingredient/flask.png';
import Header from '../header/header';
import Footer from "../footer/footer";
import { Link } from 'react-router-dom';
import '../../assets/css/singleIngredientSearch.css';

class ingredientDetailSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            input:''
        }
    }

    handleSubmit(event){
        event.preventDefault();
        let uriEncodedInput = encodeURIComponent(this.state.input);
        this.props.history.push('/ingredient_detail_page/' + uriEncodedInput);
    }

    handleInput(event){
        event.preventDefault();
        this.setState({
            input: event.target.value
        }, ()=>console.log('input:', this.state)
        );
    }
    render(){
        const {input} = this.state;
        return (
            <section className="search-ingredient">
                <Header history={this.props.history} />
                <div className='headerContainer'>
                    <div className='iconContainer'>
                        <div className='headerIcon logoContainer smallerIcon'>
                            <div className='logoText'>
                                Search Ingredient
                            </div>
                        </div>
                    </div>
                </div>
                <img className="search-ingredient-image" src={SearchIngredient}/>
                <form className="search-ingredient">
                    <input autoFocus value={input} onChange={this.handleInput.bind(this)} className="search-ingredient-input" type="text" placeholder="type ingredients to look up here" size="30"/>
                    <button onClick={this.handleSubmit.bind(this)} className="search-ingredient-button">Search</button>
                </form>
                <Footer/>
            </section>
        )
    }   
}
export default ingredientDetailSearch;