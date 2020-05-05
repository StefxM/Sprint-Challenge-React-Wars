import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import SwCard from './components/SwCard';
import SearchForm from './components/SearchForm';




function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [swCharacters, setswCharacters] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get("https://swapi.py4e.com/api/people/").then(response => {
       console.log(response.data.results);
        setswCharacters(response.data.results);
    });
  }, []);

  const [search, setSearch] = React.useState("");
  
  const handleChange = event => {
    setSearch(event.target.value);
  };

  const result = swCharacters.filter(names => {
    return names.name.toLowerCase().includes(search);
  })


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <SearchForm value={search} onChange={handleChange} />

      {result.map((swchar) => {
          return <SwCard //passing props
          name={swchar.name}
          height={swchar.height}
          hair_color={swchar.hair_color}
          gender={swchar.gender}
          mass={swchar.mass}
        //name of props   //props
         />
      })}
    </div>
  );
};

export default App;
