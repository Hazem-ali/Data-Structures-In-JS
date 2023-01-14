function mergeSortedArrays(arr1, arr2) {

    // if (arr1 == []) return arr2;
    // if (arr2 == []) return arr1;
    let i = 0, j = 0;
    let mergedArray = [];
    const arr1_length = arr1.length;
    const arr2_length = arr2.length;
    
    while (i < arr1_length && j < arr2_length) {
        if (i == arr1_length) {
            mergedArray.push(arr2[j]);
            j++;
            continue;

        } else if (j == arr2_length) {
            mergedArray.push(arr1[i]);
            i++;
            continue;
        }
        else {
            if (arr1[i] < arr2[j]) {
                mergedArray.push(arr1[i]);
                i++;
            } else {
                mergedArray.push(arr2[j]);
                j++;
            }

        }
    }

    return mergedArray;
}


console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));