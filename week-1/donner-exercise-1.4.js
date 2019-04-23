/*
============================================
; Title: donner-exercise-1.4.js
; Author: Adam Donner
; Date: 19 April 2019
; Description:  Demonstrates the use of constructor functions and prototypes.
;===========================================
*/

/*
 Expected output:

 Adam Donner
 Exercise 1.4
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: Celica
 Car: F150
 Jeep: Wrangler

*/

// start program

const header = require('../donner-header.js');
console.log(header.display("Adam", "Donner", "Exercise 1.4"));
console.log("") // Line break

// This creates a constructor function.
function Car(model)
{
  this.model = model;
}

// This creates a start prototype function.
Car.prototype.start = function()
{
  console.log("Car added to racetrack!")
}

// This creates a constructor function.
function Truck(model, year)
{
  this.model = model;
  this.year = year;
}
// This creates a start prototype function.
Truck.prototype.start = function()
{
  console.log("Truck added to racetrack!")
}

//This creates a constructor function.
function Jeep(model, year, color)
{
  this.model = model;
  this.year = year;
  this.color = color;
}

// This creates a start prototype function.
Jeep.prototype.start = function()
{
  console.log("Jeep added to racetrack!")
}


var racetrack = [];


function driveIt(vehicle)
{
  vehicle.start();  // Calls the vehicle.start prototype

  racetrack.push(vehicle); // This pushes the value of vehicle into the racetrack array.
}


var celica = new Car("Celica");  // This creates a new Car object.
var fordF150 = new Truck("F150", "2018")  // This creates a new Truck object.
var wrangler = new Jeep("Wrangler", "2016", "White");  // This creates a new Jeep object.


//  The below calls the driveIT function and passes in objects.
driveIt(celica);
driveIt(fordF150);
driveIt(wrangler);

console.log("\n-- The following vehicles have been added to the racetrack --");

// This outputs the contents of the racetrack array.
for (var x = 0; x  < racetrack.length; x++)
{
  console.log(racetrack[x].constructor.name + ": " + racetrack[x].model);
}
