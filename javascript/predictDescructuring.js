/* 
EXAMPLE FROM LEARN PLATFORM: 
const person = {
  firstName: 'Bob',
  lastName: 'Marley',
  email: 'bob@marley.com',
  password: 'sekureP@ssw0rd9',
  username: 'barley',
  addresses: [
    {
      address: '1600 Pennsylvania Avenue',
      city: 'Washington, D.C.',
      zipcode: '20500',
    },
    {
      address: '221B Baker St.',
      city: 'London',
      zipcode: 'WC2N 5DU',
    },
  ],
  createdAt: 1543945177623,
};

const {
  addresses: [whiteHouse, sherlock],
} = person;

console.log(whiteHouse);
console.log(sherlock);

const {
  addresses: [, { city: london }],
} = person;
console.log(london);
*/

// Problem 1:
const cars = ['Tesla', 'Mercedes', 'Honda'];
const [randomCar] = cars;
const [, otherRandomCar] = cars;
//Predict the output
console.log(randomCar); // OUTPUT: 'Tesla'
console.log(otherRandomCar); // OUTPUT: 'Mercedes'

// Problem 2:
/*
const employee = {
  name: 'Elon',
  age: 47,
  company: 'Tesla',
};
const { name: otherName } = employee;
//Predict the output
// console.log(name); 
// OUTPUT: error, name not defined.
console.log(otherName);
// OUTPUT: 'Elon'
*/

// Problem 3:
const person = {
  name: 'Phil Smith',
  age: 47,
  height: '6 feet',
};
const password = '12345';
const { password: hashedPassword } = person;
//Predict the output
console.log(password);
// OUTPUT: '12345'
console.log(hashedPassword);
// OUTPUT: undefined. The object does not have a property names password.

// Problem 4:
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
//Predict the output
console.log(first == second); // OUTPUT: 2 == 5 - false
console.log(first == third); // OUTPUT: 2 == 2 - true

// Problem 5:
const lastTest = {
  key: 'value',
  secondKey: [1, 5, 1, 8, 3, 3],
};
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output
console.log(key); // OUTPUT: 'value'
console.log(secondKey); // OUTPUT: [1,5,1,8,3,3]
console.log(secondKey[0]); // OUTPUT: 1
console.log(willThisWork); // OUTPUT: 5; we are accessing the array inside that object.
