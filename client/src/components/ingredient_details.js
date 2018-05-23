import React from 'react';
import Header from './header';
import '../assets/css/ingredient_details.css';
import Group_1 from '../assets/images/displayImages/Group_1.png';
import CompoundPath_1 from '../assets/images/displayImages/Compound Path_1.png';
export default (props)=> {
    return (
    <section className="ingredientDetails"> 
        <Header/>
        <div className="rowIngredient">
            <div className="ingredientName"> Ingredient
            </div>
            <div className="gentleIcon">
                <img className="gentleImg" src={CompoundPath_1}/>
                <span className="gentleNumber"> 5 </span>            
            </div>
            <div className="safetyIcon">
                <img className="safetyImg" src={Group_1}/>
                <span className="safetyNumber">3 </span>            
            </div>
        </div>
        <p className="ingredientDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ex aliquid magni officiis nobis magnam molestias laudantium perspiciatis quis voluptate, non fugiat cupiditate libero numquam adipisci perferendis assumenda eum animi.
        </p>
    </section>
    )
}