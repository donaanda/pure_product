import React from 'react';

const Ingredient = (props) => {

    return (
        <tr>
            <td className="ingredient-column">{props.ingredientInfo.ingredient}</td>
            <td className="chemical-gentle-rating">{props.ingredientInfo.gentle}</td>
            <td className="chemical-safety-rating">{props.ingredientInfo.safety}</td>
        </tr>
    )
}

export default Ingredient;