import React, {Component} from 'react';
import Header from './header';
import axios from 'axios';
import '../assets/css/ingredientLookUpResult.css';
import Group_1 from '../assets/images/displayImages/Group_1.png';
import CompoundPath_1 from '../assets/images/displayImages/Compound Path_1.png';


class IngredientLookUpResult extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: {
                data: null
            }
        }
    }

    async componentDidMount() {
        await axios.post(`http://localhost:8888/get_ingredient_by_name.php`).then(response => {
            this.setState({
                data: response.data
            });
        });
    }

    render(){

        if (this.state.data === null) {
            return <div>Loading...</div>
        } else if (!this.state.data.success) {
            return <div>No Result Found</div>
        } else {
            //console.log(this.state.data.ingredient);
            const {ingredient, safety, gentle, details} = this.state.data.ingredient;

            return (
                <section>
                    <Header history={this.props.history} />

                    <div className="ingredient-info-container">
                        <div className="ingredient-name">
                            <div className="ingredient-name-span">{ingredient}</div>
                            <img className="ingredient-result-gentle-img" src={CompoundPath_1}/>
                            <span className="ingredient-result-gentle-rating">{gentle}</span>
                            <img className="ingredient-result-safety-img" src={Group_1}/>
                            <span className="ingredient-result-safety-rating">{safety}</span>
                        </div>
                    </div>
                    <p className="ingredient-description">{details}</p>
                </section>
            )
        }
    }
}

export default IngredientLookUpResult;

