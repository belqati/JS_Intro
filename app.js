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

// add getFullName and greetings to constructor prototype-->dunder __proto__
Person.prototype.getFullName = function(){
  return `${this.first} ${this.last}`;
}

Person.prototype.greetings = function(){
  return `Greetings ${this.first} ${this.last}!`;
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

// customer constructor
function Customer(first, last, dob, phone, membership){
  // inherit properties from the Person() constructor via call() (but not its prototype)
  // Person.call(this, first, last, dob);--refactored using apply() and arguments keyword (array of args)
  Person.apply(this, arguments);

  this.phone = phone;
  this.membership = membership;
}

// inherit Person.prototype to Customer constructor
Customer.prototype = Object.create(Person.prototype);
// now make Customer.prototype return Customer()
// WHY?
Customer.prototype.constructor = Customer;

// create customer
const customer01 = new Customer('Tom', 'Howey', 'july 4 2000', '813-456-1234', 'Standard');
console.log(customer01);

// example of overwriting an inherited method
Customer.prototype.greetings = function(){
  return `Howdy ${this.first} ${this.last}, welcome to the Company!`;
}

console.log(customer01.greetings());
console.clear();

// using Object.create() as an alternative to prototypes and inheritance
const personProto = {
  greeting: function(){
    return `Howdy ${this.first} ${this.last}!`;
  },
  newLastName: function(newLastName){
    this.last = newLastName;
  }
}

const martha = Object.create(personProto);
martha.first = 'Martha';
martha.last = 'Stewart';
martha.age = 45;
martha.newLastName('Jala');

console.log(martha);
console.log(martha.greeting());

// alternative syntax to martha example
const jules = Object.create(personProto, {
  first: {value: 'Jules'},
  last: {value: 'Vern'},
  age: {value: 100}
});

console.log(jules);
console.log(jules.greeting());
console.clear();

// ES6 classes = syntactic sugar, convenience syntax, does not change underlying JS
class Human {
  constructor(first, last, dob){
    this.first = first;
    this.last = last;
    this.birthday = new Date(dob);
  }
  greeting(){
    return `Howdy Ho ${this.first} ${this.last}!`;
  }
  calculateAge(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  newLastName(newLastName){
    this.last = newLastName;
  }
  // static method--unhelpful example
  static addNum(x,y){
    return x+y;
  }
}

const jay = new Human('Jay', 'Glade', '11-13-1979');
console.log(jay);
console.log(jay.greeting());
console.log(jay.calculateAge());

jay.newLastName('Williams');
console.log(jay);

// static methods are used within classes, and "aren't called on instances of the class. Instead, they're called on the class itself. These are often utility functions, such as functions to create or clone objects." (MDN)
console.log(Human.addNum(1,2));
// proves that class returns a prototype constructor
console.log(Human === Human.prototype.constructor);
// proves that class also returns associated prototype methods
console.log(Object.getOwnPropertyNames(Human.prototype));
console.clear();

// illustration of inheritance via sub-class Cat
class Dog {
  constructor(name, breed, temper){
    this.name = name;
    this.breed = breed;
    this.temper = temper;
  }
  // method
  type(){
    return `${this.name} is a ${this.temper} ${this.breed}.`;
  }
}

const spotty = new Dog('Spotty', 'Dalmatian', 'hyper');
console.log(spotty);
console.log(spotty.type());

// Cat sub-class
class Cat extends Dog {
  constructor(name, breed, temper, color, favFood){
    super(name, breed, temper);

    this.color = color;
    this.favFood = favFood;
  }

  hobby(){
    return `${this.name}, the ${this.color} ${this.temper} ${this.breed}, loves eating ${this.favFood}.`;
  }

  static getPetCost(cost){
    return `$${cost}`;
  }
}

const whiskers = new Cat('Whiskers', 'Tabby', 'grumpy', 'orange', 'dogs');
console.log(whiskers);
// illustrate sub-class inherits methods from parent class
console.log(whiskers.type());
// illustrate method added to sub-class
console.log(whiskers.hobby());
// illustrate practical use of static method
console.log(`Whiskers cost ${Cat.getPetCost(50)}, and is worth every cent!`)
console.clear();

// XHR OBJECT ILLUSTRATIONS
// listen for XHR Get TXT button (.txt)
document.querySelector('#xhrBtn').addEventListener('click', loadDataTxt);

// function to pass in text file asynchronously
function loadDataTxt(){
  // instantiate XHR object
  const xhr = new XMLHttpRequest();

  // get data.txt
  // boolean turns on async
  xhr.open('GET', 'public/data/data.txt', true);
  // console.log('READYSTATE', xhr.readyState);

  // Optional: onprogress method checks for a readyState of 3, which allows us to do something while something is being loaded (such as display a spinner/loader)
  xhr.onprogress = function(){
    // console.log('READYSTATE', xhr.readyState);
  }

  // onload method waits for successful access of data (i.e., a status of 200, and a readyState value of 4), and then fires our specified function to do something with that data
    // readyState Values (onload simplifies the older onreadystatechange method)
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished, response is ready
  xhr.onload = function(){
    // HTTP Statuses:
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"
    // console.log('READYSTATE', xhr.readyState);

    // check XHR object status property to make sure status is OK
    if(this.status === 200){
      // responseText method for grabbing text in xhr object from the GET request
      // console.log(this.responseText);
      document.querySelector('#xhrOutput').innerHTML = `${this.responseText}`;

      // setTimeout to demonstrate that the text file can be called again and again asynchronously
      setTimeout(function(){
        document.querySelector('#xhrOutput').firstChild.remove();
      }, 2000);
    }
  }

  // error handling if request fails
  xhr.onerror = function(){
    console.log('Oops, request has failed!')
  }

  // send data and associated function back to browser
  xhr.send();
}

// listen for single customer button (.json)
document.querySelector('#xhrCstmr').addEventListener('click', loadDataJsonCstmr);

function loadDataJsonCstmr(){
  // instantiate xhr
  const xhr = new XMLHttpRequest();

  // GET JSON data asynchronously
  xhr.open('Get', 'public/data/customer.json', true);

  // do something with JSON data stored in xhr object
  xhr.onload = function(){
    if(this.status === 200){
      // console.log(this.responseText);

      // parse JSON to access values
      const customer = JSON.parse(this.responseText);

      // output template
      const output = `
        <ul>
          <li>CUSTOMER: ${customer.name}
            <ul>
              <li>ID: ${customer.id}</li>
              <li>Company: ${customer.company}</li>
              <li>Phone: ${customer.phone}</li>
            </ul>
          </li>
        </ul>
      `;

      // send template to browser
      document.querySelector('#xhrOutputCstmr').innerHTML = output;

      // remove template to do it again!
      setTimeout(function(){
        const ul = document.querySelector('#xhrOutputCstmr');

        while(ul.firstChild){
          ul.firstChild.remove();
        }
      }, 2000);
    }
  }

  // request error
  xhr.onerror = function(){
    console.log('Failed Request!');
  }

  // send all to browser
  xhr.send();
}

// listen for array of customers button (.json)
document.querySelector('#xhrCstmrs').addEventListener('click', loadDataJsonCstmrs);

function loadDataJsonCstmrs(){
  // instantiate xhr
  const xhr = new XMLHttpRequest();

  // GET JSON data asynchronously
  xhr.open('Get', 'public/data/customers.json', true);

  // do something with JSON data stored in xhr object
  xhr.onload = function(){
    if(this.status === 200){
      // console.log(this.responseText);

      // parse JSON to access values
      const customers = JSON.parse(this.responseText);

      let output = '';

      // output template for each customer
      customers.forEach(function(customer){
        // append via += or will replace
        output += `
          <ul>
            <li>CUSTOMER: ${customer.name}
              <ul>
                <li>ID: ${customer.id}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
              </ul>
            </li>
          </ul>
        `;
      });

      // send template to browser
      document.querySelector('#xhrOutputCstmrs').innerHTML = output;

      // remove template to do it again!
      setTimeout(function(){
        const ul = document.querySelector('#xhrOutputCstmrs');

        while(ul.firstChild){
          ul.firstChild.remove();
        }
      }, 2000);
    }
  }

  // request error
  xhr.onerror = function(){
    console.log('Failed Request!');
  }

  // send all to browser
  xhr.send();
}

// CHUCK NORRIS JOKE GENERATOR
// grab button for submit
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
  // grab number of jokes value
  const num = document.querySelector('#number').value;
  const cnjokes = document.querySelector('.CNJokes');
  // instantiate XHR object
  const xhr = new XMLHttpRequest();
  // get api data async
  xhr.open('GET', `http://api.icndb.com/jokes/random/${num}`, true);

  // error handling if number value is empty
  if(num === ''){
    cnjokes.innerHTML = '<p style="background:#DC3545;padding-left:5px;margin-right:40px;border-radius:3px;">Please choose the number of jokes with which to afflict yourself.</p>';
    // timeout error message
    setTimeout(function(){
      cnjokes.firstChild.remove();
    }, 2000);

  // convert JSON response to html
  } else {
    xhr.onload = function(){
      if(this.status === 200){
        // parse JSON as object
        const response = JSON.parse(this.responseText);

        let output = '';

        // type is api specific
        if(response.type === 'success'){
          // loop through each joke in array
          response.value.forEach(function(joke){
            // append via += or will overwrite
            output += `<li>${joke.joke}</li>`;
          });

        // error handling
        } else {
          output += '<li>Oops, request failed!</li>'
        }
        cnjokes.innerHTML = output;
      }
    }
  }
  // send to browser
  xhr.send();

  e.preventDefault();
}

// CALLBACK FUNCTIONS: ILLUSTRATION OF HOW THEY WORK UNDER-THE-HOOD
const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'},
];

