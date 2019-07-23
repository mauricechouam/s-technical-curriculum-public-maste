// Write a function that takes a string input: 'str'
// Return the number / count of vowels in the input string.
// For the purpose of this assignment, consider 'a', 'e', 'i', 'o' and 'u'
// as vowels
// the input string will consist of lower case letters

function countTheVowels(str) {
    // initialize a counter so that we can count the vowels
    var vowelsCount = 0;

    // set up an array with vowels that we can loop through and check against
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    // loop through the input string
    for (var i = 0; i < str.length; i++) {
        // for each item in the array (i), loop through the vowels array and see if it matches
        for (var j = 0; j < vowels.length; j++) {
            // if there is a match, increase the counter by 1
            if (str[i] === vowels[j]) {
                vowelsCount++;
            }
        }
    }
    // return the vowel counter
    return vowelsCount;
}

console.log(countTheVowels('this is a string'));
