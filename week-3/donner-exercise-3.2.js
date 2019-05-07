/*
============================================
; Title: donner-exercise-3.2.js
; Author: Adam Donner
; Date: 4 May 2019
; Description:
;===========================================
*/



/*
 Expected output:
 Adam Donner
 Exercise 3.2
 <Today's Date>
 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }
 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }
*/

const header = require('../donner-header.js');
console.log(header.display("Adam", "Donner", "Exercise 3.2"));
console.log("") // Line break

// start program
function Postgres(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}

Postgres.prototype.output = function (){
  return `Postgres {\n   username: ${this.username}\n   password: ${this.password}\n   server: ${this.server}\n}\n`;
}

function MySql(properties) {
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost:8000";
  this.version = properties.version || 5.7;
}

MySql.prototype.output = function (){
  return `MySql {\n   username: ${this.username}\n   password: ${this.password}\n   server: ${this.server}\n   version: ${this.version}\n}\n`;
}

function Oracle(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "o-s3cret";
  this.server = properties.server || "localhost:5454";
  this.version = properties.version || "10g";
}

Oracle.prototype.output = function (){
  return `Oracle {\n   username: ${this.username}\n   password: ${this.password}\n   server: ${this.server}\n   version: ${this.version}\n}\n`;
}

function Informix(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "in-s3cret";
  this.server = properties.server || "localhost:3030";
}

Informix.prototype.output = function (){
  return `Informix {\n  username: ${this.username}\n   password: ${this.password}\n   server: ${this.server}\n}\n`;
}

function DatabaseFactory() {}

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

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
  databaseType: "Postgres",
  username: "admin",
  password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
  databaseType: "MySQL",
  username: "default",
  password: "password"
});

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "admin",
  password: "admin",
  server: "localhost:3001",
  version: "3.1"
});

var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "admin",
  password: "password",
  server: "localhost:1002"
});

console.log(oracle.output());
console.log(informix.output());

// end program
