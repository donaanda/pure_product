import React from 'react';
import SearchIngredient from '../assets/images/search_ingredient/flask.png';
import '../assets/css/search_ingredient.css';

export default () => {
    return (
        <section className="search-ingredient">
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
                    <input className="search-ingredient-input" type="text" placeholder="type ingredients to look up here" size="30"/>
                </div>
                <button className="search-ingredient-button">Search</button>
            </form>
        </section>
    )
}