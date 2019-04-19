/*
============================================
; Title: donner-discussion-1.1.js
; Author: Adam Donner
; Date: 19 April 2019
; Description:
;===========================================
*/

/*
 Expected output:

 Adam Donner
 Exercise 1.3
 <Today's Date>

 Thirty + Forty = 70

*/

// start program

const header = require('../donner-header.js');
console.log(header.display("Adam", "Donner", "Exercise 1.3"));
console.log("") // Line break

function Addition(first, second)
{
  this.firstNumber = first;
  this.secondNumber = second;
}
Addition.prototype.add = function ()
{
   return this.firstNumber + this.secondNumber;
}

var myCalculator = new Addition (30, 40);

console.log("Thirty + Forty = " + myCalculator.add())
