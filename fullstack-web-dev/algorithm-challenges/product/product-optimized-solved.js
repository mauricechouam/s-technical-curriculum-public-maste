/*
Given an array of integers, write a function that calculates the 
product of all integers other than the number at index.

For example, input:

  [7, 12, 8, 9]

your function would return:

  [ 864, 504, 756, 672]

by calculating:

  [12*8*9, 7*8*9, 7*12*9, 7*12*8]

This solution should be optimized and execute in O(n) time.
*/

function calculateProduct(arr) {
    let res = [];
    let mathString = '1*' + arr.toString().replace(/,/g, '*') + '*1';
    console.log(mathString);

    for (let i = 0; i < arr.length; i++) {
        let currentMath = mathString.replace('*' + arr[i] + '*', '*1*');
        console.log(currentMath);

        res.push(eval(currentMath));
    }

    return res;
}

console.log(calculateProduct([7, 7, 12, 8, 9]));

console.log("THIS IS HARD. IT'S OKAY!!!");
