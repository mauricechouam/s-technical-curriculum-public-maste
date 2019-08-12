// Write a function that takes in a string containing at least one word, but may contain several. It should return the same string, but any words containing five (5) or more letters should be reversed. =

// Examples:
// wordTumble("Hello this is a fantastic example.") => "Hello this is a citsatnaf elpmaxe"
// wordTumble( "This is another test" ) => "This is rehtona test"

// Constraints:
// Strings will only consist of letters and spaces
// Spaces will be included only to separate words


function wordTumble(str) {

    // YOUR CODE HERE

    // split the string into an array that we can manipulate

    // now we can loop through each of the words in the string

    // if the word in the current iteration is greater than or equal to 5 chars in length

    // split that word into yet another array, then reverse it, then join it back together

    // then we can return the original array after joining it back together as a string with the new reversed words

}

// Test cases
console.log(wordTumble("Hello this is a fantastic example."));
console.log(wordTumble("This is another test"));
console.log(wordTumble("Give me one more shot"));
console.log(wordTumble("Elephants are extremely intelligent animals"));