import React, { useState } from 'react';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {
  const [colors, setColors] = useState([]);

  const boxCont = {
    width: '90vw',
    height: '200px',
    display: 'flex',
    flexWrap: 'wrap',
  };

  return (
    <>
      <BoxForm colors={colors} setColors={setColors} />
      <div style={boxCont}>
        {colors.map((c, i) => (
          <BoxDisplay key={i} color={c} />
        ))}
      </div>
    </>
  );
}

export default App;
