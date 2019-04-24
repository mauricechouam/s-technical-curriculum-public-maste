// In this assignment, the function should take an array of numbers and check whether its double exists in the array.

// For example:
// If the array contains the number 2 and the number 4, then it would return true. Otherwise, false.

function hasDoubleWithNestedForLoop(array) {

    // loop through the array
    for (var i = 0; i < array.length; i++) {

        // for each item in the array, we need to loop through it again
        for (var j = 0; j < array.length; j++) {

            // check whether the second loop contains the double of the value from the first loop
            if (array[j] == array[i] * 2) {

                // if so, return true
                return true;
            }
        }
    }

    // if no doubles can be found, return false

    return false;
}


function hasDoubleWithIncludes(array) {

    for (var i = 0; i < array.length; i++) {
        if (array.includes(array[i] * 2)) {
            return true;
        }
    }
    return false;
}

console.log(hasDoubleWithNestedForLoop([1, 18, 3, 7, 9, 13])); // true
console.log(hasDoubleWithNestedForLoop([1, 3, 7, 9, 13])); // false

console.log(hasDoubleWithIncludes([1, 18, 3, 7, 9, 13])); // true
console.log(hasDoubleWithIncludes([1, 3, 7, 9, 13])); // false
