import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; 
import Recipe from './components/Recipe';
import Categories from './components/Categories';
import Alert from './components/Alert';
import { useParams } from 'react-router-dom';
import getDataFromAPI from './services/getDataFromAPI';


import cooking from './images/cooking.jpg';

function App() {

  let { search = "" } = useParams();

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");


  const getData = async () => {
    if(query !== "") {
      const result = await getDataFromAPI(query);
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
      <h1 className="header-title">Yumzie</h1>
      <form className="search-form" onSubmit={onSubmit}>
        {alert!== "" && <Alert alert={alert} />}
        <input 
        type="text" 
        className="input"
        placeholder="What are you hangry for?" autoComplete="off" 
        onChange={onChange}
        value={query}  
        />
        <input type="submit" value="search" />
      </form>
      <Categories />
      <hr />
      <div className="recipes">
        {recipes !== [] && recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />
        )}
      </div>
    </div>
  );
}

export default App;