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

console.clear();

// WINDOW METHODS / OBJECTS / PROPERTIES

// alert, prompt, and confirm no longer used, best to use Bootstrap alerts, etc.
// alert: note that alert() and window.alert() are the same, etc.
// alert('hello world!');
// window.alert('hi again');

// prompt: get info from user via pop-up window
// let input = prompt();
// console.log(input);

// confirm: confirm whether an action is desired or not via pop-up window
// if(confirm('Are you sure?')){
//   console.log('user confirms action');
// } else {
//   console.log('user declines action');
// }

// get size and position elements for interaction with user, such as animations at scroll points etc.
// outer height and width of browser window
val = window.outerHeight;
val = window.outerWidth;

// inner height and width: scrollbars and console etc. not included
val = window.innerHeight;
val = window.innerWidth;

// scroll points: location of scroll
val = window.scrollY; // vertical
val = window.scrollX; // horizontal

// LOCATION OBJECT
val = window.location;
val = window.location.hostname; // domain name of server
val = window.location.href; // entire url; can be used to redirect
val = window.location.search; // extracts search params from url

// HISTORY OBJECT: browser history
val = window.history.length; // number of sites in history for page
// val = window.history.go(-1) // go back once

// NAVIGATOR OBJECT: relates to the browser itself, e.g., Chrome, Firefox, etc.; named after old Netscape Navigator
val = window.navigator;
val = window.navigator.appVersion; // browser type and version
val = window.navigator.userAgent; // ditto
val = window.navigator.platform; // identify OS
val = window.navigator.vendor; // company of browser; e.g., Google Inc.
val = window.navigator.language; // identify human language of browser

// SCOPE: why var is a bad idea
var a = 1;
let b = 2;
const c = 3;

// block level scope such as function or loop should not change global variables, but that is exactly what happens with var!
for(var a = 0; a < 5; a++){
  console.log(`looping ${a}`);
}

console.log('Global Scope:', a, b, c); // Global var a is now 5
console.clear();

// DOM MANIPULATION AND EVENTS
val = document; // = window.document object
val = document.all; // html collection for entire document: array-like formatting, but we cannot use array methods
val = document.all[12]; // access via index position
val = document.all.length; // number of elements in the DOM
val = document.body; // access some specific elements directly; not best method, better to use query selectors
val = document.domain; // server host
val = document.URL; // full url address; note all caps
val = document.characterSet; // font encoding of document
val = document.contentType; // text/html
val = document.links[0]; // access specific link
val = document.scripts; // collection of all scripts, access specific via index
val = document.scripts[1].getAttribute('src'); // access attribute for specific script tag

let scripts = document.scripts; // collection, not an array
let scriptsArr = Array.from(scripts); // convert collection to array

scriptsArr.forEach(function(script){
  console.log(script.getAttribute('src'));
});

let links = document.links; // collection, not an array
let linksArr = Array.from(links); // convert collection to array

console.log(linksArr);
console.clear();

// single selectors
// document.getElementById()
const testID = document.getElementById('testID');

// get element
console.log(testID) // entire element

// get things from the selected element
console.log(testID.id) // id name
console.log(testID.className) // class name

// change styling
testID.style.background = '#7D71B3';
testID.style.color = '#100055';
testID.style.padding = '5px';
testID.style.borderRadius = '5px';
// testID.style.display = 'none'; // hides element

// change content
testID.textContent = 'Selecting DOM Elements';
testID.innerText = 'Varieties of DOM Selectors';
// change content and style: for inserting Ajax requests etc.
testID.innerHTML = '<span style="background:#FFE7D8; padding:3px; border-radius:5px;">Selecting the DOM</span>';

console.clear();

// document.querySelector() more powerful, not limited to id, only grabs one if more than one element
console.log(document.querySelector('#testID'));
console.log(document.querySelector('.testClass'));
console.log(document.querySelector('.line-numbers'))


document.querySelector('h4').style.background = '#7D71B3';
document.querySelector('h4').style.padding = '5px';
document.querySelector('h4').style.borderRadius = '5px';
document.querySelector('h4').innerHTML = '<span style="background:#FFC096; padding:3px; border-radius:5px;"><code class="language-javascript">document.querySelector()</code></span>';
document.querySelector('#qSelId li:nth-child(3)').style.background = '#7D71B3';
document.querySelector('#qSelId li:nth-child(3)').style.borderRadius = '5px';

console.clear();

// multiple selectors: returns html collection or node list
// document.getElementsByClassName()
let codeLang = document.getElementsByClassName('language-javascript');

