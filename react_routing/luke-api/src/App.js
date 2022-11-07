import './App.css';
import { Routes, Route } from 'react-route-dom';
import StarWars from './components/StarWars';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/starwars/:category/:id' element={<StarWars />} />
      </Routes>
    </div>
  );
}

export default App;
