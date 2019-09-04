//*************************/
//**** YOUR CODE HERE *****/
//*************************/

function fibonacci(num) {

    // if number is less than or equal to 1, we want to return the "num" that was inputted
    if (num <= 1) return 1;

    // otherwise, take the input number - 1 and the input number - 2 and add them together
    // return the result
    return fibonacci(num - 1) + fibonacci(num - 2);

}

// execute the function
fibonacci(4)
    
//*************************/