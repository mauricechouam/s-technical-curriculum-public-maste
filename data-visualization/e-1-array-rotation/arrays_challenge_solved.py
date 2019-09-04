# **** TASK ***
# Left Rotation:
# A left rotation on an array shifts each element of the array 1 unit to the left. 

# In this challenge, given an array 'arr' and a number 'd', perform 'd' rotations on the array and return the updated array.

# *

# **** SAMPLE INPUT
# arr = [1,2,3,4,5]
# d = 2

# SAMPLE OUTPUT
# [3,4,5,1,2]


def rotateLeft(arr, d):

    # displays the original array
    print("**************")
    print("Original array:")
    for i in range(0, len(arr)):
        print(arr[i])

    # rotate the given array by d times 
    for i in range(0, d):

        # store the first element of the array in a temporary variable
        first = arr[0]

        for j in  range(0, len(arr) - 1):

            #shift each element of the array by one
            arr[j] = arr[j+1]

        # first element of the array moved to the end
        arr[len(arr) - 1] = first


    # prints the rotated array
    print("**************")
    print("Rotated array:")
    for i in range(0, len(arr)):
        print(arr[i])



rotateLeft([1, 2, 3, 4, 5], 2)

