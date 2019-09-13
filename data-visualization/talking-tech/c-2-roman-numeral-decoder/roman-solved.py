# Write a function that takes in a Roman numeral as an argument and returns the value as a numeric integer. 

# Roman numerals are written by using letters in place of integers.
# Symbol    Value
# I          1
# V          5
# X          10
# L          50
# C          100
# D          500
# M          1,000

# For example:
# "MCMXC" = 1990
# "MDCLXVI" = 1666

def decode_roman_numeral(roman):

    # YOUR CODE HERE
    # set up all the  roman values in a dictionary that  can be access via key

    dict = {
        "M": 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1
    }

    # initialize a var to hold the numeric value
    last, total = 0, 0

    # loop through the array of roman char numbers
    for c in list(roman)[::-1]:

        # check to see last is 0, if so, add the value of c to the total
        if last == 0:
            total += dict[c]

        # if last is greater than the current index of dict, minus the that value from  the total
        elif last > dict[c]:
            total -= dict[c]

        # otherwise, add the current index of dict to the total
        else:
            total += dict[c]

        
        last = dict[c]

        # return the total
    return total


   

# TEST CASES
print(decode_roman_numeral("MCMXC")) # 1990
print(decode_roman_numeral("MDCLXVI")) # 1666