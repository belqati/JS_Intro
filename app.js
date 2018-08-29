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
let id = 'someID';

if(typeof id !== 'undefined'){
  console.log(`The ID is ${id}.`)
} else {
  console.log(`ID does not exist or is undefined.`)
}

