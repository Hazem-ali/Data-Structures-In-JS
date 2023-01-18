
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;

        this.tail = this.head;

        this.length = 1;
    }

    append(value) {

        const newNode = new Node(value);

        // the new addition
        newNode.prev = this.tail;

        this.tail.next = newNode;

        this.tail = this.tail.next;

        this.length++;

        return this;
    }
    prepend(value) {
        const newNode = new Node(value);

        
        newNode.next = this.head;

        // the new addition
        this.head.prev=newNode;
        
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
        const nextNode = prevNode.next;
        
        
        newNode.next = prevNode.next;
        
        // the new addition
        newNode.prev = prevNode;
        nextNode.prev = newNode;
        
        prevNode.next = newNode;

        this.length++;

        return this;

    }


    remove(index) {

        // TODO handle first and last element
        if (index === 0) {
            this.head = this.head.next;
        }
        else if (index === this.length - 1) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        else {

            const prevNode = this.traverseToIndex(index - 1);
            const nodeToDelete = prevNode.next;
            const followerNode = nodeToDelete.next;

            prevNode.next = followerNode;
            followerNode.prev = prevNode;

        }


        this.length--;

        return this;



    }





}


const myList = new DoublyLinkedList(10)

myList.append(15).append(20).prepend(1)

console.log(myList.printList())
myList.insert(2, 99)
console.log(myList.printList())
myList.remove(4)

console.log(myList.printList())