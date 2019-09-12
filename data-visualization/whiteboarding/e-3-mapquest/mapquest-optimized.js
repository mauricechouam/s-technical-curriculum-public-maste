// Write a function that takes in an array of numbers, and then returns a new array with each number doubled.

// For example:
// [1, 2, 3] --> [2, 4, 6]


function mapquest(arr) {

    return arr.map(arr => arr * 2);
}


// Test cases:
console.log(mapquest([1, 2, 3])); //[2, 4, 6]
console.log(mapquest([4, 3, 3, 3, 4])); //[8, 6, 6, 6, 8]
console.log(mapquest([6, 6, 6, 6, 6, 6]); // [12, 12, 12, 12, 12, 12]