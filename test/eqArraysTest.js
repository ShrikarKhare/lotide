const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

assertEqual(eqArrays([1,2,3],[1,2,3]), true); // should return true
assertEqual(eqArrays([1,2,3],[1,"2",3]), true); //should return false
