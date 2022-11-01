const BoxDisplay = (props) => {
  const { color } = props;

  const boxStyle = {
    height: '100px',
    width: '100px',
    margin: '10px',
    backgroundColor: color,
  };

  return <p style={boxStyle}></p>;
};

export default BoxDisplay;
