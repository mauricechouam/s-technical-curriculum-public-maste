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

    while (parens.indexOf('()') != -1) {
        parens = parens.replace('()', '');
    }
    return !parens.length;

}


// Test cases
console.log(validParens("())"));
console.log(validParens("()()()()()(())(())(()())()()()()()()()()"));
console.log(validParens("()(())(()(())())()()()"));