import React, { useState } from 'react';
import axios from 'axios';
import OnePokemon from './OnePokemon';

const Pokemon = (props) => {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = (e) => {
    e.preventDefault();
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((res) => {
        setPokemon(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button onClick={fetchPokemon}>Fetch Pokèmon</button>
      {pokemon.map((p, key) => (
        <OnePokemon key={key} pokemon={p} />
      ))}
    </>
  );
};

export default Pokemon;
