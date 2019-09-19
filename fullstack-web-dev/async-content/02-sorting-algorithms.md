[Back to Contents](https://github.com/coding-boot-camp/cs-technical-curriculum/tree/master/async-content)

# Lesson Two: Sorting Algorithms

Sorting algorithms make up a big part of what computer scientists study. Out of sheer un-imaginativeness, sometimes writing a sorting algorithm is asked on technical interviews simply because the interviewer can’t think of anything more creative to ask.

## Read

Sorting algorithms are one of the corner stones of modern day CS algorithm courses. Most computer science students will spend a good period of time learning the mechanics of the different algorithms and use cases where they excel and fall short. There are a bunch of different ones out there:

-   Insertion sort
-   Selection sort
-   Merge sort
-   Heap sort
-   Quicksort
-   Bubble sort (one of the least efficient)
-   Binary tree sort

Spending hundreds of hours studying these is probably overkill. But you should be able to pull at least one sorting algorithm out of a hat if you’re ever given the question:

Binary allows us to have representations of numbers, but doesn’t allow us to represent a sign of the number (positive or negative). To represent that, computer systems use a method called  _Two’s Complement_, mostly because it makes the adding negative numbers and positive numbers work from a bitwise level.

You probably won’t ever be asked to perform mathematical operations on binary numbers, but being familiar with how the data works under-the-hood is something that will help you communicate as a developer (and be able to talk about the representation of data at the byte-level). It also isn’t terribly difficult to learn - you can probably teach yourself the basics in an afternoon.

You should be familiar enough with binary to be able to answer the following questions, with confidence:

-   What is a byte?
-   What is hexadecimal? Why is it useful?
-   How are numbers stored on a computer?
-   They say files, like MP3, are stored in data files called “binaries”. What the heck does that mean?
-   What is ASCII? How is it different than UTF-16? What is character encoding?

You’ll probably never be asked explicitly these questions, but these are the building blocks of some questions that may come up, so you’ll want to be able to answer them. Questions like:

  > Sort an unordered array of integers without using a built-in sort method.

Insertion sort and binary tree sort algorithms are pretty intuitive and easy to learn, so I suggest learning one of them.

Also here are a couple of facts you should know about sorting algorithms.

Some sorting algorithms have the best runtime on collections that are already sorted (or nearly sorted).

The algorithmic complexity of the sorting algorithm isn’t always used to select which case, because oftentimes the “worst case” is an outlier and the “average case” performs better.

## Watch

Watch the following video provided by HackerRank.

[![algorithms](http://img.youtube.com/vi/SLauY6PpjW4/0.jpg)](https://youtu.be/SLauY6PpjW4  "sorting algorithms")


## Solve

  

> Using your knowledge of sorting algorithms, such as Bubble Sort, take unsorted array below and write a program to sort it. 
>
> Do not use a solution from the Internet!

```
const unsortedArray = [601, 670, 49, 286, 354, 12, 552, 412, 860, 163, 448, 94, 160, 344, 989, 634, 70, 205, 113, 443, 156, 107, 168, 239, 643, 554, 655, 473, 727, 389, 591, 683, 406, 340, 713, 979, 572, 180, 499, 952, 750, 505, 197, 371, 202, 150, 642, 3, 689, 930, 958, 290, 260, 228, 521, 418, 192, 804, 756, 172, 386, 292, 638, 84, 622, 251, 974, 798, 794, 956, 317, 66, 28, 278, 196, 17, 853, 920, 746, 157, 535, 314, 836, 291, 966, 361, 661, 598, 250, 641, 365, 623, 97, 11, 211, 76, 396, 187, 980, 198, 630, 662, 315, 779, 928, 649, 188, 817, 144, 569, 43, 136, 783, 549, 880, 472, 426, 712, 844, 932, 342, 911, 737, 424, 959, 483, 904, 859, 883, 255, 757, 990, 234, 977, 912, 210, 531, 226, 73, 399, 901, 547, 60, 8, 336, 588, 872, 308, 592, 181, 36, 824, 545, 295, 885, 487, 544, 926, 416, 524, 671, 200, 82, 803, 513, 777, 253, 838, 831, 138, 206, 162, 99, 366, 392, 615, 377, 242, 89, 491, 87, 611, 819, 170, 427, 142, 856, 792, 327, 847, 690, 739, 90, 640, 788, 261, 961, 969, 770];
```

