import React, { useState } from 'react';
import axios from 'axios';
import OnePokemon from './OnePokemon';

const Pokemon = (props) => {
  const [allPokemon, setAllPokemon] = useState([]);

  const fetchPokemon = (e) => {
    e.preventDefault();
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((res) => {
        setAllPokemon(res.data.results);
        // console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=' container mx-auto flex flex-col items-center align-middle'>
      <button
        onClick={fetchPokemon}
        className='w-40 rounded-full text-white bg-metal p-1 my-4'
      >
        Fetch Pokèmon
      </button>
      <div className='container px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {allPokemon.map((oneSinglePokemon, indexInArray) => (
          <OnePokemon key={indexInArray} pokemon={oneSinglePokemon} />
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
