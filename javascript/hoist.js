'use strict';

// 1)
console.log(hello);
var hello = 'world';
/* AFTER HOISTING: 
- var hello 
- console.log(hello); - This will log undefined. 
- hello = 'world'
*/

// 2)
var needle = 'haystack';
test();
function test() {
  var needle = 'magnet';
  console.log(needle);
}
/* AFTER HOISTING: 

*/

// 3)
var brendan = 'super cool';
function print() {
  brendan = 'only okay';
  console.log(brendan);
}
console.log(brendan);
/* AFTER HOISTING 
1. var brendan = 'super cool'
2) console.log = 'only okay' 
3) console.log = 'super cool'
*/

// 4)
var food = 'chicken';
console.log(food);
eat();
function eat() {
  food = 'half-chicken';
  console.log(food);
  var food = 'gone';
}
/* AFTER HOISTING 
1) var food = 'chicken' 
2) eat()
3) var good = 'gone'
4) console.log = 'chicken' 
5) console.log = 'half-chicken' 
*/

// 5)
mean();
console.log(food);
var mean = function () {
  food = 'chicken';
  console.log(food);
  var food = 'fish';
  console.log(food);
};
console.log(food);
// Nothing will print with this one.

// 6)
mean();
console.log(food);
var mean = function () {
  food = 'chicken';
  console.log(food);
  var food = 'fish';
  console.log(food);
};
console.log(food);
/* AFTER HOISTING 
- mean function is not defined yet. 
*/

// 7)
dojo = 'san jose';
console.log(dojo);
learn();
function learn() {
  dojo = 'seattle';
  console.log(dojo);
  var dojo = 'burbank';
  console.log(dojo);
}
console.log(dojo);
/* AFTER HOISTING
- dojo will not be printerd because it is not defined. 
- learn() will say it is not a funciton because it is called before it is defined. 
*/
