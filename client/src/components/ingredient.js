import React from 'react';

const Ingredient = (props) => {

    return (
        <tr>
            <td className="ingredient-column">{props.ingredientInfo.Ingredient}</td>
            <td className="chemical-gentle-rating">{props.ingredientInfo.Gentle}</td>
            <td className="chemical-safety-rating">{props.ingredientInfo.Safety}</td>
        </tr>
    )
}

export default Ingredient;