"use strict";
// interface PostId = stringOrNumber;
// Literal types - can only be assigned to a specific values
let myName;
// myName = 'John'; // Error
let userName;
userName = 'John';
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (msg) => {
    console.log(msg);
};
logMsg('Hello');
logMsg(add(1, 2));
// logMsg(add('1', 1)); // Error
let subtract = function (a, b) {
    return a - b;
};
let multiply = (a, b) => a * b;
let multiplyInt = (a, b) => a * b;
// Optional parameters
const addAll = (a, b, c) => {
    return a + b + (c || 0);
};
// Default parameters
const sumAll = (a, b, c = 0) => {
    return a + b + c;
};
// Rest parameters
const total = (...nums) => {
    return nums.reduce((a, b) => a + b);
};
console.log(total(1, 2, 3, 4, 5));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
