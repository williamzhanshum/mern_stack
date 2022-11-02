import { useParams } from 'react-router';

const Location = (props) => {
  const { city } = useParams(); // matches our :city in our Routes
  return <h1>Welcome to {city}</h1>;
};

export default Location;
