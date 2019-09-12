# For this activity, consider the original FizzBuzz challenge. This is FizzBuzz++. 
# If we take an input number, like 15, for example, all the natural numbers that are also multiples of 3 or 5 are 3, 5, 6, 9, 12. The sum of these numbers is 35.

# Write a function that completes the solution  so that it returns the sum of all mulitples of 3 or 5 below the number passed in as a parameter. However, if the number is a multiple of 3 and 5 (i.e. 15), you should only count it once in your final value.

def fizzBuzzPlusPlus(number):

    # initialize a variable to hold the total that we will later return
    # set this to 0

    # loop as long as i is less than the number param that we received
        
    # for each iteration, check if i is a mulitple of 3 or 5

    # if so, increment sum by that value
    
    # return sum


    
# Test cases
print(fizzBuzzPlusPlus(10)) # 23
print(fizzBuzzPlusPlus(15)) # 45
print(fizzBuzzPlusPlus(35)) # 258
print(fizzBuzzPlusPlus(500)) # 57918
