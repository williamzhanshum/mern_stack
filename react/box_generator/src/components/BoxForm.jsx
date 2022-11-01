import { useState } from 'react';

const BoxForm = (props) => {
  const [color, setColor] = useState('');
  const { colors, setColors } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newColors = [...colors];
    newColors.push(color);
    setColors(newColors);
    setColor('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Color:</label>
        <input
          type='text'
          onChange={(e) => setColor(e.target.value)}
          value={color}
        ></input>
        <button type='submit'>Add</button>
      </form>
    </>
  );
};

export default BoxForm;
