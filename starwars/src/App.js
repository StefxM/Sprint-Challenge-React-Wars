import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import SwCard from './components/swCard';




function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [swCharacters, setswCharacters] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get("https://swapi.co/api/people").then(response => {
        console.log(response.data.results);
        setswCharacters(response.data.results);
    });
  }, []);



  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {swCharacters.map(starwarsChar =>{
        return (
          <SwCard
          name={starwarsChar.name}
          birth_year={starwarsChar.birth_year}
          hair_color={starwarsChar.hair_color}
          gender={starwarsChar.gender}
          />
        )
      })}
    </div>
  );
}

export default App;
