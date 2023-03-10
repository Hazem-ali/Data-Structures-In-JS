class Node {
    constructor(value) {
        this.value = value;
        this.next = null;

    }
}



class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;

    }
    enqueue(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.first = this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;

    }
    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        const firstNode = this.first;
        this.first = this.first.next;
        this.length--;
        return firstNode;


    }
    isEmpty() {
        return (this.length === 0);
    }



}



const myQueue = new Queue();

myQueue.enqueue('myFirstElem').enqueue('mofty').enqueue('moftish');
console.log(myQueue)
myQueue.dequeue()
console.log(myQueue)