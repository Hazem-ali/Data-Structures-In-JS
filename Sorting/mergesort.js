const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {

    if (array.length === 1) {
        return array;
    }
    // split the array into right and left

    const length = array.length;
    const middle = Math.floor(length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    console.log(left)
    console.log(right)
    console.log('------------------------------')
    return merge(mergeSort(left), mergeSort(right));


}

function merge(left, right) {
    let leftIndex = 0, rightIndex = 0;
    let result = [];
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // fill remaining left array if any
    if (leftIndex !== left.length) {
        while (leftIndex < left.length) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
    }

    // fill remaining right array if any
    if (rightIndex !== right.length) {
        while (rightIndex < right.length) {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }


    console.log('Merged => ',result)
    return result
}



console.log(mergeSort(numbers))

