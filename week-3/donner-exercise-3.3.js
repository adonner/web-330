/*
============================================
; Title: donner-exercise-3.3.js
; Author: Adam Donner
; Date: 4 May 2019
; Description: Demonstrates the singleton pattern
;===========================================
*/

/*
 Expected output:
 Adam Donner
 Exercise 3.3
 <Today's Date>

 Same database instance? true
*/

// start program

const header = require('../donner-header.js');
console.log(header.display("Adam", "Donner", "Exercise 3.3"));
console.log("") // Line break

// This creates a singleton class.
var DatabaseSingleton = (function() {
  var instance;
  function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

// This creates a test function using the singleton class to check values.
function databaseSingletonTest()
{
  var oracle = DatabaseSingleton.getInstance();
  var postgres = DatabaseSingleton.getInstance();

  console.log("Same database instance? %s ", oracle === postgres);
}

//  This calls the function.
databaseSingletonTest();

// end program
