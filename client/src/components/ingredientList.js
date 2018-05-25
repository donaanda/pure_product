import React, {Component} from 'react';
import heart from '../assets/images/landing_page_icons/gentle_heart.png';
import cross from '../assets/images/landing_page_icons/safety.png';
import '../assets/css/ingredientList.css';
import Ingredient from './ingredient';

class IngredientList extends Component{
    constructor(props){
        super(props);
        this.state = {
            ingredients: this.props.info.map((ingredient, index) => {
                return (
                    <Ingredient key={index} ingredientInfo={ingredient} />
                )
            })
        }
    }
    // componentDidMount(){
    //         const ingredients = this.state.ingredients.map((ingredient, index) => {
    //             return (
    //                 <Ingredient key={index} ingredientInfo={ingredient} />
    //             )
    //         });
    // }
    

    // mapIngredients(){
    //     const ingredients = this.props.info.map((ingredient, index) => {
    //         return (
    //             <Ingredient key={index} ingredientInfo={ingredient} />
    //         )
    //     });
    // }
        
    
    render(){
        console.log(this.props);
        return (
            <div>
                <table className="ingredient-table">
                    <tbody>
                        <tr>
                            <td>Ingredients</td>
                            <td><img className="icon-width" src={heart} alt="heart" /></td>
                            <td><img className="icon-width" src={cross} alt="heart" /></td>
                        </tr>
                        {this.state.ingredients}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default IngredientList;