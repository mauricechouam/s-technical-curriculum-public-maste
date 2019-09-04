// Write a function that takes in an integer argument and returns a boolean value stating whether the  integer is prime. 

// For the purpose of this activity, a prime number is considered a natural number greater than 1 that has no positive divisors other than 1 and itself.


function isPrime(integer) {

    // Check if the number is  equal to, or less than, 1. If so, return false because it isn't p;rime

    // Otherwise, start to loop through the numbers that precede the given integer, starting with 2

    // if the integer can be divisible  by [i], return false because  it isn't prime

    // Else, return true because the number IS prime


}


// TEST CASES
console.log(isPrime(1)); // false 
console.log(isPrime(29)); // true
console.log(isPrime(30)); // false