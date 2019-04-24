function fizzBuzz() {
    for (var i = 0; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz');
        } else if (i % 3 == 0) {
            console.log('Fizz');
        } else if (i % 5 == 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

function fizzBuzzSwitchStatement() {
    for (var i = 1; i <= 100; i++) {
        switch (true) {
            case i % 3 == 0 && i % 5 == 0:
                console.log('FizzBuzz');
                break;
            case i % 3 == 0:
                console.log('Fizz');
                break;

            case i % 5 == 0:
                console.log('Buzz');
                break;

            default:
                console.log(i);
                break;
        }
    }
}

fizzBuzz();
fizzBuzzSwitchStatement();
