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

    // insertAt(element, location)
    // insert element at the position index
    // of the list
    insertAt(element, index) {
        // if the index given is greater than 0 and the index is greater than the current size of the linkedlist
        // return false and exit
        if (index > 0 && index > this.size) return false;
        else {
            // create a new node with the value that was given
            var node = new Node(element);
            var curr, prev;

            curr = this.head;

            // add the element to the first index
            if (index == 0) {
                // if the index is 0, then the node becomes the head
                node.next = head;
                this.head = node;
            } else {
                // if the index is not 0, then iterate over the list using a while loop to insert it at the
                // respective position
                curr = this.head;
                var i = 0;
                while (i < index) {
                    i++;
                    prev = curr;
                    curr = curr.next;
                }

                // adding an element
                node.next = curr;
                prev.next = node;
            }

            // increase the size of the list
            this.size++;
        }
    }
}

var myList = new LinkedList();
myList.add(100);
myList.add(200);
myList.add(300);
myList.add(400);
myList.add(500);
myList.printList();
myList.insertAt(600, 1);
myList.printList();
