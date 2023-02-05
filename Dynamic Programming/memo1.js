

function addTo80(n) {
    console.log('long time');
    return n + 80;
}


let cache = {};

function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n];
    }
    else {
        console.log('long time');
        cache[n] = n + 80;
        return cache[n];
    }
}


console.log('1: ', memoizedAddTo80(5)); // calculated here
console.log('2: ', memoizedAddTo80(5)); // reused here
console.log('3: ', memoizedAddTo80(5)); // reused here
console.log('4: ', memoizedAddTo80(5)); // reused here