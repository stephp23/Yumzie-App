import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; 
import Recipe from './components/Recipe';
import Categories from './components/Categories';
import Alert from './components/Alert';
import { useParams } from 'react-router-dom';


function App() {

  let { search = "" } = useParams();

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const url = `https://api.edamam.com/search?q=${query}&to=100&app_id=${process.env.REACT_APP_EDAMAM_ID}&app_key=${process.env.REACT_APP_EDAMAM_KEY}`;
  

  /* 
    useEffect 
    - componentDidMount
    - componentDidUpdate
    - componentWillUnmount
  */
/* By importing categories into App.js, consider the logic behind 
not showing 'categories' component while there are recipe results */

  //export this function from a separate service file
  const getData = async () => {
    if(query !== "") {
      const result = await Axios.get(url);
      if(!result.data.count) {
        return setAlert("🤷🏾‍♂️Sorry, that a'int yumzie.")
      }
      setRecipes(result.data.hits)
      console.log(result);
      setAlert("");
      setQuery("");
    } else {
      setAlert("C'mon, tell us what you are hangry for.")
    }
    
  };

  useEffect(() => {
    if (search && !query) {
      setQuery(search);
    }
    if (recipes.length === 0 && query && !alert) {
      getData();
    }
  }, []);

  const onChange = (e) => {
    setQuery(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App">
      <h1>Yumzie App</h1>
      <form className="search-form" onSubmit={onSubmit}>
        {alert!== "" && <Alert alert={alert} />}
        <input 
        type="text" 
        placeholder="What are you hangry for?" autoComplete="off" 
        onChange={onChange}
        value={query}  
        />
        <input type="submit" value="search" />
      </form>
      <Categories />
      <div className="recipes">
        {recipes !== [] && recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />
        )}
      </div>
    </div>
  );
}

export default App;