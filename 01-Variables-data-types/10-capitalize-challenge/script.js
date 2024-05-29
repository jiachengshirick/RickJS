// Create a new string called "myNewString" that holds the value of "Developer", using the lowercase value from "myString"
const myString = 'developer';

let myNewString;

// Solution
myNewString = myString[0].toUpperCase() + myString.substring(1);
myNewString = `${myString.charAt(0).toUpperCase()}${myString.slice(-8)}`;

console.log(myNewString);
