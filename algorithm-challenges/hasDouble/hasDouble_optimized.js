// THE CHALLENGE

// In this assignment, the function should take an array of numbers and check whether its double exists in the array.

// For example:
// If the array contains the number 2 and the number 4, then it would return true. Otherwise, false.

function includesDoubleWithHashmap(arr) {
    let doubles = {};

    let i = 0;

    while (i < arr.length) {
        doubles[arr[i]] = 'this text does not matter';
        if (doubles[(arr[i] * 2)] || doubles[(arr[i] / 2)]) {
            return true;
        }
        // console.log('doubles: ' + JSON.stringify(doubles))
        i++;
    }
    return false;
}

console.log(includesDoubleWithHashmap([1, 18, 3, 7, 9, 13])); // true
console.log(includesDoubleWithHashmap([1, 3, 7, 9, 13])); // false