// console.log(codeLang); // html collection
console.log(codeLang.length); // length of said collection
console.log(codeLang[98]); // specific item in collection
codeLang[99].style.color = 'blue'; // style collection item

// convert html collection to array
codeLang = Array.from(codeLang);
codeLang.reverse(); // array only method, will not work with collection
codeLang.forEach(function(item){
  console.log(item.className);
});
console.log(codeLang);

console.clear();

// document.getElementsByTagName()
let lis = document.getElementsByTagName('li');

lis = Array.from(lis); // convert to array
// loop through each element
// FYI: looping through the DOM and changing styles etc. can cause significant performance hits (e.g., forced reflow, otherwise known as layout thrashing)
lis.forEach(function(li){
  li.style.color = 'white';
})
console.log(lis);

// document.querySelectorAll()
lis = document.querySelectorAll('li code.language-javascript');
// no conversion to array necessary
lis.forEach(function(li){
  li.style.color = 'purple';
});

let liEven = document.querySelectorAll('li:nth-child(even)');
liEven.forEach(function(li){
  li.style.background = '#9690AF';
  li.style.padding = '5px';
  li.style.borderRadius = '5px';
  li.style.margin = '3px 0 3px 0';
});

let liOdd = document.querySelectorAll('li:nth-child(odd)');
liOdd.forEach(function(li){
  li.style.background = '#7D71B3';
  li.style.padding = '5px';
  li.style.borderRadius = '5px';
  li.style.margin = '3px 0 3px 0';
});

console.log(lis);
console.clear();

// TRAVERSING THE DOM
let ul = document.querySelector('ul');
let li = document.querySelector('li');

val = ul.childNodes; // node list
val = ul.childNodes[0]; // returns 'text' = line break between li
val = ul.childNodes[1]; // returns first li
val = ul.childNodes[1].nodeName; // LI
val = ul.childNodes[0].nodeName; // #text
val = ul.childNodes[3].nodeType; // 1

// nodeType returns a number according to the following rubric
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node (line break)
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get Children element nodes
val = ul.children; // html collection--more useful
val = ul.children[2];
// ul.children[2].textContent = 'hello';

// children of children
val = ul.children[2].children;
val = ul.children[2].children[0].className;
ul.children[2].children[0].id = 'testing';
val = ul.children[2].children;

// first and last child
val = ul.firstChild; // first #text from node list
val = ul.lastChild; // last #text from node list

val = ul.firstElementChild; // first li from collection
val = ul.lastElementChild; // last li from collection

// count child elements
val = ul.childElementCount; // 5

// Get parent node
val = li.parentNode; // whole ul
val = li.parentElement; // whole ul
val = li.parentElement.parentElement; // entire body

// Get next sibling and previous sibling
val = li.nextSibling; // #text: following line break
val = li.nextElementSibling; // second li
val = li.nextElementSibling.nextElementSibling; // third li
val = li.nextElementSibling.nextElementSibling.previousElementSibling; // back to second li

val = li.previousSibling; // #text: opening line break

// ELEMENT CREATION AND ADDING IT TO THE DOM
// create element
let newLi = document.createElement('li');
// add class
newLi.className = 'newClass';
// add id
newLi.id = 'someNewID';
// add attribute
newLi.setAttribute('title', 'New List Item');
// create text node and append
newLi.appendChild(document.createTextNode('New item via JS: note the lack of JS added styling'));
// create link element, and attribute and icon
let link = document.createElement('a');
link.setAttribute('href', '#');
link.innerHTML = '<i class= "fas fa-times float-right"></i>';
// append link to newli
newLi.appendChild(link);
// append newli to specified ul
document.querySelector('ul#createEl').appendChild(newLi);


// REPLACE ELEMENT
// create element
let newLi2 = document.createElement('li');
// append new text node
newLi2.appendChild(document.createTextNode('Another new item via JS: note lack of JS added styling'));
// get li to replace
let oldLi = document.getElementById('createEl').firstElementChild;
// get parent
let oldLiParent = document.getElementById('createEl');
// replace
oldLiParent.replaceChild(newLi2, oldLi);

// REMOVE ELEMENT
// remove list item
lis = document.querySelectorAll('li'); // to locate one to remove
// lis[18].remove(); // does not remove it from original html file, just from the DOM; not the same as display-hide styling

// remove child element
ul = document.querySelector('ul');
// ul.removeChild(lis[0]); // ditto

