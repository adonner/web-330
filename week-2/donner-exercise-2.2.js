/*
============================================
; Title: donner-exercise-2.2.js
; Author: Adam Donner
; Date: 30 April 2019
; Description: Demonstrates the use of prototypes and objects
; to return values in a string.
;===========================================
*/



/*
 Expected output:

 Adam Donner
 Exercise 2.2
 <Today's Date>

 The person's full name is: 'Luke Skywalker'
 The person's age is '28'

*/

// start program

const header = require('../donner-header.js');
console.log(header.display("Adam", "Donner", "Exercise 2.2"));
console.log("") // Line break

// This creates an object literal.
var person =
{
 getAge: function ()
 {
   return this.getAge;
 }
};

// This creates a new object which passes in age, and creates a fullname.
var luke = Object.create (person, {
  "age":
  {
    "value": "28"
  },
  "fullname":
  {
    "value": "Luke Skywalker"
  }
});

luke.getAge();

console.log("The person's full name is: '%s'", luke.fullname);
console.log("The person's age is '%s'", luke.age);

// end program
