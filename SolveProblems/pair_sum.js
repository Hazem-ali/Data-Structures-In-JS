
// Problem: One array [1, 2, 4, 4] and Sum = 8
// we want to know if we have two elements in the array that give that sum



// Naive
function hasPairWithSum(arr, sum) {
    var len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] === sum) {
                return true;
            }
        }
    }
    return false;
}


// Better
function hasPairWithSum2(arr, sum) {
    const mySet = new Set();
    var len = arr.length;

    for (let i = 0; i < len; i++) {
        if (mySet.has(arr[i])) {
            return true;
        }

        mySet.add(sum - arr[i]);
    }
    return false;
}