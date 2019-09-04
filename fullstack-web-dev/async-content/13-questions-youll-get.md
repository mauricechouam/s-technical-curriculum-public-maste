[Back to Contents](https://github.com/coding-boot-camp/cs-technical-curriculum/tree/master/async-content)

# Lesson Thirteen: Questions You'll Get

The following are a number of the most commonly-asked challenge questions used by interviewers to quickly screen out candidates. Interviewees are expected to come up with the solution to these questions fairly quickly.

## FizzBuzz
You probably remember the FizzBuzz (Foobar) challenge from the intro course. This challenge does frequently come up in the screening and interview process, so it's a good idea to make sure you have a handle on it and can solve it without too much thought.

FizzBuzz is a tried-and-true interview problem. Every engineer has either asked it or been asked it multiple times. Rather than trying to solve the problem on the spot, you should just know the answer. When an interviewer asks a variant of the question, asking, “Are you seriously asking me FizzBuzz?” and immediately writing the solution on the whiteboard without thinking about it is a solid maneuver.

> "Write a program that prints the numbers from 1 to 100. For multiples of 3, print Fizz instead of the number, and for multiples of 5, print Buzz. For numbers which are multiples of both 3 and 5, print FizzBuzz."

The specific words they want you to print to the screen might change, and the numbers you’re asked to check divisibility by might change, too. But variants of FizzBuzz really do show up a lot. If you can’t solve FizzBuzz easily, you’re not ready for a job as a programmer.

You could solve it with a 100-line program, but you're expected to solve the problem using loops, and your solution should be under 15 lines of code.

> Challenge: Solve the FizzBuzz problem. (We know you already solved this problem as part of the intro course, but since it comes up so frequently, solving it again will help prepare you for when you’re asked to solve it on the whiteboard.

## Reverse a String
This challenge asks: given a string, produce a string that is the reverse of the initial string. It will generally be phrased something like:

> Write a method that takes in an input of a string value and returns the reversed string. For example, transform hello into olleh.

JavaScript has the .reverse() method built in, so technically, you could solve the problem using it, like this:

`"hello".reverse`

But this would be cheating. The interviewer wants to see how you would solve the problem without a built-in method.

> Challenge: Write a method that takes in an input of a string and returns the reversed string.

## Remove Duplicates
Another common candidate screening challenge: given an array, remove the duplicates and return the new array.

This is another common problem that's used to quickly screen out candidates. Candidates should be able to come up with this solution fairly quickly.

> Challenge: Write a method that takes in an array of elements and returns a new array with no duplicate entries.

## Calculate a Number's Factorial
This question is a common math problem: calculating a number’s factorial.

> Challenge: Write a method to calculate a number's factorial value.

## Largest Prime Factor
This challenge asks you to determine the largest prime factor of an integer. Prime numbers come up frequently in various parts of computer science, so working through a prime factorization problem will help prepare you for many of the questions that come up on the technical interview.

This problem is a bit trickier, but programmers love problems involving prime numbers!

> Challenge: Determine the largest prime factor of an input integer.

## Caesar Cipher
This challenge involves the encryption algorithm of the Caesar Cipher. The Caesar Cipher is a simple encryption algorithm that involves switching letters by a certain offset. Technically, you could have any offset of letters, but generally, the value 13 is used. This is called ROT13 encryption.

Despite being an incredibly weak cryptographic algorithm, it's an interesting question to ask candidates and is difficult to solve on a whiteboard. One of the perks of the ROT13 encryption system is that encrypting the message uses the exact same code as decrypting it (other Caesar ciphers have slightly different encryption and decryption algorithms).

> Build a ROT13 encryption algorithm. So all A's should translate into N's and vice versa, B's should translate into O's and vice versa, and so on. Hint! Remember to think about capitalization, too. Capital letters should shift to capital letters, and lowercase letters should shift to lowercase ones.

## Largest Common Subsequence
The longest common subsequence problem is a common interview problem and there are two ways to solve it. Being able to solve it the brute-force (slow) way and using the unique computer science programming paradigm called dynamic programming to speed up the program's performance will adequately prepare you to answer this common interview question.

Here’s the problem:
> Given two different strings of text, find the longest common subsequence. For example, ABCDAF and ACBCF have "ABCDAF" and "ACBCF", so the answer is ABCF.

First, solve the problem in a brute-force way. Find every possible way you could organize the letters and try them all. This is the most straightforward way to solve the problem.

Next, solve the problem in an elegant way (using a trick)! After solving the problem in the most straightforward way, try to solve it in a more optimal way using dynamic programming.

Here’s the problem:
> Challenge: Write a method to find the largest common subsequence given two string inputs. Starter kit! Start with our failing tests and implement the solution yourself.

## Palindrome
A palindrome is a word that reads the same forwards as it does backwards. There are many different variations of how this challenge is presented. Here’s one variant:

> Challenge: Write a method to determine if a string is a palindrome. Remove any extraneous elements, like spaces or punctuation, from the string. (The following strings would all be palindromes: “racecar”, “race car”, “race, car”.)


## Watch

No video for this module

## Solve

No other challenges for this module