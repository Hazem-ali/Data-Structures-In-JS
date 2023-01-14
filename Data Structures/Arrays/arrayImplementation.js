class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];

        }

        // deleting last item
        delete this.data[this.length - 1];
        this.length--;
    }


}


const arr= new MyArray();

arr.push('hello');
arr.push('hi');
arr.push('!');
console.log(arr);
arr.delete(1);
console.log(arr);
console.log(arr.pop());
console.log(arr);


