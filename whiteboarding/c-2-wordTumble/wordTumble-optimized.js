// Write a function that takes in a string containing at least one word, but may contain several. It should return the same string, but any words containing five (5) or more letters should be reversed. =

// Examples:
// wordTumble("Hello this is a fantastic example.") => "Hello this is a citsatnaf elpmaxe"
// wordTumble( "This is another test" ) => "This is rehtona test"

// Constraints:
// Strings will only consist of letters and spaces
// Spaces will be included only to separate words


function wordTumble(str) {

    // YOUR CODE HERE
    return str.split(' ').map(x => x.length < 5 ? x : x.split('').reverse().join('')).join(' ');

}

// Test cases
console.log(wordTumble("Hello this is a fantastic example."));
console.log(wordTumble("This is another test"));
console.log(wordTumble("Give me one more shot"));
console.log(wordTumble("Elephants are extremely intelligent animals"));