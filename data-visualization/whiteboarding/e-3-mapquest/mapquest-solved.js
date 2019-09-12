// Write a function that takes in an array of numbers, and then returns a new array with each number doubled.

// For example:
// [1, 2, 3] --> [2, 4, 6]


function mapquest(arr) {

    // create an empty array for the new array with the doubled values
    var newArr = []

    // loop through the input array
    for (var i = 0; i < arr.length; i++) {

        // for each value in arr, double it, and assign it to a new variable
        var y = arr[i] * 2;

        // push this new value to the newArr
        newArr.push(y)
    }

    // once complete, return the newArry
    return newArr;
}


// Test cases:
console.log(mapquest([1, 2, 3])); //[2, 4, 6]
console.log(mapquest([4, 3, 3, 3, 4])); //[8, 6, 6, 6, 8]
console.log(mapquest([6, 6, 6, 6, 6, 6]); // [12, 12, 12, 12, 12, 12]