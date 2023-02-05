
let calcsSlow = 0, calcsFast = 0,calcsFast2 = 0;
function fibonacciSlow(n) {
    // O(2^n)
    calcsSlow++;
    if (n < 2) {
        return n;
    }

    return fibonacciSlow(n - 1) + fibonacciSlow(n - 2);

}



function fibonacciFast() {
    // O(n)
    let cache = {};

    return function fib(n) {
        calcsFast++;
        if (n in cache) {
            return cache[n];

        }
        else {
            if (n < 2) {
                return n;
            }
            else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }

    }

}


// bottom up dynamic programming
function fibFast2(n) {
    let answer = [0, 1];
    for (let i = 2; i <= n; i++) {
        calcsFast2++;
        answer.push(answer[i - 2] + answer[i - 1]);
    }
    return answer.pop();
}


let fibFast = fibonacciFast();






let testFibonacci = 20;
console.log(`Fibonacci of ${testFibonacci}`); // Fibonacci of 20
console.log(`${fibonacciSlow(testFibonacci)} took ${calcsSlow} calculations`); // 6765 took 21891 calculations
console.log(`${fibFast(testFibonacci)} took ${calcsFast} calculations`); // 6765 took 39 calculations
console.log(`${fibFast2(testFibonacci)} took ${calcsFast2} calculations`); // 6765 took 19 calculations