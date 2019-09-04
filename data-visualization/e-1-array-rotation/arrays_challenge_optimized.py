# **** TASK ***
# Left Rotation:
# A left rotation on an array shifts each element of the array 1 unit to the left. 

# In this challenge, given an array 'arr' and a number 'n', perform 'n' rotations on the array and return the updated array.

# *

# **** SAMPLE INPUT
# arr = [1,2,3,4,5];
# n = 2;

# SAMPLE OUTPUT
# [3,4,5,1,2]

# *************************
# **** YOUR CODE HERE *****
# *************************

#  this function utilizes only one loop

def rotateLeft(arr, n):
    return arr[n:] + arr[:n]

print(rotateLeft([1, 2, 3, 4, 5], 2))
