#  Write a function that takes a string input: 'str'
#  Return the number / count of vowels in the input string.
#  For the purpose of this assignment, consider 'a', 'e', 'i', 'o' and 'u'
#  as vowels
#  the input string will consist of lower case letters

def count_the_vowels(str): 

    # initialize a counter variable  to 0 
    num_vowels = 0

    # loop through each character in the string
    for char in str:

        #  if the char matches one of the  vowels in upper case of lowercase
        if char in "aeiouAEIOU":

            # increment counter by one
            num_vowels = num_vowels + 1

    # return  the  counter
    return num_vowels


print(count_the_vowels('this is a string'))