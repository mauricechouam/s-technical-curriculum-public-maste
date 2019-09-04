/*
Given an array of integers, write a function that calculates the 
product of all integers other than the number at index.

For example, input:

  [7, 12, 8, 9]

your function would return:

  [ 864, 504, 756, 672]

by calculating:

  [12*8*9, 7*8*9, 7*12*9, 7*12*8]

The solution must execute in O(n^2) time. (HINT: you'll want a nested for-loop!)
Do not use division in your solution. 
*/

function calculateProduct(arr) {
    // we'll need an array to store our new products, so create an array to store these values
    var res = [];

    // start by looping through the input array given
    for (var i = 0; i < arr.length; i++) {
        // set our product value to default at 1
        var product = 1;

        // for each item in the array, loop through the input again
        for (var j = 0; j < arr.length; j++) {
            // if the array indexes don't match, calculate the product by taking the initial product value of 1, and multiplying
            // it by the array index value, this will give the product of the remaining integers in the array
            if (j != i) {
                product *= arr[j];
            }
        }

        // push the product to the empty array that we initialized to store the product
        res.push(product);
    }

    return res;
}

console.log(calculateProduct([7, 12, 8, 9]));
