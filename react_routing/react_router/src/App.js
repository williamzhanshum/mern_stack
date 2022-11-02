import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
// import About from './components/About';
// import Home from './components/Home';
// import Location from './components/Location';
import Survey from './components/Survey';

function App() {
  return (
    <div>
      <Survey />
      {/* 
      LOCATIONS EXAMPLE
      <h1>Locations Example</h1>
      <p>
        <Link to='/location/seattle'>Seattle</Link>|
        <Link to='/location/chicago'>Chicago</Link>|
        <Link to='/location/burbank'>Burbank</Link>
      </p>
      <Routes>
        <Route path='/location/:city' element={<Location />} />
      </Routes> */}

      {/* 
      ROUTING EXAMPLES
      <h1>Routing Example</h1>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
      </Routes> */}
    </div>
  );
}

export default App;
