import React, { useState } from 'react';
import axios from 'axios';
import OnePokemon from './OnePokemon';

const Pokemon = (props) => {
  const [allPokemon, setAllPokemon] = useState([]);

  const fetchPokemon = (e) => {
    e.preventDefault();
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=1')
      .then((res) => {
        setAllPokemon(res.data.results);
        // console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button onClick={fetchPokemon}>Fetch Pokèmon</button>
      {allPokemon.map((oneSinglePokemon, indexInArray) => (
        <OnePokemon key={indexInArray} pokemon={oneSinglePokemon} />
      ))}
    </>
  );
};

export default Pokemon;
