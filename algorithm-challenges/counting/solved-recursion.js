// counting

// simple counter with recursion
function counterRecursion(num) {
    console.log(num);

    if (num === 10) {
        return;
    }

    return counterRecursion(num + 1);
}

counterRecursion(1);
