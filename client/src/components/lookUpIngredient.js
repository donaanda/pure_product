import React, {Component} from 'react';
import SearchIngredient from '../assets/images/search_ingredient/flask.png';
import Header from './header';
import { Link } from 'react-router-dom';
import '../assets/css/search_ingredient.css';

class LookUpIngredient extends Component {
    constructor(){
        super();
        this.state = {
            input:''
        }
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
                                Look Up Ingredients
                            </div>
                        </div>
                    </div>
                </div>
                <img className="search-ingredient-image" src={SearchIngredient}/>
                <form className="search-ingredient">
                    <div>
                        <input value={input} onChange={this.handleInput.bind(this)} className="search-ingredient-input" type="text" placeholder="type ingredients to look up here" size="30"/>
                    </div>
                    <Link to="TBD">
                        <button className="search-ingredient-button">Search</button>
                    </Link>
                </form>
            </section>
        )
    }   
}
export default LookUpIngredient;