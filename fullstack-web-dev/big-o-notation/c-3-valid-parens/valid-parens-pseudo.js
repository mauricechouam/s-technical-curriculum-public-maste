// For this activity, write a function that takes in a string of parentheses, and then determines whether it is a valid combination (i.e. all opening and closing parentheses are in the appropriate places).

// The function should return false if it is an invalid combination, true if it is  valid.

// For example:
// "(" => false
// "()" => true
// ")()" => false
// "(())((()))()" = true

// Constraints: 
// The input will always include at least one parenthesis.


function validParens(parens) {

    // get the length of the total string and  divide it by two

    // loop through parens the total value of len times 

    // on each iteration, replace "()" with an empty string

    // now, if at  the  end there is  nothing left  inside parens, then we know  it  was valid
    // return true

    // if anything is left over, then it  was invalid
    // return false

}


// Test cases
console.log(validParens("())"));
console.log(validParens("()()()()()(())(())(()())()()()()()()()()"));
console.log(validParens("()(())(()(())())()()()"));