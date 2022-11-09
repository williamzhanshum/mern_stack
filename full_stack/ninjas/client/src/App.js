import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ninjas, setNinjas] = useState([]);
  const [name, setName] = useState('');
  const [belts, setBelts] = useState(0);
  const [isGrad, setIsGrad] = useState(false);

  // Takes 2 parameters
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/ninjas')
      .then((someDataResponse) => {
        console.log(someDataResponse.data);
        setNinjas(someDataResponse.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const makeNinja = (e) => {
    e.preventDefault();
    // console.log(name, belts, isGrad);
    // The Db is expecting an obj, so we will set it up the same way we did in the model (schema). We have to match the keys with the local var.
    const newNinja = {
      name,
      numberOfBelts: belts,
      isGraduating: isGrad,
    };

    axios
      .post('http://localhost:8000/api/ninjas', newNinja)
      .then((newObjCreated) => console.log(newObjCreated))
      .catch((err) => console.log(err));
  };

  return (
    <div className='App'>
      <h1>NINJAS</h1>

      <form onSubmit={makeNinja}>
        name: <input onChange={(e) => setName(e.target.value)} value={name} />
        <br />
        belts:{' '}
        <input
          onChange={(e) => setBelts(e.target.value)}
          type='number'
          value={belts}
        />
        <br />
        Graduating?:{' '}
        <input
          type='checkbox'
          onChange={(e) => setIsGrad(e.target.checked)}
          checked={isGrad}
        />
        <br />
        <button>Create</button>
        <hr />
      </form>

      <div>
        {/* {JSON.stringify(ninjas)} */}
        {ninjas.map((ninja) => {
          return (
            <div key={ninja._id}>
              name: {ninja.name} <br />
              numberOfBelts: {ninja.numberOfBelts} <br />
              isGraduating: {ninja.isGraduating ? 'Yes' : 'No'} <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
