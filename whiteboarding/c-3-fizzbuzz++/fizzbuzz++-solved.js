// For this activity, consider the original FizzBuzz challenge. This is FizzBuzz++. 
// If we take an input number, like 15, for example, all the natural numbers that are also multiples of 3 or 5 are 3, 5, 6, 9, 12. The sum of these numbers is 35.

// Write a function that completes the solution  so that it returns the sum of all mulitples of 3 or 5 below the number passed in as a parameter. However, if the number is a multiple of 3 and 5 (i.e. 15), you should only count it once in your final value.



function fizzBuzzPlusPlus(number) {

    // YOUR CODE HERE

    // initialize an empty array
    var numArray = [];

    // initialize a variable to hold the total that we will later return
    // set this to 0
    var sum = 0;

    // loop as long as i is less than the number param that we received
    for (var i = 0; i < number; i++) {

        // for each iteration, check if i is a mulitple of 3 and 5
        // do this first so that these numbers only get counted one time
        if (i % 3 === 0 && i % 5 === 0) {
            // if so push it
            numArray.push(i);

            // check if i is a  multiple of 3
        } else if (i % 3 === 0) {

            // if so, push  it
            numArray.push(i);

            // check if i is a multiple of 5
        } else if (i % 5 === 0) {

            // if so, push it
            numArray.push(i);
        }
    }

    // now loop through our new array and sum the total
    for (var i = 0; i < numArray.length; i++) {
        sum = sum + numArray[i];
    }

    // return the sum
    return sum;
}


// Test cases
console.log(fizzBuzzPlusPlus(10)); // 23
console.log(fizzBuzzPlusPlus(15)); // 45
console.log(fizzBuzzPlusPlus(35)); // 258
console.log(fizzBuzzPlusPlus(500)); //57918
