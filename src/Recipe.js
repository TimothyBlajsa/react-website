//import React, {useState} from "react";
import RecipeDetails from "../src/RecipeDetails"
import style from './recipe.module.css';
//import * as React from 'react';

const Recipe = ({title,calories,image,ingredients,healthLabels,Nutrients,url}) =>{
	//const [show, setShow] = useState(false)
	return(
		<div className={style.recipe}>
			
			<h1>Title</h1>
			<RecipeDetails></RecipeDetails>
					
			
		</div>
	);

}
export default Recipe;



