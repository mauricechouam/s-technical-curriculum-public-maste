# Write a function that takes in an array of numbers, and then returns a new array with each number doubled.

# For example:
# [1, 2, 3] --> [2, 4, 6]


def map_quest(arr): 

    # check if the array has items in  it
    if len(arr) > 0:

    # if  so,then loop through the entire length of the array  
    for i in range(len(a)):

      # for each iterator/index, double i
      arr[i] = arr[i] * 2
  
  # return the array
  return arr

# Test cases:
print(map_quest([1, 2, 3]))  # [2, 4, 6]
print(map_quest([4, 3, 3, 3, 4]))  # [8, 6, 6, 6, 8]
print(map_quest([6, 6, 6, 6, 6, 6])  # [12, 12, 12, 12, 12, 12]