// as written only returns first two entries, not new entry, for the 'server' adds new post after the GET request fires
// function createPost(post){
//   // mimic server-response time-slow
//   setTimeout(function(){
//     posts.push(post);
//   }, 2000);
// }

// function getPosts(){
//   // mimic server-response time-fast
//   setTimeout(function(){
//     let output = '';
//     posts.forEach(function(post){
//       output += console.log(`${post.title}`);
//     });
//     return output;
//   }, 1000)
// }

// createPost({title: 'Post Three', body: 'This is post three'});

// getPosts();

// adding the callback argument allows us to pass in the getPosts function within our createPost, making POST and GET requests async
// the getPost callback will therefore not fire until the new post is added to the 'server' 
// function createPost(post, callback){
//   // mimic server-response time
//   setTimeout(function(){
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// function getPosts(){
//   setTimeout(function(){
//     let output = '';
//     posts.forEach(function(post){
//       output += console.log(`${post.title}`);
//     });
//     return output;
//   }, 1000)
// }

// createPost({title: 'Post Three', body: 'This is post three'}, getPosts);

// Promise() and .then() as a callback alternative
function createPost(post){
  // instantiate Promise()
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      posts.push(post);

      // mimic error with boolean
      const error = false;

      if(!error){
        // resolve this function first for .then() below
        resolve();
      } else {
        // reject() covers error handling
        reject('Error: some oopsies happened!')
      }
    }, 2000);
  });
}

