//Functions Debugging Part One

// Code One: Epected Output "the Fox jumped over the fence."
//let fox = "Jumped Over The Lazy Dog";
//function jumpOverFence(fox) {
  // Your code here (Hint: Use string interpolation to append "Over The Fence")
  // Example: return `${fox} Over The Fence`;
//}

// Challenge 1: String Interpolation
// README: [Link to Challenge 1]
// Goal: Create a function that adds "Over The Fence" to the end of the input string.
// Error: The function should return "Jumped Over The Lazy Dog Over The Fence".


// Test Challenge 1
//console.log(jumpOverFence(fox)); 
let animal= "Fox";
console.log(`The ${animal} jumped over the fence. `);

// Challenge 2: Even or Odd
//Code Two: Expected Output: true for even numbers, false for odd numbers.
//function isEvenOrOdd(num) {

// Goal: Create a function that returns true if a number is even, false if odd.
// Error: Incorrect true/false return value based on even/odd check.
  // Your code here (Hint: Use the modulus operator % to check for remainder when divided by 2)
  // Example: return num % 2 === 0;

// Test Challenge 2
let num = 10;
console.log(isEvenOrOdd(num)); //True
function isEvenOrOdd(num) {
  return num % 2 === 0;
}

num = 5;
console.log(isEvenOrOdd(num)); //False
function isEvenOrOdd(num) {
  return num % 2 === 0;
}


// Challenge 3: Celsius to Fahrenheit Conversion
//Code Three: Expected Outcome: Convert Celsius to Fahrenheit using the formula (C * 9/5) + 32.
//function celsiusToFahrenheit(celsiusNumber) {
  // Your code here (Hint: Apply the formula (C * 9/5) + 32)
  // Example: return (celsiusNumber * 9/5) + 32;
//}
// Goal: Convert Celsius to Fahrenheit using the formula (C * 9/5) + 32.
// Error: Incorrect Fahrenheit conversion result.


// Test Challenge 3
let celsiusNumber = 30; // Expected: 86
console.log(celsiusToFahrenheit(30));
function celsiusToFahrenheit(celsiusNumber) {
  return (celsiusNumber * 9/5) + 32;
}

celsiusNumber = 0; // Expected: 32
console.log(celsiusToFahrenheit(0));
function celsiusToFahrenheit(celsiusNumber) {
  return (celsiusNumber * 9/5) + 32;
}


// Challenge 4: Find Maximum Number in Array
//Code Four: Expected Outcome: Find the largest number in an array.
//function findMaxNumber(arr) {
  // Your code here (Hint: Use Math.max(...arr))
  // Example: return Math.max(...arr);
//}
// Goal: Find the largest number in an array.
// Error: Incorrect maximum number returned.


// Test Challenge 4
let arr = [1,2,3,4,5];
function findMaxNumber(arr) {
  return Math.max(...arr);
}
console.log(findMaxNumber([1, 2, 3, 4, 5])); // Expected: 5


// Challenge 5: Asynchronous "Hello World"
//Code Five: Expected Outcome: Log "Hello World" to the console after a 2-second delay.
//function sayHelloWorld() {
  // Your code here (Hint: Use setTimeout to delay the console.log)
  // Example: setTimeout(() => console.log("Hello World"), 2000);
//}
// Goal: Log "Hello World" to the console after 2 seconds.
// Error: "Hello World" not logged or logged immediately, not after 2 seconds.

// Test Challenge 5
sayHelloWorld(); // Expected: "Hello World" logged after 2 seconds
function sayHelloWorld() {
  setTimeout(() => console.log("Hello World"), 2000);
}


//Functions Debugging Part Two
// increased_challenges.js

// Challenge 1: Square a Number
// Goal: Create a function that squares a given number.
// Error: Incorrect squared result.
//function squareNumber(num) {
  // Your code here (Hint: Use Math.pow(num, 2) or num * num)
  // Example: return num * num;
//}


// Test Challenge 1
console.log(squareNumber(4)); // Expected: 16
num = 4 ; 
console.log(squareNumber(num)); //Expected: 16
function squareNumber(num) {
  return num * num;
} 


// Challenge 2: Repeat String 3 Times
//Code Two: Expected Outcome: Repeat a given string three times.
//function repeatString(str) {
  // Your code here (Hint: Use a loop to concatenate the string 3 times)
  // Example: let result = ""; for (let i = 0; i < 3; i++) { result += str; } return result;
//}
// Goal: Create a function that repeats a string three times using a loop.
// Error: Incorrect repeated string or incorrect number of repetitions.

