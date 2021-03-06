import React from 'react';
import '../../assets/css/ingredientList.css';

const Ingredient = (props) => {
    function colorizeSafetyNum(rating) {
        switch (rating) {
            case "1":
                return "green lighten-3";
            case "2":
                return "light-green";
            case "3":
                return "green";
            case "4":
                return "yellow lighten-3";
            case "5":
                return "yellow";
            case "6":
                return "orange";
            case "7":
                return "deep-orange";
            case "8":
                return "red";
            case "9":
                return "red darken-1";
            case "10":
                return "red darken-2";
            case "1-2":
                return "green";
            case "1-3":
                return "green";
            case "1-4":
                return "yellow";
            case "2-3":
                return "teal";
            default:
                return
        }
    }

    function colorizeGentleNum(rating) {
        switch (rating) {
            case "1":
                return "green";
            case "2":
                return "yellow";
            case "3":
                return "orange";
            case "4":
                return "red";
            default:
                return
        }
    }

    function wordifyGentleNum(rating) {
        switch (rating) {
            case "1":
                return "best";
            case "2":
                return "good";
            case "3":
                return "avg";
            case "4":
                return "poor";
            default:
                return
        }
    }

    return (
        <tr className="ingredient-row">
            <td className="ingredient-column"><div>{props.ingredientInfo.ingredient ? props.ingredientInfo.ingredient : props.ingredientInfo.search}</div></td>
            <td className="chemical-gentle-rating">
                <p className={`${colorizeGentleNum(props.ingredientInfo.gentle_rating)}`}>
                    {props.ingredientInfo.gentle_rating ? wordifyGentleNum(props.ingredientInfo.gentle_rating) : "N/A"}
                </p>
            </td>
            <td className="chemical-safety-rating">
                <p className={`${colorizeSafetyNum(props.ingredientInfo.safety_rating)}`}>
                    {props.ingredientInfo.safety_rating ? props.ingredientInfo.safety_rating : "N/A"}
                </p>
            </td>
        </tr>
    )

}

export default Ingredient;