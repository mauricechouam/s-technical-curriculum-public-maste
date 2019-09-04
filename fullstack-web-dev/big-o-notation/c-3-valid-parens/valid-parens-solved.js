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

    // YOUR CODE HERE

    // get the length of the total string and  divide it by two
    var len = parens.length / 2;

    // loop through parens the total value of len times 
    for (var i = 0; i <= len; ++i) {

        // on each iteration, replace "()" with an empty string
        parens = parens.replace('()', '');
    }

    // now, if at  the  end there is  nothing left  inside parens, then we know  it  was valid
    // return true
    if (parens == '') {
        return true;
    } else {
        // if anything is left over, then it  was invalid
        // return false
        return false;
    }

}


// Test cases
console.log(validParens("())"));
console.log(validParens("()()()()()(())(())(()())()()()()()()()()"));
console.log(validParens("()(())(()(())())()()()"));