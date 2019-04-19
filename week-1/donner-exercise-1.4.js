/*
============================================
; Title: donner-exercise-1.4.js
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
console.log(header.display("Adam", "Donner", "Exercise 1.3"));
console.log("") // Line break

function Car(model)
{
  this.model = model;
}
Car.prototype.start = function()
{
  console.log("Car added to racetrack!")
}

function Truck(model, year)
{
  this.model = model;
  this.year = year;
}
Truck.prototype.start = function()
{
  console.log("Truck added to racetrack!")
}
function Jeep(model, year, color)
{
  this.model = model;
  this.year = year;
  this.color = color;
}
Jeep.prototype.start = function()
{
  console.log("Jeep added to racetrack!")
}

var racetrack = [];
function driveIt(vehicle)
{
  vehicle.start();

  racetrack.push(vehicle);
}

var celica = new Car("Celica");
var fordF150 = new Truck("F150", "2018")
var wrangler = new Jeep("Wrangler", "2016", "White");

driveIt(celica);
driveIt(fordF150);
driveIt(wrangler);

console.log("\n-- The following vehicles have been added to the racetrack --");
for (var x = 0; x  < racetrack.length; x++)
{
  console.log(racetrack[x].constructor.name + ": " + racetrack[x].model);
}
