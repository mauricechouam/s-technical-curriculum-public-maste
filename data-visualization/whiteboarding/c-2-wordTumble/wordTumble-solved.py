# Write a function that takes in a string containing at least one word, but may contain several. It should return the same string, but any words containing five (5) or more letters should be reversed. =

# Examples:
# word_tumble("Hello this is a fantastic example.") => "Hello this is a citsatnaf elpmaxe"
# word_tumble( "This is another test" ) => "This is rehtona test"

# Constraints:
# Strings will only consist of letters and spaces
# Spaces will be included only to separate words


def word_tumble(str):

    # YOUR CODE HERE
    # split the string into an array that we can manipulate
    words = [word for word in str.split(" ")]

    # now we can loop through each of the words in the string
    # if the word in the current iteration is greater than or equal to 5 chars in length
    words = [word if len(word) < 5 else word[::-1] for word in words]

    # then we can return the original array after joining it back together as a string with the new reversed words
    return " ".join(words)

    

# Test cases
print(word_tumble("Hello this is a fantastic example."))
print(word_tumble("This is another test"))
print(word_tumble("Give me one more shot"))
print(word_tumble("Elephants are extremely intelligent animals"))