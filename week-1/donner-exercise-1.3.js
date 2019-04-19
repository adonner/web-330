
/*
============================================
; Title: donner-exercise-1.3.js
; Author: Adam Donner
; Date: 18 April 2019
; Description:
;===========================================
*/

/*
 Expected output:

 Adam Donner
 Exercise 1.3
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: Apple
 Model: iPhone XS Max
 Color: Gold
 Price: 1,249.00


*/

// start program

const header = require('../donner-header.js');
console.log(header.display("Adam", "Donner", "Exercise 1.3"));
console.log("") // Line break

function CellPhone(manufacturer, model, color, price)
{
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.price = price;

  this.getPrice = function ()
  {
    return this.price;
  }

  this.getModel = function ()
  {
    return this.model;
  }

  this.getDetails = function ()
  {
    return "Manufacturer: " + this.manufacturer + "\nModel:" + this.getModel() + "\nColor: " + this.color +
    "\nPrice: " + this.getPrice();

  }

}

var cellPhone = new CellPhone("Apple", "iPhone XS Max", "Gold", "1,249.00");

// output
console.log(cellPhone.getDetails())

// end program
