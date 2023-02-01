function fibonacciRecursive(index) {
    // O(2^n) (Exponential) => Bad, needs dynamic programming
    if (index === 0 || index === 1) {
        return index;
    }
    return fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2);
}

function fibonacciIterative(index) {
    // O(n) (Linear)
    let arr = [0, 1];
    for (let i = 2; i <= index; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[index];
}


console.log(fibonacciRecursive(8));
console.log(fibonacciIterative(8));