// Test Challenge 2
let str = "Hello";
console.log(repeatString(str)); //Expected: "HelloHelloHello"
function repeatString(str) {
  let result = "";
  for (let i = 0; i < 3; i++) {
    result += str;
  }
  return result;
}



// Challenge 3: Scoped Variables and String Return
//Code Three: Expected Outcome: Create a function with scoped variables and return a specific string.
//function scopingData() {
  // Your code here (Hint: Use nested functions or block scope to manage variables)
  // Example: let message = "Hello"; function inner() { return message + " World"; } return inner();
//}
// Goal: Create a function with scoped variables and return a specific string.
// Error: Incorrect string returned or scoping issues.


// Test Challenge 3
function scopingData() {
  let message = "Hello";
  function inner() {
    return message + " World";
  }
  return inner();
}
console.log(scopingData()); // Expected: "Hello World"


// Challenge 4: Reverse a String
//Code Four: Expected Outcome: Reverse a given string.
//function reverseString(str) {
  // Your code here (Hint: Use split, reverse, and join methods)
  // Example: return str.split("").reverse().join("");
//}

// Error: Incorrect reversed string.
// Test Challenge 4
str = "Hello";
console.log(reverseString(str)); //Expected: "olleH"
function reverseString(str) {
  return str.split("").reverse().join("");
}


// Challenge 5: Random Number Between 1 and 10
//Code Five: Expected Outcome: Generate a random number between 1 and 10 (inclusive).
//function randomNumber() {
  // Your code here (Hint: Use Math.random() and Math.floor())
  // Example: return Math.floor(Math.random() * 10) + 1;
//}
// Error: Random number outside the 1-10 range or not a number.

// Test Challenge 5
function randomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
console.log(randomNumber()); // Expected: A random number between 1 and 10




// Arrays Debugging Part One
// array_challenges.js

// Array Challenges 1-5

// Challenge 1: Find Largest Number
// Goal: Find the largest number in an array.
// Error: Incorrect largest number returned.
//function findLargestNumber(arr) {
  // Your code here (Hint: Use Math.max(...arr))
  // Example: return Math.max(...arr);
//}
// Test Challenge 1
arr =[3, 6, 2, 8, 4];
function findLargestNumber(arr) {
  return Math.max(...arr);
}
console.log(findLargestNumber(arr)); // Expected: 8

// Challenge 2: Remove Duplicates
//Array Code Two: Remove duplicate elements from an array.
//function removeDuplicates(arr) {
  // Your code here (Hint: Use Set to remove duplicates)
  // Example: return Array.from(new Set(arr));
//}
// Goal: Remove duplicate elements from an array.
// Error: Array with duplicates or incorrect unique elements.

arr = [ 1, 2, 2, 3, 4, 4, 5];
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}
console.log(removeDuplicates(arr)); // Expected: [1, 2, 3, 4, 5]


// Challenge 3: Filter Even Numbers
//Array Code Three: Filter an array to include only even numbers.
//function filterEvenNumbers(arr) {
  // Your code here (Hint: Use the filter method)
  // Example: return arr.filter(num => num % 2 === 0);
//}
// Goal: Filter an array to include only even numbers.
// Error: Array with incorrect even numbers or missing even numbers.


arr = [1,2,3,4,5];
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers(arr)); // Expected: [2, 4]


// Challenge 4 (Optional): Filter Array with Steps (Circular Shift)
//Array Code Four: Shift the array by a given number of steps, wrapping around.
//function filterArray(arr, steps) {
  // Your code here (Hint: Use slice and concat methods)
    // Example: return arr.slice(steps).concat(arr.slice(0, steps));
//}
// Goal: Shift the array by a given number of steps, wrapping around.
// Error: Incorrect shifted array.

arr = [1,2,3,4,5]
steps = 2;
console.log(filterArray(arr, steps)); // Expected: [3, 4, 5, 1, 2]
function filterArray(arr, steps) {
  return arr.slice(steps).concat(arr.slice(0, steps));
}


// Challenge 5 (Optional): Rotate Array (Circular Shift in Opposite Direction)
//Array Code Five: Rotate the array by a given number of steps, wrapping around in the opposite direction.
//function rotateArray(arr, steps) {
  // Your code here (Hint: Use slice and concat methods)
  // Example: return arr.slice(arr.length - steps).concat(arr.slice(0, arr.length - steps));
//}
// Error: Incorrect rotated array.

//console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Expected: [4, 5, 1, 2, 3]

arr = [1,2,3,4,5];
steps = 2;  
console.log(rotateArray(arr, steps)); // Expected: [4, 5, 1, 2, 3]
function rotateArray(arr, steps) {
  return arr.slice(arr.length - steps).concat(arr.slice(0, arr.length - steps));
}
