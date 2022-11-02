import React, { useState } from 'react';

const Pokemon = (props) => {
  const [pokemon, setPokemon] = useState([
    {
      name: '',
      url: '',
    },
  ]);

  const fetchPokemon = (e) => {
    e.preventDefault();
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1154')
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data.results);
        console.log(data);
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
