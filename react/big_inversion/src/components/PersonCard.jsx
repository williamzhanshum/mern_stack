import React, { Component } from 'react';

class PersonCard extends Component {
  render() {
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
  }
}

export default PersonCard;
