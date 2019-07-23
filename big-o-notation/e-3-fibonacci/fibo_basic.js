//*************************/
//**** YOUR CODE HERE *****/
//*************************/

function fibonacci(num) {

    // initialize variables, "a" as 1, "b" as 0 to check for numbers that don't have
    // previous values to add up 
    // initialize a temporary holder variable to store temp value
    var a = 1, b = 0, temp;
    
    // using a while loop to execute the required logic only if the number 
    // is greater than 0
    while (num >= 0) {

        // set the temporary variable to "a", which starts at 1
        temp = a;
    
        // redefine a to equal the total of a and b
        a = a + b;
    
        // set b to equal whatever is stored in the temporary variable
        b = temp;
    
        // reduce num by 1 digit, this will then repeat until num is 0
        num--;
    }
    
    // if num is not greater than 0, return b immediately, or return b after
    // the while loop has executed
        console.log(b);
        return b;
    }

    // execute the function
    fibonacci(4)
    
    //*************************/