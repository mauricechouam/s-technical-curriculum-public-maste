// Write a function that takes in a Roman numeral as an argument and returns the value as a numeric integer. 

// Roman numerals are written by using letters in place of integers.
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// For example:
// "MCMXC" = 1990
// "MDCLXVI" = 1666

function decodeRomanNumeral(roman) {

    // YOUR CODE HERE

    // set up all the  roman values in an  object that  can be access via key
    var values = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    };

    // take the input  roman numeral and split into an array so that each char is by itself
    var splitRomanNum = roman.split('');

    // initialize a var to hold the numeric value
    var sum = 0, i;

    // loop through the array of roman char numbers
    for (i = 0; i < splitRomanNum.length; i++) {

        //  check to see if the value of the current roman char is less than the previous value
        if (values[splitRomanNum[i]] < values[splitRomanNum[i + 1]]) {

            // if true, minus that value and add it to sum 
            sum += values[splitRomanNum[i + 1]] - values[splitRomanNum[i]];
            i++;
        }
        else {
            // otherwise just add the total value to  sum
            sum += values[splitRomanNum[i]];
        }
    }

    // return the sum
    return sum;

}

// TEST CASES
console.log(decodeRomanNumeral("MCMXC")); // 1990
console.log(decodeRomanNumeral("MDCLXVI")); // 1666