// Write a function that returns the input string with spaces between each letter. For the purpose of this  assignment, you can assume that only strings will be passed as an input parameter


function gimmeSomeSpace(str) {

    // spplit the string
    var splitString = str.split('');
    var spacedString = splitString.join(' ');

    return spacedString;

}


// Test Cases
console.log(gimmeSomeSpace("Hello, world"));
console.log(gimmeSomeSpace("Time to bake a cake"));