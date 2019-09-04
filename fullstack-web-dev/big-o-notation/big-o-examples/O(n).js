function printAllItems(arr) {
    arr.forEach(function(item) {
        console.log(item);
    });
}

/*
 This function will run in O(n) time, 
 or “linear” time, where “n” is the number of items in the array. 
 Meaning, if the array has 10 times, it will execute 10 steps, 
 if the array had 1,000 items, it will execute 1,000 steps.
*/
