// Write a function that takes in a string parameter, 'str', and converts any dashed or underscored words into camel case. If the first word of the input is capitalized, it should retain its capitalization in the output (i.e.  Upper Camel Case)

// Example

// toCamelCase("this-is-a-string")
// Output: "thisIsAString"

// toCamelCase("This_is_not_an_integer")
// Output: "ThisIsNotAnInteger"


function toCamelCase(str) {

    // take the inpute string, and split it where there is an underscore or a dash

    // use a loop to go through each item of  the splitSentence

    // take the first item in that sentence, capitalize it, and then remove the uncapitalized version

    // join the  array back together

    // return the solved string

}


// test cases
console.log(toCamelCase("this-is-a-string"));
console.log(toCamelCase("This_is_not_an_integer"));