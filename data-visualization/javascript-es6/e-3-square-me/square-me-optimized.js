// Write a function that squares every digit of the input number. 
// You can assume that the input number will be a positive integer, not a float

// For example, if we run 2112 through the function, 4114 will come out, because 2 squared is 4 and 1 squared is 1.


squareMe = num => +num.toString().split('').map(i => i * i).join('');


// Test Cases
console.log(squareMe(2112)); // 4114
console.log(squareMe(444)) // 888
