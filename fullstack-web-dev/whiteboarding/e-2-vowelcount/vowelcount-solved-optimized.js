// Write a function that takes a string input: 'str'
// Return the number / count of vowels in the input string.
// For the purpose of this assignment, consider 'a', 'e', 'i', 'o' and 'u'
// as vowels
// the input string will consist of lower case letters

function countTheVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter(letter => {
        return vowels.includes(letter) ? true : false;
    }).length;
}

console.log(countTheVowels('testing'));