// ADD/REMOVE CLASSES AND ATTRIBUTES
// classes
newLi2.className = 'newClass anotherNewClass';
val = newLi2;
val = newLi2.classList; // DOM token list
val = newLi2.classList[1]; // anotherNewClass
newLi2.classList.add('yetAnother'); // add 'yetAnother' to classes
newLi2.classList.remove('newClass'); // remove 'newClass' from classes

// attributes
let newLink = newLi2.appendChild(document.createElement('a'));
newLink.appendChild(document.createTextNode(': search Google'));
newLink.setAttribute('href', 'https://www.google.com/');
newLink.setAttribute('target', 'blank');
newLink.setAttribute('title', 'anotherTitle');
val = newLink.hasAttribute('title');
newLink.removeAttribute('title');
val = newLink.hasAttribute('title');

// console.log(newLink);
// console.log(val);

// EVENT LISTENERS
// takes two arguments, the event and a callback function
// the callback function takes the event object as its argument, providing access to its properties and methods
let event1 = document.querySelector('#event1');
let event2 = document.querySelector('#event2');

event1.addEventListener('click', onClick)
event2.addEventListener('click', onClick)

event1.addEventListener('mouseover', onMouseover)
event2.addEventListener('mouseover', onMouseover)

// e is short for event object
function onClick(e){
  // console.log('Hello World!');
  // the following method overrides the default behavior of forms, links, etc.
  e.preventDefault();

  val = e; // most important element of event object is .target, which refers to the DOM element the event object is immediately connected to (e.g., a clicked button, etc.)
  // e.target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;
  e.target.innerText = 'Did Something!'

  // event type
  val = e.type;

  // timestamp
  val = e.timeStamp;
  console.log(e.timeStamp);

  // coords of event relative to window
  val = e.clientY;
  val = e.clientX;

  // coords of event relative to selected element
  val = e.offsetY;
  val = e.offsetX;

  // console.log(val);
}

function onMouseover(e){
  e.target.textContent = 'Click Me!';
}

// MOUSE EVENTS
const eventContainer = document.querySelector('#eventContainer');
const eventTitle = document.querySelector('#eventTitle');
const event3 = document.querySelector('#event3');

// click
event3.addEventListener('click', runEvent);
// double-click
event3.addEventListener('dblclick', runEvent);
// mousedown: e.g., holding down a button with mouse
event3.addEventListener('mousedown', runEvent);
// mouseup: opposite behavior
event3.addEventListener('mouseup', runEvent);
// mouseenter: refers to whole element
eventContainer.addEventListener('mouseenter', runEvent);
// mouseleave: refers to whole element
eventContainer.addEventListener('mouseleave', runEvent);
// mouseover: fired by children of element (e.g., whatever is inside the container, such as a title and buttons)
eventContainer.addEventListener('mouseover', runEvent);
// mouseout: fired by children of element
eventContainer.addEventListener('mouseout', runEvent);
// mousemove: any movement at all--great for games or other apps with lots of interaction
eventContainer.addEventListener('mousemove', trackMouseMove);

