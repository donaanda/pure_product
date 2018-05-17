import React from 'react';
import heart from '../assets/images/landing_page_icons/gentle_heart.png';
import cross from '../assets/images/landing_page_icons/safety.png';
import '../assets/css/ingredientList.css';
import Ingredient from './ingredient';

export default (props) => {
    const ingredients = props.info.map((ingredient, index) => {
        return (
            <Ingredient key={index} ingredientInfo={ingredient} />
        )
    });

    return (
        <div>
            <table className="ingredient-table">
                <tbody>
                    <tr>
                        <td>Ingredients</td>
                        <td><img className="icon-width" src={heart} alt="heart" /></td>
                        <td><img className="icon-width" src={cross} alt="heart" /></td>
                    </tr>
                    {ingredients}
                </tbody>
            </table>
        </div>
    )
}