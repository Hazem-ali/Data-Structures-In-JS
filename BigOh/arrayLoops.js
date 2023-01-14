const myArray = ['nemo', 'fish', 'dory'];


function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found Nemo');
        }
    }
}




const findNemoForEach = (array) => {
    array.forEach((fish) => {
        if (fish === 'nemo') {
            console.log('Found Nemo');
        }
        return;
    })
    return;
}


const findNemoForOf = (array) => {
    for (const fish of array) {
        if (fish === 'nemo') {
            console.log('Found Nemo');
        }
        return;
        
    }
    return;
}





findNemo(myArray);
findNemoForEach(myArray);
findNemoForOf(myArray);