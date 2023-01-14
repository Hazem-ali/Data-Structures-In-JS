const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage

// push
strings.push('e'); // O(1)

// pop
strings.pop(); // O(1)


// unshift (add element to front of array)
strings.unshift('x'); // O(n)


// splice is to add element in a certain index
// 1st @param is the required index to add data
// 2nd @param is number of items to be deleted
// 3rd @param is the data to be added
// Splice is O(n)

strings.splice(2, 0, 'alien')


console.log(strings) 