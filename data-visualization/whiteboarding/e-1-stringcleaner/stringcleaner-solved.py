# You just invested in some optical character recognition software, but you saved on the budget and the software isn't that great.

# You quickly realize that the software inserts some unnecessary numerical characters.

# Your job is to write a function that takes these strings as inputs, and cleans out the numeric characters and return a string with special characters and spacing all intact.

# For example:
# string_clean('Thi3s looks65 awesom4e!') == 'This looks great!'

# Special characters include: ~#$%^&!@*():;"'.,?

# input number params: n>=0 && n<=arr.length


# Option 1
def string_clean(string):
    # loop through the string and if if the index/iterator  is in the range of 0 through 10
    for i in range(0,10):
        i=str(i)
        if i in string:
            # if it is, replace with nothing ''
            string=string.replace(i,'')
    
    # return the string
    return string

# Option 2
# def string_clean(string): 
#     return ''.join([item for item in string if not item.isdigit()])



print(string_clean('Thi3s looks65 awesom4e!'));
