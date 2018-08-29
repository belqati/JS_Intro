// getting to know the console

console.log('Hello World!');
console.log(123);
console.log(true);
let greeting = 'Hi there!';
console.log(greeting);
console.log([1,2,3]);
console.log({a:1,b:2});
console.table({a:1,b:2});
console.error('an error');
console.warn('a warning');

// record time when app starts
console.time('timing')
  // console.log('howdy')
  // console.log('howdy')
  // console.log('howdy')
  // console.log('howdy')
  // console.log('howdy')
  // console.log('howdy')
  // console.log('howdy')
console.timeEnd('timing') // output total time from .time start to .timeEnd

console.clear(); // clears the console

// var, let, const
let val;

// to string
val = String(5);
val = String(4+4);
val = String(true);
val = String(new Date());
val = String([1,2,3]);
val = (5).toString();

// to number
val = Number('5');
val = Number(false);
val = Number(null);
val = Number('string'); // NaN
val = Number([1,2,3]); // NaN, so anything not a number

val = parseInt('100');
val = parseFloat('100.1')

// to boolean
val = Boolean("") // false

// modulus operator provides the remainder
val = 100 % 50; // 0
val = 100 % 45; // 10

// Math object
val = Math.round(5.6); // 6; round
val = Math.ceil(5.2); // 6; force round up
val = Math.floor(5.8); // 5; force round down
val = Math.sqrt(81); // 9
val = Math.abs(-81); // 81
val = Math.pow(9, 2); // 81
val = Math.min(23,24,56,2,5); // 2
val = Math.max(23,24,56,2,5); // 56
val = Math.random(); // random decimal
val = Math.floor(Math.random() * 10 + 1); // random integer 0-10

// STRINGS
// concatenation
const firstName = 'Janeel';
const lastName = 'Doe';
val = firstName + ' ' + lastName; // 'Janeel Doe'

// append
val = firstName;
val += ' ';
val += lastName; // 'Janeel Doe'

// concat()
val = firstName.concat(' ', lastName); // 'Janeel Doe'

// change case
val = firstName.toUpperCase(); // 'JANEEL'
val = lastName.toLowerCase(); // 'doe'

// accessing string portions
val = firstName[2]; // 'n'; treats it as an array
val = firstName.charAt(2); // 'n'
val = firstName.indexOf('e'); // 3; first occurrence
val = firstName.lastIndexOf('e'); // 4; last occurrence
val = firstName.substring(0, 4); // 'Jane'
val = firstName.slice(-3); // 'eel'; from end of string; .slice() commonly used with arrays

const tags = 'MongoDB,NodeJS,Angular,Express';
val = tags.split(','); // [MongoDB", "NodeJS", "Angular", "Express"]
val = tags.replace('Angular', 'React'); // 'MongoDB,NodeJS,React,Express'
val = tags.includes('NodeJS'); // true

// output
// console.log(val);
// console.log(typeof val);
// console.log(val.length); // string method: number of chars
// console.log(val.toFixed(2)); // number method: decimal places

// template literals (ES6)
const age = 39;
const job = 'Fullstack Developer';
const city = 'Chicago';

function message(){
  return 'Hi there!'
}

let html;

html = `
<ul>
  <li>Name: ${firstName} ${lastName}</li>
  <li>Age: ${age}</li>
  <li>Job: ${job}</li>
  <li>City: ${city}</li>
  <li>Message Function: ${message()}</li>
  <li>Math Operation: ${20 % 3}</li>
  <li>Ternary Operation: ${age >= 21 ? 'Of Age' : 'Underage'}</li>
</ul>
`;
// document.body.innerHTML = html; // replaces html with this

// ARRAYS
const numArr = new Array(33,44,55,66);
const numArr2 = [1,2,3];
const numArr3 = [100,5,72,10];

val = numArr.length; // 4
val = Array.isArray(numArr); // true
val = numArr[2]; // 55
val = numArr.indexOf(33); // 0

// replaces index 2 with new number
numArr[2] = 77; // [33, 44, 77, 66]

// MUTATING ARRAYS
numArr.push(120); // [33, 44, 77, 66, 120]
numArr.unshift(88); // [88, 33, 44, 77, 66, 120]
numArr.pop(); // [88, 33, 44, 77, 66]
numArr.shift(); // [33, 44, 77, 66]

val = numArr.concat(numArr2); // [33, 44, 77, 66, 1, 2, 3]; does not change original arrays
val = numArr3.sort(); // [10, 100, 5, 72]; changes original array; alphabetizes well, but sorts numbers based on first number of integers (e.g., 1.. 5 7. 1.)

// to sort numbers properly use the 'compare function'
//https://stackoverflow.com/questions/6567941/how-does-sort-function-work-in-javascript-along-with-compare-function/6568100
val = numArr3.sort(function(x, y){
  return x - y; // [5, 10, 72, 100]
  // return y - x; // [100, 72, 10, 5]
});

// find
function over50(num){
  return num > 50;
}
val = numArr3.find(over50); // 72

// console.log(val);
// console.log(numArr3);

// Date object; see MDN for full docs
const today = new Date(); // current date and time object
let birthday = new Date('2-8-1902 8:3:33'); // create date object
birthday = new Date('march 9 1974 23:30:45') // etc.

val = today;
val = birthday;

