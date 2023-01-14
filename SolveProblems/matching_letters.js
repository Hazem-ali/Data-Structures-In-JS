// Given 2 arrays, create a function that lets user know (true/false) whether
// these two arrays contain any common items
// For Example
// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'i']
// should return false
// -------------------
// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'x']
// should return true


const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'i']


// Naive Approach
let isContainsCommonItem = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }

    return false;
}

let isContainsCommonItem_Better = (arr1, arr2) => {
    let arr1_map = {};
    for (let i = 0; i < arr1.length; i++) {
        arr1_map[arr1[i]] = true;
    }

    for (let i = 0; i < arr2.length; i++) {
        if (arr1_map[arr2[i]]) {
            return true;
        }
    }


    return false;
}


console.log(isContainsCommonItem(array1, array2))
console.log(isContainsCommonItem_Better(array1, array2))
