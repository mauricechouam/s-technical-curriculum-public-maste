// Write a function that takes in a string of words and returns the length of the shortest word(s). Make the assumption that the string will never be empty, and you do not need to account for differing datatypes.


findShortest = str => {

    // YOUR CODE HERE

    // split the string into separate words in an array

    // initialize a variable to hold the shortest word, set it to the first item in the array

    // now loop through the  array

    // check if the current iterable is shorter than what is  already stored in our variable

    // if it is, replace the variable

    // return the length of whatever is stored in our variable

}

// TEST CASES
console.log(findShortest("For writers, a random sentence can help them get their creative juices flowing.")); // 1
console.log(findShortest("Joe made the sugar cookies; Susan decorated them.")); // 3
console.log(findShortest("We have never been to Asia, nor have we visited Africa.")); // 2