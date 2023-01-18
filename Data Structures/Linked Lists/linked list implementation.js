
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;

        this.tail = this.head;

        this.length = 1;
    }

    append(value) {

        const newNode = new Node(value);
        this.tail.next = newNode;

        this.tail = this.tail.next;

        this.length++;

        return this;
    }
    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;

        this.head = newNode;

        this.length++;

        return this;
    }

    printList() {
        const arr = [];

        let currentNode = this.head;
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return arr;
    }

    traverseToIndex(index) {

        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }



    insert(index, value) {
        if (index === 0) {
            return this.prepend(value);
        }

        if (index >= this.length) {
            // we can also raise an error
            return this.append(value);
        }

        const newNode = new Node(value);
        const prevNode = this.traverseToIndex(index - 1);


        newNode.next = prevNode.next;

        prevNode.next = newNode;

        this.length++;

        return this;

    }


    remove(index) {

        // TODO handle first and last element
        if (index === 0) {
            this.head = this.head.next;
        }
        else {

            const prevNode = this.traverseToIndex(index - 1);
            const nodeToDelete = prevNode.next;

            prevNode.next = nodeToDelete.next;

        }


        this.length--;

        return this;



    }



    reverse(){
        if (!this.head.next) {
            return this;
        }

        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while (second) {
            const temp = second.next;
            second.next = first; // this the line that reverses the list

            //these two lines for swapping the 2 vars to use the reverse above
            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first;




    }

}


const myList = new LinkedList(10)

myList.append(15).append(20).prepend(1)

console.log(myList.printList())
myList.insert(2, 99)

console.log(myList.printList())
myList.reverse()
console.log(myList.printList())
