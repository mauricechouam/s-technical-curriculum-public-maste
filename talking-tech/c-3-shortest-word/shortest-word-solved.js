// Write a function that takes in a string of words and returns the length of the shortest word(s). Make the assumption that the string will never be empty, and you do not need to account for differing datatypes.


function findShortest(str) {

    // YOUR CODE HERE

    // split the string into separate words in an array
    let wordsArr = str.split(" ");

    // initialize a variable to hold the shortest word, set it to the first item in the array
    let shortestWord = wordsArr[0];

    // now loop through the  array
    for (let i = 0; i < wordsArr.length; i++) {

        // check if the current iterable is shorter than what is  already stored in our variable
        if (wordsArr[i].length <= shortestWord.length) {

            // if it is, replace the variable
            shortestWord = wordsArr[i];
        }
    }

    // return the length of whatever is stored in our variable
    return shortestWord.length;

}

// TEST CASES
console.log(findShortest("For writers, a random sentence can help them get their creative juices flowing.")); // 1
console.log(findShortest("Joe made the sugar cookies; Susan decorated them.")); // 3
console.log(findShortest("We have never been to Asia, nor have we visited Africa.")); // 2