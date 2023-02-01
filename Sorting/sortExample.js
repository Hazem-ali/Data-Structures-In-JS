const letters = ['a', 'b', 'z', 'e', 'r', 'b'];

const basket = [2, 65, 34, 2, 1, 7, 8];


basket.sort(function (a, b) {
    return a - b;
})

console.log(letters) // ['a', 'b', 'b', 'e', 'r', 'z']
console.log(basket) // [1, 2, 2, 34, 65, 7, 8]


