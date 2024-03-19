// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

// assigning types to other types is only allowed in type aliases not interfaces
// user interfaces for only objects and classes
type UserId = stringOrNumber;
// interface PostId = stringOrNumber;

// Literal types - can only be assigned to a specific values
let myName: 'Dave';
// myName = 'John'; // Error
let userName: 'Dave' | 'John' | 'Jane';
userName = 'John';

// functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (msg: any): void => {
  console.log(msg);
};

logMsg('Hello');
logMsg(add(1, 2));
// logMsg(add('1', 1)); // Error

let subtract = function (a: number, b: number): number {
  return a - b;
};

// using types vs interface
type mathFunction = (a: number, b: number) => number;
let multiply: mathFunction = (a, b) => a * b;

interface mathFunctionInt {
  (a: number, b: number): number;
}
let multiplyInt: mathFunction = (a, b) => a * b;

// Optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  return a + b + (c || 0);
};

// Default parameters
const sumAll = (a: number, b: number, c: number = 0): number => {
  return a + b + c;
};

// Rest parameters
const total = (...nums: number[]): number => {
  return nums.reduce((a, b) => a + b);
};

console.log(total(1, 2, 3, 4, 5));

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};
