import { useParams } from 'react-router-dom';

const Number = (props) => {
  const { input, textColor, backColor } = useParams();

  return isNaN(input) ? (
    <div style={{ backgroundColor: backColor }}>
      <h1 style={{ color: textColor }}>The word is: {input}</h1>
    </div>
  ) : (
    <div style={{ backgroundColor: backColor }}>
      <h1 style={{ color: textColor }}>The number is: {input}</h1>
    </div>
  );
};

export default Number;
