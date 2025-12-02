//Functions Debugging Part One
let fox = "Jumped Over The Lazy Dog";
// Challenge 1: String Interpolation
// README: [Link to Challenge 1]
// Goal: Create a function that adds "Over The Fence" to the end of the input string.
// Error: The function should return "Jumped Over The Lazy Dog Over The Fence".
function jumpOverFence(fox) {
  // Your code here (Hint: Use string interpolation to append "Over The Fence")
  // Example: return `${fox} Over The Fence`;
}

// Test Challenge 1
console.log(jumpOverFence(fox)); // Expected: "Jumped Over The Lazy Dog Over The Fence"

// Challenge 2: Even or Odd
// Goal: Create a function that returns true if a number is even, false if odd.
// Error: Incorrect true/false return value based on even/odd check.
function isEvenOrOdd(num) {
  // Your code here (Hint: Use the modulus operator % to check for remainder when divided by 2)
  // Example: return num % 2 === 0;
}

// Test Challenge 2
console.log(isEvenOrOdd(10)); // Expected: true
console.log(isEvenOrOdd(5));  // Expected: false

// Challenge 3: Celsius to Fahrenheit Conversion
// Goal: Convert Celsius to Fahrenheit using the formula (C * 9/5) + 32.
// Error: Incorrect Fahrenheit conversion result.
function celsiusToFahrenheit(celsiusNumber) {
  // Your code here (Hint: Apply the formula (C * 9/5) + 32)
  // Example: return (celsiusNumber * 9/5) + 32;
}

// Test Challenge 3
console.log(celsiusToFahrenheit(30)); // Expected: 86
console.log(celsiusToFahrenheit(0));  // Expected: 32

// Challenge 4: Find Maximum Number in Array
// Goal: Find the largest number in an array.
// Error: Incorrect maximum number returned.
function findMaxNumber(arr) {
  // Your code here (Hint: Use Math.max(...arr))
  // Example: return Math.max(...arr);
}

// Test Challenge 4
console.log(findMaxNumber([1, 2, 3, 4, 5])); // Expected: 5

// Challenge 5: Asynchronous "Hello World"
// Goal: Log "Hello World" to the console after 2 seconds.
// Error: "Hello World" not logged or logged immediately, not after 2 seconds.
function sayHelloWorld() {
  // Your code here (Hint: Use setTimeout to delay the console.log)
  // Example: setTimeout(() => console.log("Hello World"), 2000);
}

// Test Challenge 5
sayHelloWorld(); // Expected: "Hello World" logged after 2 seconds





//Functions Debugging Part Two
// increased_challenges.js

// Challenge 1: Square a Number
// Goal: Create a function that squares a given number.
// Error: Incorrect squared result.
function squareNumber(num) {
  // Your code here (Hint: Use Math.pow(num, 2) or num * num)
  // Example: return num * num;
}
// Test Challenge 1
console.log(squareNumber(4)); // Expected: 16

// Challenge 2: Repeat String 3 Times
// Goal: Create a function that repeats a string three times using a loop.
// Error: Incorrect repeated string or incorrect number of repetitions.
function repeatString(str) {
  // Your code here (Hint: Use a loop to concatenate the string 3 times)
  // Example: let result = ""; for (let i = 0; i < 3; i++) { result += str; } return result;
}
// Test Challenge 2
console.log(repeatString("Hello")); // Expected: "HelloHelloHello"

// Challenge 3: Scoped Variables and String Return
// Goal: Create a function with scoped variables and return a specific string.
// Error: Incorrect string returned or scoping issues.
function scopingData() {
  // Your code here (Hint: Use nested functions or block scope to manage variables)
  // Example: let message = "Hello"; function inner() { return message + " World"; } return inner();
}
// Test Challenge 3
console.log(scopingData()); // Expected: "Hello World"

// Challenge 4: Reverse a String
// Goal: Create a function that reverses a given string.
// Error: Incorrect reversed string.
function reverseString(str) {
  // Your code here (Hint: Use split, reverse, and join methods)
  // Example: return str.split("").reverse().join("");
}
// Test Challenge 4
console.log(reverseString("Hello")); // Expected: "olleH"

// Challenge 5: Random Number Between 1 and 10
// Goal: Create a function that returns a random number between 1 and 10 (inclusive).
// Error: Random number outside the 1-10 range or not a number.
function randomNumber() {
  // Your code here (Hint: Use Math.random() and Math.floor())
  // Example: return Math.floor(Math.random() * 10) + 1;
}
// Test Challenge 5
console.log(randomNumber()); // Expected: A random number between 1 and 10




// Arrays Debugging Part One
// array_challenges.js

// Array Challenges 1-5

// Challenge 1: Find Largest Number
// Goal: Find the largest number in an array.
// Error: Incorrect largest number returned.
function findLargestNumber(arr) {
  // Your code here (Hint: Use Math.max(...arr))
  // Example: return Math.max(...arr);
}

console.log(findLargestNumber([3, 6, 2, 8, 4])); // Expected: 8

// Challenge 2: Remove Duplicates
// Goal: Remove duplicate elements from an array.
// Error: Array with duplicates or incorrect unique elements.
function removeDuplicates(arr) {
  // Your code here (Hint: Use Set to remove duplicates)
  // Example: return Array.from(new Set(arr));
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected: [1, 2, 3, 4, 5]

// Challenge 3: Filter Even Numbers
// Goal: Filter an array to include only even numbers.
// Error: Array with incorrect even numbers or missing even numbers.
function filterEvenNumbers(arr) {
  // Your code here (Hint: Use the filter method)
  // Example: return arr.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // Expected: [2, 4]

// Challenge 4 (Optional): Filter Array with Steps (Circular Shift)
// Goal: Shift the array by a given number of steps, wrapping around.
// Error: Incorrect shifted array.
function filterArray(arr, steps) {
  // Your code here (Hint: Use slice and concat methods)
    // Example: return arr.slice(steps).concat(arr.slice(0, steps));
}

console.log(filterArray([1, 2, 3, 4, 5], 2)); // Expected: [3, 4, 5, 1, 2]

// Challenge 5 (Optional): Rotate Array (Circular Shift in Opposite Direction)
// Goal: Rotate the array by a given number of steps, wrapping around in the opposite direction.
// Error: Incorrect rotated array.
function rotateArray(arr, steps) {
  // Your code here (Hint: Use slice and concat methods)
  // Example: return arr.slice(arr.length - steps).concat(arr.slice(0, arr.length - steps));
}
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Expected: [4, 5, 1, 2, 3]