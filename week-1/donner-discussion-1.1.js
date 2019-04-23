/*
============================================
; Title: donner-discussion-1.1.js
; Author: Adam Donner
; Date: 19 April 2019
; Description: Simple example of a constructor prototype.
;===========================================
*/

/*
 Expected output:

 Adam Donner
 Discussion 1.1
 <Today's Date>

 30 + 40 = 70

 100 - 30 - 10 = 60
*/

// start program

const header = require('../donner-header.js');
console.log(header.display("Adam", "Donner", "Discussion 1.1"));
console.log("") // Line break

// This creates a constructor function.
function Math (first, second, third)
{
  // This stores the first and second number.
  this.first = first;
  this.second = second;
  this.third = third;
}

Math.prototype.add = function ()
{
    return this.first + " + " + this.second + " = " + (this.first + this.second);
}

Math.prototype.subtract = function ()
{
    return this.first + " - " + this.second + " - " + this.third + " = " + (this.first - this.second - this.third);
}

var myAddition = new Math (30, 40); // This creates a new Math object with values.
var mySubtraction = new Math (100, 30, 10); // This creates a new Math object with values.

console.log(myAddition.add());
console.log("")
console.log(mySubtraction.subtract());

// end program
