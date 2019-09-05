// Write a function that takes an input parameter, 'str', and returns a new string with the vowels removed. Any special characters such as !@#$%^&*() should be left intact.

// loseTheVowels("this is a test sentence");
// loseTheVowels("coffee is a necessary way to start the day");


loseTheVowels = (str) => {

    // YOUR CODE HERE

    // set up an array of vowels to check our string against, we will need both capitalized and uncapitalized versions
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    // create a variable called newStr that is an empty string to hold our new string without vowels
    var newStr = '';


    // using a for loop, loop through the string input
    for (var i = 0; i <= str.length; i++) {

        // assign a variable, 'char', to whichever character we are currently looking at
        var char = str.charAt(i);

        // using .indexOf method, check if that character exists in our array of vowels
        // if it doesn't, concatenate it into our new string
        if (vowels.indexOf(char) == -1) {
            newStr += char;
        }
    }

    // return the new string
    return newStr;

}

// Test cases
console.log(loseTheVowels("this is a test sentence"));
console.log(loseTheVowels("coffee is a necessary way to start the day"));