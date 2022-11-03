import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Number from './components/Number';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/:input/:textColor/:backColor' element={<Number />} />
      </Routes>
    </div>
  );
}

export default App;
