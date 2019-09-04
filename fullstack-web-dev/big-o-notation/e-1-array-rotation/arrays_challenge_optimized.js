/**** TASK ***
Left Rotation:
A left rotation on an array shifts each element of the array 1 unit to the left. 

In this challenge, given an array 'arr' and a number 'n', perform 'n' rotations on the array and return the updated array.

*/

/**** SAMPLE INPUT
arr = [1,2,3,4,5];
n = 2;

SAMPLE OUTPUT
[3,4,5,1,2]

*/

//*************************/
//**** YOUR CODE HERE *****/
//*************************/

// this function utilizes only one loop
function rotateLeft(arr, d) {
    // we basically concatenate the latter part and the first part of the array into a new array
    // we don't need a for-loop in order to do this, which is ++ for speed optimization (Big O)
    let res = [...arr.slice(d), ...arr.slice(0, d - arr.length)];

    console.log(res);
    return res;
}

rotateLeft([1, 2, 3, 4, 5], 2);

//*************************/
