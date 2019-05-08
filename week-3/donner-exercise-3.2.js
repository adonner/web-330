/*
============================================
; Title: donner-exercise-3.2.js
; Author: Adam Donner
; Date: 4 May 2019
; Description: Demonstrates the use of a factory pattern.
;===========================================
*/



/*
 Expected output:
 Adam Donner
 Exercise 3.2
 <Today's Date>
 Oracle {
    username: 'admin',
    password: 'admin',
    server: 'localhost:3001',
    version: '3.1'
 }
 Informix {
    username: 'admin',
    password: 'password',
    server: 'localhose:1002'
 }
*/

const header = require('../donner-header.js');
console.log(header.display("Adam", "Donner", "Exercise 3.2"));
console.log("") // Line break

// start program

//  This creates a function class including defaulted values.
function Postgres(properties) {
  this.username = properties.username || "godmode";
  this.password = properties.password || "p@55w0rd";
  this.server = properties.server || "localhost:2000";
}

// This creates a prototype function to format and return the results.
Postgres.prototype.output = function (){
  return `Postgres {\n   username: ${this.username}\n   password: ${this.password}\n   server: ${this.server}\n}\n`;
}

//  This creates a function class including defaulted values.
function MySql(properties) {
  this.username = properties.username || "administrator";
  this.password = properties.password || "MyPassword";
  this.server = properties.server || "2";
  this.version = properties.version || 1.1;
}

// This creates a prototype function to format and return the results.
MySql.prototype.output = function (){
  return `MySql {\n   username: ${this.username}\n   password: ${this.password}\n   server: ${this.server}\n   version: ${this.version}\n}\n`;
}

//  This creates a function class including defaulted values.
function Oracle(properties) {
  this.username = properties.username || "adam";
  this.password = properties.password || "spy";
  this.server = properties.server || "localhost:5454";
  this.version = properties.version || "54";
}

// This creates a prototype function to format and return the results.
Oracle.prototype.output = function (){
  return `Oracle {\n   username: ${this.username}\n   password: ${this.password}\n   server: ${this.server}\n   version: ${this.version}\n}\n`;
}

//  This creates a function class including defaulted values.
function Informix(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "DontTell";
  this.server = properties.server || "localhost:9432";
}

// This creates a prototype function to format and return the results.
Informix.prototype.output = function (){
  return `Informix {\n  username: ${this.username}\n   password: ${this.password}\n   server: ${this.server}\n}\n`;
}

// This creates a creates a factory function.
function DatabaseFactory() {}

// This creates a factory method to check database type.
DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
  if (properties.databaseType === "Postgres") {
    this.databaseClass = Postgres;
  }
  if (properties.databaseType === "MySql") {
    this.databaseClass = MySql;
  }
  if (properties.databaseType === "Oracle") {
    this.databaseClass = Oracle;
  }
  if (properties.databaseType === "MySql") {
  this.databaseClass = MySql;
}
if (properties.databaseType === "Informix") {
this.databaseClass = Informix;
}
  return new this.databaseClass(properties);
};

//  This creates factory database objects and assigns values.
var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
  databaseType: "Postgres",
  username: "godmode",
  password: "SuperSecret"
});

//  This creates factory database objects and assigns values.
var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
  databaseType: "MySQL",
  username: "default",
  password: "password"
});

//  This creates factory database objects and assigns values.
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "admin",
  password: "admin",
  server: "localhost:3001",
  version: "3.1"
});

//  This creates factory database objects and assigns values.
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "admin",
  password: "password",
  server: "localhost:1002"
});

// output the results.
console.log(oracle.output());
console.log(informix.output());

// end program
