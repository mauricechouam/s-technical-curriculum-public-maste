[Back to Contents](https://github.com/coding-boot-camp/cs-technical-curriculum/tree/master/async-content)

# Lesson Three: Public Key Cryptography

Understanding the broad strokes of public key cryptography can be useful if you’re ever asked about how you would go about securing a web API, which is a fairly common interview question. Here we’ll cover some concepts to get you by.

## Read

You should know the broad strokes about how public key cryptography works - as it’s how much of the Internet is secured - and you’ll want to write secure applications, right? Here’s what you need to know:

- A semi-prime number is the result of multiplying two prime numbers together, and it has exactly two numbers it’s divisible by.
- The Internet is largely secure because factoring very large semi-prime numbers is a problem that cannot be done in a fast run-time.
- Generating prime numbers is easy. Computers can do that quickly. There are certain math problems that are only possible to solve if you can factor a number.

So in short, it’s pretty easy to have a computer to calculate this:

`7 * 13 = 91`

But it’s hard to go the other way.

`91 = 7 * 13`

For small numbers like this, it’s not too bad. We’re talking about larger numbers though. So more like this:

`2038074743 * 1841931137 = 3753993328664972791`

I know what you’re thinking… this all seems neat, but kind of pointless. Things with this property, like factorization of semi-prime numbers or SHA encryption algorithms that are easy to calculate in one direction, but impossible to calculate in the other direction are the basis of security actually works on the web.

The questions you’ll get in an interview centered around these principles will be basically around the question:

> How would you engineer an API that is secure?

The answer that is generally used is to have:

- A public key, which indicates “who you are” and can be shared with anyone
- A secret key, which you don’t share with anyone but you use to generate a token
- The timestamp the request happened. The timestamp is generally checked to make sure the request happened recently.
- A token that is calculated on the fly, and proves you know all the following, without actually sharing the secret key:
    - The public key
    - The secret key
    - The timestamp the request happened
    - 
By using a token and timestamp you can verify you know the secret (and therefore your identity), without actually sharing the secret. And since the details of the request include a timestamp, even if the NSA found the request information, it would expire before they could use it.


## Watch

Watch the following video provided by HackerRank.

[![algorithms](http://img.youtube.com/vi/MsqqpO9R5Hc/0.jpg)](https://youtu.be/MsqqpO9R5Hc  "sorting algorithms")

## Solve

  

> Learn about how to implement a sorting algorithm and implement one!
