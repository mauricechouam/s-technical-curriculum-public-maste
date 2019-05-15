# Coding Task: Tip Calculator

**The Challenge**

It's always tricky to know how much to tip, unless you're an arithmetic mastermind! Your task is to create a simple command-line (Node, Python or other) or front-end JavaScript application that will help calculate a tip at a restaurant for your server. No boilerplate code
will be provided, so you are free to construct this however you would like.

However, your application must:

-   take in the value of the bill
-   take in a user input of percentage value for the tip
-   include the option to split the tip amount by number of people at the table

The application should then calculate the amount of tip per table (or per person if the split option is chosen)
and return that value to the user.

_BONUS:_

-   create a simple UI so that this can be used in the browser
-   deploy to your favorite hosting service (Heroku, Netlify, etc.)

**Restraints and Guidelines**

Please read these thoroughly. We will validate your application based on the following criteria:

-   your code should be clean and readable. Don't neglect the comments!
-   you must submit your code in a git repository. Consider the value of your commit comments
-   commit early, commit often; we will look at the progression of your code throughout application development
-   you shouldn't need any external libraries to complete this application... BUT if you do, you need to document
    it in your readme and let us know why it was a better choice

Some additional requirements for your application:

-   the bill value must be a positive float but your application must handle user input that might
    be a negative or 0 dollar amount (i.e. error handling)
-   the user input percentage for the tip must be a positive float
-   the returned value must be a float rounded to two decimal points (i.e. accurate dollars and cents)