function getPosts(){
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += console.log(`${post.title}`);
    });
    return output;
  }, 1000)
}

// createPost({title: 'Post Three', body: 'This is post three'})
// // createPost first via promised resolve(), then() getPosts
// .then(getPosts)
// // catch() a promise error for handling
// .catch(function(err){
//   console.log(err);
// });

// ILLUSTRATING THE FETCH API
// Fetch from local .txt
document.querySelector('#fetch1').addEventListener('click', getText);

const fetchOutput = document.querySelector('#fetchOutput');

function getText(){
  // fetch('public/data/data.txt')
    // .then(function(res){
    //   // use .text() property since source is txt
    //   return res.text();
    //   // returns a promise, so another .then() is needed to handle the returned data
    // })
    // .then(function(data){
    //   fetchOutput.innerHTML = data;

    //   // remove from UI, do it again!
    //   setTimeout(function(){
    //     fetchOutput.firstChild.remove();
    //   }, 2000);
    // })
    // .catch(function(err){
    //   fetchOutput.innerHTML = err;
    // });

  // refactor with arrow functions
  fetch('public/data/data.txt')
    .then(res => res.text())
    .then(data => 
      fetchOutput.innerHTML = data,
      setTimeout(() => fetchOutput.firstChild.remove(), 2000))
    .catch(err => fetchOutput.innerHTML = err);
}

