import React, { Component } from 'react';
import heart from '../assets/images/landing_page_icons/gentle_heart.png';
import cross from '../assets/images/landing_page_icons/safety.png';
import '../assets/css/ingredientList.css';
import Ingredient from './ingredient';
import Loader from './loader';

class IngredientList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: null,
            success: null
        }
    }

    componentDidMount() {
        if (this.props.info) {
            this.setState({
                ingredients: this.props.info.map((ingredient, index) => {
                    return (
                        <Ingredient key={index} ingredientInfo={ingredient} />
                    )
                })
            });
        }
        this.setState({
            success: this.props.success
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.info) {
            this.setState({
                ingredients: nextProps.info.map((ingredient, index) => {
                    return (
                        <Ingredient key={index} ingredientInfo={ingredient} />
                    )
                })
            });
        }
        this.setState({
            success: nextProps.success
        })
    }


    render() {
        if (this.state.success === false) {
            return <div>No Result Found</div>
        }
        if (this.state.ingredients === null) {
            return <Loader />
        }
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