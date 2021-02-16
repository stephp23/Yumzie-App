import React, { useState } from 'react'
import RecipeDetails from './RecipeDetails';

const Recipe = ({recipe}) => {

    const [show, setShow] = useState(false)

    const {label, image, url, ingredients, healthLabels} = recipe.recipe;
    return (
        <div className="recipe">
           <h2>{label}</h2>
           <img src={image} alt={label}/>
           <h4>{healthLabels}</h4>
           <a href={url} target="_blank" rel="noopener noreferrer">
            📃 Source 
            </a> 
            <button onClick={()=> setShow(!show)}>See Ingredients</button> 
            {show && <RecipeDetails ingredients={ingredients} />}
        </div>
    );
};

export default Recipe;