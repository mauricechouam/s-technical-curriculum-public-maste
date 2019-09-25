[Back to Contents](https://github.com/coding-boot-camp/cs-technical-curriculum/tree/master/async-content)

# Lesson Eight: Big O Notation

In this lesson, we'll cover the concept of Big Oh notation at a high level. We then will discuss why it's an important Computer Science concept to understand.

## Read


Big Oh notation comes up incredibly often in coding interviews. It’s also not very complicated to learn. Big Oh notation is the answer to the question, “how will this algorithm scale as the input gets more and more complicated”.

Generally the question comes up after you complete a coding exercise on the whiteboard. The question you’ll get is to look at your code and tell the interviewer:

>“What is the Big Oh runtime of the algorithm? Could you figure a solution that performs better in Big Oh?”

It’s kind of hard to talk about in the abstract, but pretty simple to talk about through examples.
## Watch

Watch the following video.

[![bigo](http://img.youtube.com/vi/v4cd1O4zkGw/0.jpg)](https://youtu.be/v4cd1O4zkGw  "bigo")


## Solve

> Fibonacci Sequence
> 
> The fibonacci sequence is perhaps one of the most famous algorithms, and definitely one of the most tested > during technical interviews.
> 
> Give a number N, return the index value of the Fibonacci sequence, where the sequence is:
> 
> 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
> 
> The sequence is relatively simple mathematics. Each value is the sum of the previous two values or:
>
> F(n) = F(n-1) + F(n-2)