// Fetch from local .json
document.querySelector('#fetch2').addEventListener('click', getJSON);

function getJSON(){
  // fetch('public/data/customers.json')
    // .then(function(res){
    //   // use .json() property since source is json
    //   return res.json();
    //   // returns a promise, so another .then() is needed to handle the returned data
    // })
    // .then(function(data){
    //   let output = '';
    //   data.forEach(function(el){
    //     output += `<li>${el.name}</li>`
    //   });
    //   fetchOutput.innerHTML = output;

    //   // remove from UI, do it again!
    //   setTimeout(function(){
    //     while(fetchOutput.firstChild){
    //       fetchOutput.firstChild.remove();
    //     }
    //   }, 2000);
    // })
    // .catch(function(err){
    //   fetchOutput.innerHTML = err;
    // });

  // refactor with arrow functions
  fetch('public/data/customers.json')
    .then(res => res.json())
    .then(data => {
      let output = '';
      data.forEach(el => output += `<li>${el.name}</li>`);
      fetchOutput.innerHTML = output;
      setTimeout(() => {
        while(fetchOutput.firstChild){
          fetchOutput.firstChild.remove();
        }
      }, 2000);
    })
    .catch(err => fetchOutput.innerHTML = err);
}

// Fetch from external API
document.querySelector('#fetch3').addEventListener('click', getExternal);

function getExternal(){
  // fetch('https://api.github.com/users')
  //   .then(function(res){
  //     // use .json() property since source is json
  //     return res.json();
  //     // returns a promise, so another .then() is needed to handle the returned data
  //   })
  //   .then(function(data){
  //     // console.log(data);
  //     let output = '';
  //     data.forEach(function(el){
  //       output += `<li>${el.login}</li>`
  //     });
  //     fetchOutput.innerHTML = output;

  //     // remove from UI, do it again!
  //     setTimeout(function(){
  //       while(fetchOutput.firstChild){
  //         fetchOutput.firstChild.remove();
  //       }
  //     }, 2000);
  //   })
  //   .catch(function(err){
  //     fetchOutput.innerHTML = err;
  //   });

  // refactor with arrow functions
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      let output = '';
      data.forEach(el => output += `<li>${el.login}</li>`);
      fetchOutput.innerHTML = output;
      setTimeout(() => {
        while(fetchOutput.firstChild){
          fetchOutput.firstChild.remove();
        }
      }, 2000);
    })
    .catch(err => fetchOutput.innerHTML = err);
}

// FAT ARROW FUNCTIONS
// // typical function
// const sayHello = function(){
//   console.log('Hello');
// }

// // as an arrow function
// const sayHello = () => {
//   console.log('Hello');
// }

// // one-liner does not need braces
// const sayHello = () => console.log('Hello');

// sayHello();

// // return is implicit = {return 'Hello'}
// const sayHello = () => 'Hello';

// // object literal needs parentheses, or undefined
// // const sayHello = () => ({msg: 'Hello'});