// access Date object values
val = today.getMonth(); // 0 based: return 7 for Aug, etc.
val = today.getDay(); // 0 based: return 2 for Tues, etc.
val = today.getDate(); // not 0 based: return day of month
val = today.getFullYear(); // 2018
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); // milliseconds since 1970 00:00:00

// set Date object values
birthday.setMonth(1); // Feb
birthday.setDate(12); // set day of month
birthday.setFullYear(1956);
birthday.setHours(16); // 4pm and so forth for minutes, etc.

// console.log(birthday);
// console.log(val);

// test variable whether undefined or non-existent
// let id = 'someID';

if(typeof id !== 'undefined'){
  console.log(`The ID is ${id}.`)
} else {
  // console.log(`ID does not exist or is undefined.`)
}

// constructor function
function Person(name, age){
  this.name = name;
  this.age = age;
}

// create new objects
let tony = new Person('Tony', 9);
let monica = new Person('Monica', 18);
let giovani = new Person('Giovani', 35);

// populate array with new objects
let people = [tony, monica, giovani];

// loop through array with logical operators
people.forEach(function(name){
  if(name.age > 0 && name.age <= 12){
    console.log(`${name.name} is ${name.age} years old, and is legally a child.`);
  } else if(name.age >= 13 && name.age <= 19){
    console.log(`${name.name} is ${name.age} years old, and is considered a teenager by Western standards.`);
  } else {
    console.log(`${name.name} is ${name.age} years old, and is a legal adult.`)
  }
});

// ternary operation
people.forEach(function(name){
  name.age >= 18 ? console.log(`${name.name} is qualified to vote.`) : console.log(`${name.name} is too young to vote in the US`);

  name.age >= 21 ? console.log(`${name.name} is qualified to drink.`) : console.log(`${name.name} is too young to drink in the US`);
});

// braces not necessary, but good to use them anyway
if(giovani.age <= 64)
  console.log(`${giovani.name} is probably not retired.`);
else
  console.log(`${giovani.name} may be retired.`)

// SWITCHES: use in place of multiple else if statements
let day;

switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;

  default:
    day = 'strangely unknown.'
    break;
}

console.log(`Today is ${day}`);

// function declarations
// handle unspecified arguments in ES5, or returns 'undefined'
function greet(first, last){
  if(typeof first === 'undefined'){first = 'John'};
  if(typeof last === 'undefined'){last = 'Doe'};
  return `Howdy ${first} ${last}!`
}
console.log(greet('Donkey', 'Kong'));

// ES6 makes this easier
function greetings(first = 'John', last = 'Doe'){
  return `Greetings ${first} ${last}!`
}
console.log(greetings()); // 'Greetings John Doe!'

// function expressions
let square = function(x = 0){
  return x*x;
}
console.log(square());

// immediately invoked function expressions (IIFE, 'iffy')
// many ways to pattern it, a few examples follow
(function(first, last){
  console.log(`Hi there ${first} ${last}, I'm an IIFE!`)
}('Mario', 'Bro'));

(function(first, last){
  console.log(`Hi there ${first} ${last}, I'm an IIFE!`)
})('Mariana', 'Sis');

!function(first, last){
  console.log(`Hi there ${first} ${last}, I'm an IIFE!`)
}('Turtle', 'Man');

// PROPERTY METHODS: any function within an object
// assigned within an object
let todo = {
  add: function(){
    console.log('Add todo …')
  },
  edit: function(id){
    console.log(`Edit todo ${id} …`)
  }
};

// assigned outside the object
todo.delete = function(id){
  console.log(`todo ${id} deleted`)
};

todo.add();
todo.edit(56);
todo.delete(10);

console.clear();

// FOR LOOP
for(let i = 1; i <= 7; i++){
  if(i === 3){
    console.log(`${i} is my favorite number!`);
    continue; // skips the rest of this iteration, and continues immediately to the next iteration
  };
  if(i === 5){
    console.log(`${i} breaks the loop.`)
    break; // stops all iterations immediately
  }
  console.log(i);
}

// WHILE LOOP
let i = 1;
while(i <= 5){
  console.log(i);
  i++;
}

// DO WHILE LOOP
// always fires at least once, even if condition is outside of given parameters
i = 100;
do {
  console.log(`Number ${i}`);
  i++;
}
while(i <= 5);

// loop through an array
let cars = ['Tesla', 'BMW', 'Mercedes', 'Ferrari', 'Bugatti'];

for(let i = 0; i < cars.length; i++){
  console.log(cars[i]);
}

// better to use .forEach() method
// takes three arguments: iterator, index, and whole array
cars.forEach(function(car, index, array){
  console.log(`${index} : ${car}`);
  console.log(array);
});

// FOR IN LOOP: good for looping through the key:value pairs of an object
let user = {
  first: 'Jack',
  last: 'Sparrow',
  age: 56
}

for(let x in user){
  console.log(`${x} : ${user[x]}`)
}

// .map() method returns something other than what it was used with, in this case it returns a simple array from an array of objects
let users = [
  {id: 243, name: 'Starstruck'},
  {id: 476, name: 'Moonbeam'},
  {id: 807, name: 'Meteorshower'},
  {id: 346, name: 'Sunbeam'}
];

let userID = users.map(function(user){
  return user.id;
});
console.log(userID);

users.forEach(function(id){
  console.log(id.name)
});

