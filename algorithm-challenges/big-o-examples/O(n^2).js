function printAllPossibleOrderedPairs(arr) {
    arr.forEach(function(firstItem) {
        arr.forEach(function(secondItem) {
            console.log(firstItem, secondItem);
        });
    });
}

/*
This example has two nested loops. If the array has “n” items, 
the outer forEach will run “n” times, and the inner loop will run “n” times 
for each iteration of the outer loop, this gives us n² total prints, 
namely O(n²) or “quadratic time”. In short, if the array had 10 pairs, 
it would print 100 times. 
*/
