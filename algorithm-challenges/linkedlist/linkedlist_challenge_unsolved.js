/**** TASK ***
Given an element and an index, create a function that inserts the element at the index in the linkedlist


SAMPLE INPUT
element = 5
index = 2
linkedlist = 3 99 16 13 1 7

SAMPLE OUTPUT
3 99 5 16 13 1 7

*/

class Node {
    // constructor
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

// linkedlist class
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // prints list
    // prints the list items
    printList() {
        var curr = this.head;
        var str = '';
        while (curr) {
            str += curr.element + ' ';
            curr = curr.next;
        }
        console.log(str);
    }

    // add(element)
    add(element) {
        // creates a new node
        var node = new Node(element);
        // to store current node
        var current;
        // if list is Empty add the
        // element and make it head
        if (this.head == null) this.head = node;
        else {
            current = this.head;

            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }

            // add node
            current.next = node;
        }
        this.size++;
        return node;
    }

    insertAt(element, index) {
        //*************************/
        //**** YOUR CODE HERE *****/
        //*************************/
    }
}

var myList = new LinkedList();
myList.add(100);
myList.add(200);
myList.add(300);
myList.add(400);
myList.add(500);
myList.printList();
// myList.insertAt(600, 1);
// myList.printList();
