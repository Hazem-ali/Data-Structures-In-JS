function firstRecurringChar(input) {
    let map = {};

    for (let i = 0; i < input.length; i++) {
        if (map[input[i]]) {
            return input[i];
        }
        else {
            map[input[i]] = true;
        }
        console.log(map);
    }
    return undefined;

} // O(n)

console.log(firstRecurringChar([2, 5, 5, 2, 3, 5, 1, 2, 4]));


