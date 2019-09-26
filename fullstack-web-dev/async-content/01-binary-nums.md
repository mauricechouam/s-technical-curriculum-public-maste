[Back to Contents](https://github.com/coding-boot-camp/cs-technical-curriculum/tree/master/async-content)

# Lesson One: Binary Numbers

At it’s core everything on a computer is stored in the format of a zero or a one in the form of a binary number. Understanding how binary numbers work can be useful in a lot of scenarios, including technical interviews.

## Read

They say there are 10 kinds of programmers: the kind who understands binary and the kind that doesn’t. If you don't get the joke, keep reading...

Binary is a number system that works by having only two digits: a zero digit, and a one digit. Sequences of zeros and ones allow you to count up.

Binary allows us to have representations of numbers, but doesn’t allow us to represent a sign of the number (positive or negative). To represent that, computer systems use a method called Two’s Complement, mostly because it makes the adding negative numbers and positive numbers work from a bitwise level.

You probably won’t ever be asked to perform mathematical operations on binary numbers, but being familiar with how the data works under-the-hood is something that will help you communicate as a developer (and be able to talk about the representation of data at the byte-level). It also isn’t terribly difficult to learn - you can probably teach yourself the basics in an afternoon.

You should be familiar enough with binary to be able to answer the following questions, with confidence:

- What is a byte?
- What is hexadecimal? Why is it useful?
- How are numbers stored on a computer?
- They say files, like MP3, are stored in data files called “binaries”. What the heck does that mean?
- What is ASCII? How is it different than UTF-16? What is character encoding?

You’ll probably never be asked explicitly these questions, but these are the building blocks of some questions that may come up, so you’ll want to be able to answer them. Questions like:

> Sort an array of bytes from smallest to largest.
> Sort an array of ASCII letters alphabetically.
> Make capital letters come before lowercase letters.

Working your way up from 0’s and 1’s to complex data representations will help you communicate like a programmer in an interview.

## Watch

Watch the following video.

[![hastables](http://img.youtube.com/vi/ry1hpm1GXVI/0.jpg)](https://youtu.be/ry1hpm1GXVI  "hashtables")


## Solve

 
> Solve these Problems
> - How do you represent the number 22 in binary?
> - How do you represent the number -22 in binary (using two's complement)?
> - How do you represent the number 22 in a hexadecimal?
> - Perform addition on these two binary numbers, to produce a third binary number:
> - 1101 + 10001
> - How many digits of binary is a byte? How many digits of hex is a byte?
> - Decode the following ASCII message: 0x4869205468657265. Hint! Look it up in this table, there's no need to memorize it.