// console.log(sayHello());

// // single parameter no parentheses needed
// const sayHello = name => console.log(`Hello ${name}!`);

// // multi-parameter needs parentheses
// const sayHello = (first, last) => console.log(`Hello ${first} ${last}!`);

// sayHello('George', 'Kin');

// ARROW FUNCTIONS AS CALLBACKS
// users = ['Nathan', 'Joan', 'Kristen'];

// // // map() with callback
// // let nameLengths = users.map(function(name){
// //   return name.length;
// // });

// // // ditto, shorter
// // let nameLengths = users.map(name => {
// //   return name.length;
// // });

// ditto, shortest with implicit return
// let nameLengths = users.map(name => name.length);

// console.log(nameLengths);


// ASYNC ... AWAIT
// async alone returns a promise
async function myFunc(){

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Howdy'), 2000);
  });

  // error handling simulation
  const error = true;

  if(!error){
    // wait until promise is resolved
    const res = await promise;
    return res;
  } else {
    await Promise.reject(new Error('Oopsies!'));
  }
}

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// async returns a promise
async function getUsers(){
  // await response from fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // proceed once promise is resolved
  const data = await response.json();

  // proceed once second promise is resolved
  return data;
}

// getUsers().then(users => console.log(users));

// ERROR HANDLING WITH TRY/CATCH
// throw core errors: reference, type, syntax, uri
try {
  // produce a ReferenceError
  failedFunction();
} catch(e){
  // log full error (name:message)
  console.log(e);
  // log error name
  console.log(e.name);
  // log error message
  console.log(e.message);
  // test whether error is a specific variety; provides a boolean
  console.log(e instanceof ReferenceError);
  console.log(e instanceof TypeError);
} finally {
  console.log('Finally runs regardless of result...')
}

try {
  // produce a TypeError
  null.failedFunction();
} catch(e){
  console.log(`${e.name}: It's null, dummy!`)
}

try {
  // produce SyntaxError via eval() --> evaluates javascript within a string
  console.log(eval('2+2')) // 4
  console.log(eval('Hello World')) // throws an error
} catch(e){
  console.log(e);
}

try {
  // produce URIError
  decodeURIComponent('%');
} catch(e){
  console.log(e);
}

// create our own error
let someUser = {email: 'jdoe@gmail.com'};

try {
  if(!someUser.name){
    // // throw an error message
    // throw 'someUser has no name!'
    // throw a specific type of error with message
    throw new SyntaxError('someUser has no name!')
  }
} catch(e) {
  // create an error variety
  console.log(`UserError: ${e.message}`);
}
console.clear();

// REGULAR EXPRESSIONS
// initialize a RegExp literal
let re;
re = /he/;
re = /he/i; // i flag = case insensitive
re = /he/g; // g flag = global search, find all occurrences, not just the first

console.log(re); // logs entire literal
console.log(re.source); // logs string

// exec() returns an array ['searchString', index: #, input: 'searchedString'], otherwise null
let result = re.exec('yo, Hello world, hello!');
console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// test() returns boolean
re = /hello/i;
result = re.test('Hello');
console.log(result);

// match() returns array like exec(), otherwise null
// difference is in placement of RegExp and string, results are the same
let str = 'Yo, Hello There';
result = str.match(re);
console.log(result);

// search() returns index of first match, otherwise -1
result = str.search(re);
console.log(result);

// replace() returns new string
let newStr = str.replace(re, 'Hi');
console.log(newStr);

console.clear();

// regExp metacharacters and use in functions
// literal characters
re = /yo/i;

// metacharacters
re = /^h/i; // must start with
re = /ld!$/i; // must end with
re = /^yo$/ig; // must begin and end with--does not behave the way Brad suggests...
re = /h.llo/i; // period matches any ONE character
re = /h*llo/i; // matches any character 0 or more
re = /gre?a?y/i; // matches optional chars or none
re = /gre?a?y\?/i; // escape metachars to make them literal

