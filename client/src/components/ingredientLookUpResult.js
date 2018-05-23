import React from 'react';
import Header from './header';
import '../assets/css/ingredientLookUpResult.css';
import Group_1 from '../assets/images/displayImages/Group_1.png';
import CompoundPath_1 from '../assets/images/displayImages/Compound Path_1.png';
export default (props)=> {
    return (
        <section>
            <Header/>
            <div className="ingredient-info-container">
                <div className="ingredient-name"><span className="ingredient-name-span">Ingredient</span>
                    <img className="ingredient-result-gentle-img" src={CompoundPath_1}/>
                    <span className="ingredient-result-gentle-rating">5</span>
                    <img className="ingredient-result-safety-img" src={Group_1}/>
                    <span className="ingredient-result-safety-rating">3</span>
                </div>
            </div>
            <p className="ingredient-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ex aliquid magni officiis nobis magnam molestias laudantium perspiciatis quis voluptate, non fugiat cupiditate libero numquam adipisci perferendis assumenda eum animi.
            </p>
        </section>
    )
}