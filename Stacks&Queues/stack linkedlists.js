class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;

    }
}


class Stack {

    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;

    }

    peek() {
        return this.top;

    }
    push(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.top = this.bottom = newNode;
        }
        else {
            const oldTop = this.top;
            this.top = newNode;
            this.top.prev = oldTop;
        }
        this.length++;
        return this;

    }
    pop() {

        if (!this.top) {
            return null;
        }

        if (this.top === this.bottom) {
            this.bottom = null;
        }
        const poppedNode = this.top;
        this.top = this.top.prev;
        this.length--;

        return poppedNode

    }
    isEmpty() {
        return (this.length === 0);
    }


}




const myStack = new Stack();

myStack.push('google').push('udemy').push('coursera')

console.log(myStack)
console.log(myStack.peek())

myStack.pop()
myStack.pop()
myStack.pop()
console.log(myStack)