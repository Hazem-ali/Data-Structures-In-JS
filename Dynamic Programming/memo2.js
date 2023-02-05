

function addTo80(n) {
    console.log('long time');
    return n + 80;
}



function memoizedAddTo80() {
    let cache = {}; // here we used function closure to keep cache variable existing once

    return function (n) {
        if (n in cache) {
            return cache[n];
        }
        else {
            console.log('long time');
            cache[n] = n + 80;
            return cache[n];
        }
    }
}


const memoized = memoizedAddTo80();

console.log('1: ', memoized(5)); // calculated here
console.log('2: ', memoized(5)); // reused here
console.log('3: ', memoized(5)); // reused here
console.log('4: ', memoized(5)); // reused here