"use strict";
let myName = 'Dave';
let meaningOfLife;
let isLoading;
// let album: string | number;
let album;
myName = 'David';
meaningOfLife = 42;
isLoading = true;
// This is allowed because of the `any` type
album = 'Nafis';
album = 42;
album = true;
// plus can be used for both arithmetic addition and string concatenation
// therefore the types are important
const sum = (a, b) => a + b;
// union types
let postId;
let isActive;
// Regex in TypeScript
let re = /\w+/g;
