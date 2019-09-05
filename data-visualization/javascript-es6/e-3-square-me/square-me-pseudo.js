// Write a function that squares every digit of the input number. 
// You can assume that the input number will be a positive integer, not a float

// For example, if we run 2112 through the function, 4114 will come out, because 2 squared is 4 and 1 squared is 1.


squareMe = num => {

    // Your Code Here

    // set up an empty array to hold our new numbers

    // turn each digit into a string, and then use the .split() method to split it into an array

    // now we loop through this array, and use Math.pow to square each number
    // push the squared number into the new array

    // return a parsed integer, and join it back together

}


// Test Cases
console.log(squareMe(2112)); // 4114
console.log(squareMe(444)) // 888
