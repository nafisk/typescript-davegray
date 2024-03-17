let myName: string = 'Dave';
let meaningOfLife: number;
let isLoading: boolean;
// let album: string | number;
let album: any;

myName = 'David';
meaningOfLife = 42;
isLoading = true;

// This is allowed because of the `any` type
album = 'Nafis';
album = 42;
album = true;

// plus can be used for both arithmetic addition and string concatenation
// therefore the types are important
const sum = (a: number, b: string) => a + b;

// union types
let postId: string | number;
let isActive: number | boolean;

// Regex in TypeScript
let re: RegExp = /\w+/g;
