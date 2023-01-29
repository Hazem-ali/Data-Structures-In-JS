


class Stack {

    constructor() {
        this.array = [];

    }

    peek() {
        return this.array[this.array.length - 1];

    }
    push(value) {

        this.array.push(value);
        return this;

    }
    pop() {

        return this.array.pop();

    }



}




const myStack = new Stack();

myStack.push('google').push('udemy').push('coursera')

console.log(myStack)
// console.log(myStack.peek())

myStack.pop()
myStack.pop()
myStack.pop()
console.log(myStack)