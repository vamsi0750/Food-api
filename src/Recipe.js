import React from 'react'

export default function Recipe({title,calories,image,ingredientLines}) {
 return (
  <div className="boxx">
    <h1>vamsi Rest</h1>
   <h1>{title}</h1>
   <p><b>calories: </b>{calories}</p>
   <img src={image} alt="img here" />
   <div className="recipe">
      <ul>
        {ingredientLines.map(ingredientLines=>(
        <li>{ingredientLines}</li>

       ))}
       </ul>
     </div> 
   
   
  </div>
 )
}
