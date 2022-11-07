import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const StarWars = (props) => {
  const params = useParams();

  useEffect(() => {
    console.log(params);
  }, []);

  return (
    <>
      <h1>Hello I am StarWars</h1>
    </>
  );
};

export default StarWars;