function trackMouseMove(e){
  eventTitle.textContent = `MouseX: ${e.offsetX} and MouseY: ${e.offsetY}`;
  eventContainer.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 100)`
}

// Event Handlers
function runEvent(e){
  // console.log(`EVENT TYPE: ${e.type}`);
  e.preventDefault();
};

document.querySelector('form').style.margin = '10px 0 10px 0';

// KEYBOARD AND INPUT EVENTS
const formEvent = document.querySelector('.formEvent');
const keyboardEvent = document.getElementById('keyboardEvent');
const selectEvent = document.querySelector('#selectEvent');

// clear input value
keyboardEvent.value = '';

// form event on submit
// formEvent.addEventListener('submit', runEvent2);

// // input event: keydown
// keyboardEvent.addEventListener('keydown', runEvent2);
// // keyup
// keyboardEvent.addEventListener('keyup', runEvent2);
// keypress: generic keypress event
// keyboardEvent.addEventListener('keypress', runEvent2);

// Focus
keyboardEvent.addEventListener('focus', runEvent2);
// Blur: loss of focus
keyboardEvent.addEventListener('blur', runEvent2);
// cut copy paste
keyboardEvent.addEventListener('cut', runEvent2);
keyboardEvent.addEventListener('copy', runEvent2);
keyboardEvent.addEventListener('paste', runEvent2);

// change event
selectEvent.addEventListener('change', runEvent2);

// Event Handler
function runEvent2(e){
  console.log(`EVENT TYPE: ${e.type}`);

  // get input value from input keystrokes
  console.log(e.target.value);

  // assign input value to heading
  // eventTitle.innerText = e.target.value;

  // get input value from form submit
  // console.log(keyboardEvent.value);
  // e.preventDefault();
};

// EVENT BUBBLING AND DELEGATION
// Bubbling illustration: clicking only on the select dropdown fires its click event, then its form, then its forms container div
eventContainer.addEventListener('click', function(){console.log('eventContainer');});
formEvent.addEventListener('click', function(){console.log('formEvent');});
selectEvent.addEventListener('click', function(){console.log('selectEvent');});

// Delegation illustration
// add event listener to some parent element, use logic to identify child for event handler
document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  // will not work for elements added after DOM loads (e.g., via JS)
  // will not work if more than one class present
  // if(e.target.className === 'deleteMe'){
  //   console.log('deleteMe!');
  // }

  // will not work for elements added after DOM loads (e.g., via JS)
  // works with multiple classes
  // if(e.target.classList.contains('deleteMe')){
  //   console.log('deleteMe!');
  // }

  // will work for elements added after DOM loads
  if(e.target.parentElement.classList.contains('deleteMe')){
    // console.log('deleted!');
    e.target.remove();
  }
}

// LOCAL AND SESSION STORAGE
// add item
// sessionStorage.setItem('name', 'Beth');
// localStorage.setItem('name', 'Jane');
// localStorage.setItem('age', '39');
localStorage.setItem('ethnicity', 'Native American');

// get item
let locName = localStorage.getItem('name');
let locAge = localStorage.getItem('age');
let locEthnicity = localStorage.getItem('ethnicity');

// remove item
localStorage.removeItem('ethnicity');

// clear all
// localStorage.clear();

// console.log(locName, locAge, localStorage.getItem('ethnicity'));

// TASK LIST ILLUSTRATION
// listen at task list form
document.querySelector('#taskForm').addEventListener('submit', addTask);

function addTask(e){
  // variable to grab input data
  const taskNew = document.getElementById('taskNew').value;
  // declare variable for array of input data
  let tasks;
  // if empty, create array, else get/parse array
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  // add new input data to gotten array
  tasks.push(taskNew);
  // set updated array to local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));
  // console.log(taskNew)
  // override form submit default behavior
  e.preventDefault();
}
// get/parse array from local storage
let taskList = JSON.parse(localStorage.getItem('tasks'));
// loop through array if it exists (otherwise error)
if(taskList !== null){
  taskList.forEach(function(task){
    console.log(task);
  });
  // clear local storage as clean-up
  localStorage.clear();
}

// Person Constructor: more complex than examples in the JS notes from Colt/Elie
function Person(first, last, dob){
  this.first = first;
  this.last = last;
  // date-of-birth takes flexible string format
  this.birthday = new Date(dob);
  // common method for calculating age based on dob
  // this.calculateAge = function(){
  //   // Date.now() and Date.getTime() return milliseconds since Jan 1, 1970 (epoch time)
  //   // the difference = age of person in milliseconds
  //   const diff = Date.now() - this.birthday.getTime();
  //   // returns diff converted to date relative to epoch time
  //   const ageDate = new Date(diff);
  //   // UTC = Universal Time Constructor
  //   // convert ageDate to year, subtract epoch time year, make sure result is not negative
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// calculateAge moved to Person constructor prototype, links to every new Person() dunder __proto__
Person.prototype.calculateAge = function(){
    // Date.now() and Date.getTime() return milliseconds since Jan 1, 1970 (epoch time)
  // the difference = age of person in milliseconds
  const diff = Date.now() - this.birthday.getTime();
  // returns diff converted to date relative to epoch time
  const ageDate = new Date(diff);
  // UTC = Universal Time Constructor
  // convert ageDate to year, subtract epoch time year, make sure result is not negative
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// add getFullName to constructor prototype-->dunder __proto__
Person.prototype.getFullName = function(){
  return `${this.first} ${this.last}`;
}

// add newLastName to prototype to illustrate data manipulation
Person.prototype.newLastName = function(newLastName){
  this.last = newLastName;
}

const jan = new Person('Jan', 'Joosten', '3-9-74');
const mary = new Person('Mary', 'Koko', 'Jan 20 1963')
console.log(mary);
// run calculateAge() method for new Person()
console.log(mary.calculateAge());
console.log(mary.getFullName());

mary.newLastName('Jones');
console.log(mary.getFullName());

// hasOwnProperty() method returns boolean
console.log(mary.hasOwnProperty('first')); // true
console.log(mary.hasOwnProperty('getFullName')); // false

console.clear();