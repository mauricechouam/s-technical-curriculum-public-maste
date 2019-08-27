[Back to Contents](https://github.com/coding-boot-camp/cs-technical-curriculum/tree/master/async-content)

# Lesson Six: Time Algorithms

In this lesson, we will cover a variety of algorithms, including: constant time algorithms, linear time algorithms, and logarithmic algorithms.

## Read



##### Constant Time

Constant time just means it takes a certain amount of time to compute something. Things that perform in constant time usually perform pretty close to instantly. Take this code:

```
a = 4 + 5
```

Adding two numbers generally can be done in constant time. It doesn’t matter which two numbers are added together; it will always take the same amount of time. The same is true for multiplication:

```
 a = 4 * 5
```

This will also happen in constant time. This doesn’t mean it takes the same amount of time to add or multiply numbers– what it means is that even as the inputs get larger, it doesn’t take a longer amount of time to calculate. The performance of adding 4 and 5 is the exact same as adding 40 and 50. The performance of multiplying 4 * 5 is the same as multiplying 40 * 50. Even though we’re dealing with 10x the scale, the speed is the same.

This is constant time. It basically means computations that “happen pretty much instantly, but do take a bit of time.” Really, we’re talking about stuff that happens in a fraction of a microsecond here.

We say solutions that don’t change in amount of time to execute have a Big O of O(1), or constant time.

##### Linear Time

Linear algorithms scale linearly. This means the time it takes the algorithm to complete will be proportional to the number of items it needs to go through.

In a linear algorithm, 10 items will take roughly 10x the amount of time needed to process a single item.

In general, when an algorithm loops through items, it will take a linear progression, meaning the time it takes to complete will scale in a linear way.

Take the following JavaScript code:

![big o code](./assets/images/time1.png)

This code loops through an array of numbers and displays the sum to the screen. This algorithm performs in “n” time. This basically means:  
If it takes 1 second to perform this on 10 elements,  
It will probably take around 10 seconds to perform on 100 elements  
It will probably take around 100 seconds to perform on 1000 elements  
This means the runtime can be calculated using a math formula like this:

```
0.10 * n
```

Where n is the length of the input array. Technically assigning the sum variable the value 0 and displaying the sum to the screen will take time, too. Both of those tasks can be done in some constant amount of time. This means that the actual runtime will be:

```
0.10 * n + c + d
```

Where n is the length of the input array, c is the time it takes to assign a single variable, and d is the time it takes to display something to the screen. As the size of the array approaches infinity, these constants become pretty insignificant. That means we can drop them off of the formula, and the coefficient is generally dropped off, too. That means this algorithm’s runtime is:  
O(n)

##### Logarithmic Time

In a logarithmic algorithm, 10 items will take roughly 3.3x the time needed to process a single item. And 1,000 items will take about 10x the time needed to process a single item.

Say you have a standard phone book with 10,000 names in it, organized alphabetically. You can perform what’s known as a binary search algorithm on the phone book to find a specific entry the quickest.

The process is to open the book directly in the middle, determine which half of the phone book the specific entry you’re looking for is in, and eliminate the other half. Next, you’d split the book in half again, determine which half your entry is in, and eliminate another half of the remaining phone book.

If you perform this systematic splitting over and over again, you can find any specific listing with 14 or fewer comparisons, calculated with the formula log2(10,000). It might surprise you how few comparisons it would take.

Programmers describe this runtime as:

```
log(n)
```


## Watch

Watch the following video.

[![time algorithms](http://img.youtube.com/vi/KEEKn7Me-ms/0.jpg)](http://www.youtube.com/watch?v=KEEKn7Me-ms "time algorithms")

## Solve

 
> No challenge yet...
