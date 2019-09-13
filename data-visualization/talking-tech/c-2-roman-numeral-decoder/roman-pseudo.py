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

    # initialize a var to hold the numeric value

    # loop through the array of roman char numbers

    # check to see last is 0, if so, add the value of c to the total

    # if last is greater than the current index of dict, minus the that value from  the total

    # otherwise, add the current index of dict to the total

    # return the total



# TEST CASES
print(decode_roman_numeral("MCMXC")) # 1990
print(decode_roman_numeral("MDCLXVI")) # 1666