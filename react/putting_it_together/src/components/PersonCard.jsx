import React, { Component } from 'react';

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: parseInt(this.props.age),
    };
  }

  bdayCount = (e) => {
    this.setState({ age: this.state.age + 1 });
  };

  render() {
    const { firstName, lastName, hairColor } = this.props;
    const { age } = this.state;
    return (
      <>
        <h1>
          {lastName}, {firstName}
        </h1>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={this.bdayCount}>
          Birthday Button for {firstName}
          {lastName}
        </button>
      </>
    );
  }
}

export default PersonCard;
