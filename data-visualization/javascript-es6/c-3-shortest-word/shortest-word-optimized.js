// Write a function that takes in a string of words and returns the length of the shortest word(s). Make the assumption that the string will never be empty, and you do not need to account for differing datatypes.


findShortest = str => Math.min(...str.split(" ").map(str => str.length));



// TEST CASES
console.log(findShortest("For writers, a random sentence can help them get their creative juices flowing.")); // 1
console.log(findShortest("Joe made the sugar cookies; Susan decorated them.")); // 3
console.log(findShortest("We have never been to Asia, nor have we visited Africa.")); // 2