// brackets [] - char sets
re = /gr[ae]y/i; // must be a or e
re = /[GF]ray/; // must be G or F
re = /[^GF]ray/i; // match anything but G or F
re = /[A-Z]ray/; // match any uppercase letter
re = /[a-z]ray/; // match any lowercase letter
re = /[A-Za-z]ray/; // match any letter
re = /[0-9]ray/; // match any digit

// braces {} - quantifiers
re = /hel{2}o/i; // must occur {n} times
re = /hel{2,4}o/i; // must occur {n to n} range
re = /hel{2,}o/i; // must occur at least {n} times

// parenthesis () - grouping
re = /([0-9]z){3}/;

// shorthand char classes
re = /\w/; // match word character-alphanumeric or _
re = /\w+/; // + matches one or more
re = /\W/; // match non-word character
re = /\d/; // match any digit
re = /\d+/; // match any digit one or more times
re = /\D/; // match any non-digit
re = /\s/; // match whitespace char
re = /\S/; // match non-whitespace char
re = /hi\b/i; // mark word boundary, strict match

// assertions
re = /x(?=y)/; // match x only if followed by y
re = /x(?!y)/; // match x only if not followed by y

// string to match
str = 'xy';

//log results
result = re.exec(str);
console.log(result)

// function for testing if re has a match in str
function reTest(re, str){
  if(re.test(str)){
    console.log(`"${str}" has a match for "${re.source}"`);
  } else {
    console.log(`"${str}" does NOT have a match for "${re.source}"`);
  }
}
reTest(re, str);

console.clear();

// FORM VALIDATION EXAMPLE
// form blur event listeners
document.querySelector('#name').addEventListener('blur', validateName);
document.querySelector('#zip').addEventListener('blur', validateZip);
document.querySelector('#email').addEventListener('blur', validateEmail);
document.querySelector('#phone').addEventListener('blur', validatePhone);

