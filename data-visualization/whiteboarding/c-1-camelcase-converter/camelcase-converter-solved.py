# Write a function that takes in a string parameter, 'str', and converts any dashed or underscored words into capital case

# Example

# capitalize("this-is-a-string")
# Output: "ThisIsAString"


def capitalize(str):
     return str.title().replace("-", "").replace("_", "")


# test cases
print(capitalize("this-is-a-string"))
print(capitalize("This_is_not_an_integer"))