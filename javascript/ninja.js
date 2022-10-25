'use strict';

class Ninja {
  constructor(name, health) {
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
  }

  sayName = () => console.log(`Ninja's name is ${this.name}`);

  showStats = () =>
    console.log(
      `Name: ${this.name}\nHealth: ${this.health}\nSpeed: ${this.speed}\nStrength: ${this.strength}`
    );

  drinkShake = () => (this.health += 10);
}

let will = new Ninja('William', 100);

will.sayName();
will.drinkShake();
will.showStats();
