import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OnePokemon = (props) => {
  const { pokemon } = props;
  const [thisPokemon, setThisPokemon] = useState({
    sprites: {
      front_default: '',
    },
    types: [],
  });

  useEffect(() => {
    axios
      .get(pokemon.url)
      .then((res) => {
        // console.log(pokemon);
        // console.log(res.data);
        setThisPokemon(res.data);
      })
      .catch((err) => {});
  }, []);

  console.log(`thisPokemon: ${JSON.stringify(thisPokemon)}`);
  return (
    <>
      <img src={thisPokemon.sprites.front_default} alt='' />
      <h3>{pokemon.name}</h3>
      {thisPokemon.types.map((value, index) => (
        <p>{value.type.name}</p>
      ))}
    </>
  );
};

export default OnePokemon;
