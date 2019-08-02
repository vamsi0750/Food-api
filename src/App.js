import React,{useEffect,useState} from 'react';
import Recipe from './Recipe'; 
import './App.css';

const App = () =>{
  const APP_ID ="6023aae6";
  const APP_KEY="f78e3086252fdcad62277a3e04c4b18f";
  const [recipes,setRecipes] = useState([]);
  const [search ,setSearch] = useState('');
  const [query,setQuery] = useState('chicken');
  
  useEffect(()=>{
    getRecipes();
        

  },[query]);


const getRecipes = async () =>{
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits) ;
  console.log(data.hits); 


};

const updateSearch = e =>{
  setSearch(e.target.value);
  setQuery(search);
};

const getSearch = e =>{
  e.preventDefault();
  setQuery(search)

}









  return (
    <div className="App">
      <form  className="search-form" onSubmit={getSearch}>
        <input type="text"
                className="search-bar"
                value={search}
                onChange={updateSearch}
               />
        <button className="search-button" type="submit">Search
          </button>

        </form>
      <div className="recipe">
          {
            recipes.map(recipe =>(
              <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredientLines={recipe.recipe.ingredientLines}
              
              />
            ))
          }
         </div>
        
    </div>
  );
}

export default App;
