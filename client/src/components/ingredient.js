import React from 'react';
import '../assets/css/ingredientList.css';

const Ingredient = (props) => {

    return (
        <tr className="ingredient-row">
            <td className="ingredient-column"><span>{props.ingredientInfo.ingredient}</span></td>
            <td className="chemical-gentle-rating"><p>{props.ingredientInfo.gentle}</p></td>
            <td className="chemical-safety-rating"><p>{props.ingredientInfo.safety}</p></td>
        </tr>
    )
}

export default Ingredient;