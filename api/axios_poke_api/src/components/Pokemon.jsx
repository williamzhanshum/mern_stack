import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
  const [pokemon, setPokemon] = useState([
    {
      name: '',
      url: '',
    },
  ]);

  const fetchPokemon = (e) => {
    e.preventDefault();
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=1154')
      .then((res) => {
        setPokemon(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button onClick={fetchPokemon}>Fetch Pokèmon</button>
      {pokemon.map((p, key) => {
        return <p key={key}>{p.name}</p>;
      })}
    </>
  );
};

export default Pokemon;
