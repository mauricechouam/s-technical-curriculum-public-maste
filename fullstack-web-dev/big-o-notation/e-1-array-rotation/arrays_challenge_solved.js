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

function rotateLeft(arr, d) {
    // create a copy of the array and save it in a temporary variable
    let temp = arr.slice(0);

    // loop through the array as many times as we need to do rotations
    for (let i = 0; i < d; i++) {
        // remove the first item of the array, store it in a temporary variable
        let first = temp.shift();

        // add that temporary variable back at the end of the array
        temp.push(first);
    }

    // once completed, return the the newly rotated array
    console.log(temp);
    return temp;
}

rotateLeft([1, 2, 3, 4, 5], 2);
