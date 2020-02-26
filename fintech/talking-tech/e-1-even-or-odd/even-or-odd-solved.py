# Write a function that takes an integer as a parameter and returns "Even" for even numbers or "Odd" for odd numbers.

# OPTION 1
def even_or_odd(number):
    # Check if the number is 0, return even if so
    if number == 0:
        return "Even"
    # Otherwise, check if using % 2 gives  a remainder of 0, if so return even
    elif number % 2 == 0:
        return "Even"

    # Else just return odd
    else:
        return "Odd"

# OPTION 2
def even_or_odd(number):
    return 'Odd' if number % 2 else 'Even'


# Test Cases
even_or_odd(5)
even_or_odd(292)
even_or_odd(0)
even_or_odd(1967263)


