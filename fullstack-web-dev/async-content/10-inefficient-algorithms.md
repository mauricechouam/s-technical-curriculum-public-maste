[Back to Contents](https://github.com/coding-boot-camp/cs-technical-curriculum/tree/master/async-content)

# Lesson Ten: Inefficient Algorithms

In this lesson, we will cover NP algorithms. The runtime for algorithms that run in NP grows exponentially as the size of the input increases.

## Read
For an algorithm that runs in factorial time, for instance, 10 items will take roughly 3628800x the time needed to process a single item.

For NP algorithms, as the input increases in size, the runtime becomes drastically slower.

Every type of problem we’ve analyzed so far executes in what’s known as “polynomial time” or P. This is shorthand for:

- nk (where k is a number)
- nk log(n) (where k is a number)
- k (where k is a constant)

Computers are really great at solving these types of problems. However, there are some problems that don’t lend themselves to these types of solutions.

A classic example of this is known as the traveling salesman problem. Say there is a salesman who has to travel to 100 specific cities in the US, and he wants to minimize the miles he has to travel. There are certain orders of cities that would be fairly stupid:

- Seattle
- Boston
- LA
- New York
- San Diego

If the salesman chose this order of cities, he would travel cross-country multiple times. It’s pretty clear that traveling as close to a straight line as possible would probably be a more optimal solution:

- Boston
- New York
- Seattle
- LA
- San Diego

In order to land on the optimal solution with 100% confidence, you need to evaluate every single combination of places. This can be reduced to something around the complexity of n factorial:

`O(n!)`

Check out the Big-O Complexity Chart to see how different Big-O formulas compare.

## Watch

Watch the following video.

[![algorithms](http://img.youtube.com/vi/6Gv8vg0kcHc/0.jpg)](http://www.youtube.com/watch?v=6Gv8vg0kcHc "algorithms")
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


