function fizzBuzzRecursive(begin, end) {
    // check whether begin number is greater than end number
    if (begin > end) {
        console.log('Recursive solution complete.');
        return;
    }

    // complete fizzbuzz solution
    if (begin % 3 == 0 && begin % 5 == 0) {
        console.log('FizzBuzz');
    } else if (begin % 3 == 0) {
        console.log('Fizz');
    } else if (begin % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(begin);
    }

    // call recursively
    fizzBuzzRecursive(++begin, end);
}

fizzBuzzRecursive(80, 100);
