// Write a function that takes an input parameter, 'str', and returns a new string with the vowels removed. Any special characters such as !@#$%^&*() should be left intact.

// loseTheVowels("this is a test sentence");
// loseTheVowels("coffee is a necessary way to start the day");


loseTheVowels = str => str.replace(/[aeiou]/gi, '');

// Test cases
console.log(loseTheVowels("this is a test sentence"));
console.log(loseTheVowels("coffee is a necessary way to start the day"));