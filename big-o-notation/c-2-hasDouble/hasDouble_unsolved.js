

function includesDoubleWithHashmap(array) {
    let doubles = {};

    let i = 0;

    while (i < array.length) {
        doubles[array[i]] = 'this text does not matter';
        if (doubles[(array[i] * 2)] || doubles[(array[i] / 2)]) {
            return true;
        }
        console.log('doubles: ' + JSON.stringify(doubles))
        i++;
    }
    return false;
}





console.log(includesDoubleWithHashmap([1, 18, 3, 7, 9, 13])); // true
console.log(includesDoubleWithHashmap([1, 3, 7, 9, 13])); // false