// validation functions
function validateName(){
  const name = document.querySelector('#name');
  const re = /^[a-zA-Z\s\.]{2,10}$/;

  if(!re.test(name.value)){
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validateZip(){
  const zip = document.querySelector('#zip');
  const re = /^[0-9]{5}([- ]?[0-9]{4})?$/;

  if(!re.test(zip.value)){
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}

function validateEmail(){
  const email = document.querySelector('#email');
  // const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  const re = /^([\w.-]+)@([\w.-]+)\.(\w\D{2,5})$/;

  if(!re.test(email.value)){
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone(){
  const phone = document.querySelector('#phone');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if(!re.test(phone.value)){
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}

// ITERATOR EXAMPLE
function nameIterator(names){
  let nextIndex = 0;

  return {
    next: function(){
      return nextIndex < names.length ?
      {value: names[nextIndex++], index: nextIndex, done: false} :
      {done: true}
    }
  }
}

// array of names to pass to iterator
let namesArr = ['Bowy', 'Moonbeam', 'Starra'];
// init iterator and pass in array
let names = nameIterator(namesArr);
// log iterator in action
console.log(names.next())
console.log(names.next().value)
console.log(names.next())
console.log(names.next())

// GENERATOR EXAMPLE
function* sayNames(){
  yield 'Bowy';
  yield 'Moonbeam';
  yield 'Starra'
}
names = sayNames();
console.log(names.next());
console.log(names.next().value);
console.log(names.next());
console.log(names.next());

console.clear();

// PROFILESCROLLER EXAMPLE
// data normally from API or backend, here for illustration only
let profileData = [
  {
    name: 'Joe Schmoe',
    age: 25,
    employer: 'Wallmart',
    position: 'Systems Analyst',
    location: 'Chicago, IL',
    image: 'https://randomuser.me/api/portraits/men/56.jpg'
  },
  {
    name: 'Jannette Impartial',
    age: 32,
    employer: 'WBEZ',
    position: 'Voice Specialist',
    location: 'Wheaton, IL',
    image: 'https://randomuser.me/api/portraits/women/56.jpg'
  },
  {
    name: 'Flora Petrie',
    age: 45,
    employer: 'Cairo Museum',
    position: 'Curator',
    location: 'Cairo, Egypt',
    image: 'https://randomuser.me/api/portraits/women/99.jpg'
  }
];

// init iterator
let profiles = profileIterator(profileData);

// next event
document.querySelector('#next').addEventListener('click', nextProfile);

// call first profile on page load
nextProfile();

// display nextProfile
function nextProfile(){
  // track iteration sequence
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined){
    // display currentProfile image
    document.querySelector('#imageDisplay').innerHTML = `
      <img src="${currentProfile.image}">
    `;

    // display currentProfile data
    document.querySelector('#profileDisplay').innerHTML = `
      <ul class="list-group" style="color: black">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Employer: ${currentProfile.employer}</li>
        <li class="list-group-item">Background: I am a ${currentProfile.position} who works in ${currentProfile.location}.</li>
      </ul>
    `;
  } else {
    // end of profileData array, reload page
    window.location.reload();
  }

}

// profile iterator
function profileIterator(profiles){
  let nextIndex = 0;

  return {
    next: function(){
      return nextIndex < profiles.length ?
      {value: profiles[nextIndex++], done: false} :
      {done: true}
    }
  }
}

// SYMBOLS
// create a symbol; each is unique
const sym1 = Symbol();
const sym2 = Symbol();

console.log(Symbol() === Symbol());
console.log(sym1 === sym1);
console.log(sym1 === sym2);

// unique object keys
const KEY1 = Symbol('key1');
const KEY2 = Symbol('key2');
let myObj = {};

myObj[KEY1] = 'property1';
myObj[KEY2] = 'property2';
myObj.key3 = 'property3';
myObj.key4 = 'property4';

console.log(myObj[KEY2])

// not enumberable in for...in
for(let i in myObj){
  console.log(`${i}: ${myObj[i]}`);
}

// ignored by JSON.stringify
console.log(JSON.stringify(myObj))

console.clear();

// DESTRUCTURING
a, b;
[a, b] = [1, 2];
console.log(a, b);

// with the spread operator
({ a, b, ...rest} = { a:1, b:2, c:3, d:4, e:5 });
console.log(rest);
console.log(rest.d);

// array destructuring
let pets = ['Spot', 'Ash', 'Jumper'];
// let [pet1, pet2, pet3] = pets;
// console.log(pet1, pet2, pet3);

// parse an array returned from a function
function getPets(){
  return pets;
}
let pet1, pet2, pet3;
[pet1, pet2, pet3] = getPets();

console.log(pet1, pet2, pet3);

// object destructuring
let person = {
  name: 'Jane Doe',
  ages: 55,
  loc: 'Tucson',
  sayHello: function(){
    console.log("Howdy Pardner!");
  }
}

// // old way of accessing obj info
// let name = person.name,
//     ages = person.ages,
//     loc = person.loc,
//     sayHello = person.sayHello;
// console.log(name, ages, loc);
// sayHello();

// destructure method
let { name, ages, loc, sayHello } = person;
console.log(name, ages, loc);
sayHello();

console.clear();

// MAPS
// specific example of object as key
let john = {name: "John"};
// for every user, let's store his visits count
let visitsCountMap = new Map();
// john is the key for the map
visitsCountMap.set(john, 123);
console.log(visitsCountMap); // {key: {name: "John"}, value: 123}
console.log(visitsCountMap.get(john)); // 123
console.log(john);

// old way:
// we add the id field
john = { name: "John", id: 1 };
let visitsCounts = {};
// now store the value by id
visitsCounts[john.id] = 123;
console.log( visitsCounts[john.id] ); // 123

// generic examples with string, object, and function as keys
let map1 = new Map();
let keyString = 'stringKey',
    keyObject = {OBJkey: 'someKey'},
    keyFunction = function key(){};

// set map values by key
map1.set(keyString, 'keyString value');
map1.set(keyObject, 'keyObject value');
map1.set(keyFunction, 'keyFunction value');

// get map values by key
console.log(map1.get(keyString), map1.get(keyObject), map1.get(keyFunction));

// count values
console.log(map1.size);

// iterating through maps
// loop to obtain key:value
for(let [key, value] of map1) {
  console.log(`${key} : ${value}`);
}

// the someMap.keys() method returns an iterable object (MapIterator) of a map's keys; similarly someMap.values()
console.log(map1.keys());
console.log(map1.values());

// loop to obtain keys or values only
for(let key of map1.keys()) {
  console.log(key);
}
for(let value of map1.values()) {
  console.log(value);
}

// loop via forEach; not the order of arguments and the necessity for both...
map1.forEach(function(value, key) {
  console.log(`${key} : ${value}`);
});
map1.forEach(function(value, key) {
  // w/o value arg, key prints value :-)
  console.log(key);
});

// convert to an array
// array of key:value
let keyValArr = Array.from(map1);
console.log(keyValArr);
// array of keys
let keyArr = Array.from(map1.keys());
console.log(keyArr);
// array of values
let valArr = Array.from(map1.values());
console.log(valArr);

console.clear();

// SETS
let set1 = new Set();
// add values
set1.add(100);
set1.add('setString');
set1.add({name: 'Jill'});
set1.add(true);
set1.add('setString');
console.log(set1);

let setArr1 = [300, 500, 300, 500, 700];
let set2 = new Set(setArr1);
console.log(set2);

// get count
console.log(set1.size, set2.size);

// check for values--returns a boolean
console.log(set1.has('setString'));
console.log(set2.has(300+400)) // true
// obj check fails, for obj is not a primitive datatype
console.log(set1.has({name: 'Jill'}));

// delete from set
set2.delete(300);
console.log(set2);

// iterate sets
for(let item of set1){
  console.log(item);
}

set1.forEach((value) => {
  console.log(value);
});

// convert to array
let setArr2 = Array.from(set1);
console.log(setArr2);

console.clear();

// JS PATTERNS
// STANDARD MODULE PATTERN
let SomeModule = (function(){
  // declare private vars and functions
  let someVar = 'A private variable!'
  let changeVar = function(){
    let someOtherVar = 'Another private variable!';
    someVar = someOtherVar;
  }
  return {
  // declare public vars and functions
    callChangeVar: function(){
      changeVar();
      console.log(someVar);
    }
  }
})();

SomeModule.callChangeVar(); // Another private variable!
// someModule.changeVar(); // TypeError (function does not exist)
console.log(SomeModule.someVar); // undefined (var does not exist)

// REVEALING MODULE PATTERN
let ItemCtrl = (function(){
  // private var for data manipulation
  let data = [];
  // private function for adding to data
  function add(item){
    data.push(item);
    console.log('Item added.');
  }
  // private function for getting data via id
  function get(id){
    return data.find(item => {
      return item.id === id;
    });
  }

  // public methods for adding and getting
  return {
    add: add,
    get: get
  }
})();

ItemCtrl.add({id: 1, name: 'Jane'}); // Item added.
ItemCtrl.add({id: 2, name: 'Joanne'}); // Item added.
console.log(ItemCtrl.get(2)); // {id: 2, name: 'Joanne'}
console.log(ItemCtrl.get(1)); // {id: 1, name: 'Jane'}

// SINGLETON PATTERN
let Singleton = (function(){
  let instance;

  function createInstance(){
    let object = new Object({user: 'someUser'});
    return object;
  }

  return {
    getInstance: function(){
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();
// produces only a single instance; repeated invocations return the same
let instanceA = Singleton.getInstance();
let instanceB = Singleton.getInstance();
console.log(instanceA);
console.log(instanceB);
console.log(instanceA === instanceB);

