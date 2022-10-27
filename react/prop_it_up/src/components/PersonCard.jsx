import React, { Component } from 'react';

const PersonCard = (props) => {
  const { firstName, lastName, hairColor, age } = this.props;
  return (
    <>
      <h1>
        {lastName}, {firstName}
      </h1>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
    </>
  );
};

export default PersonCard;
