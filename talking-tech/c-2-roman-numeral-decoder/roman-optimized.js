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
    var conversion = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

    return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + conversion[roman], 0);

}

// TEST CASES
console.log(decodeRomanNumeral("MCMXC")); // 1990
console.log(decodeRomanNumeral("MDCLXVI")); // 1666