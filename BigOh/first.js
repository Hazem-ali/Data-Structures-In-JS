let spacelessFunction = (n) => {
    for (let i = 0; i < n.length; i++) {
        console.log('Booooo! this is function of space complexity O(1)')
    }
}

spacelessFunction([1, 2, 3, 4, 5]);



let arrayofHelloNTimes = (n) => {
    let helloArray = [];
    for (let i = 0; i < n; i++) {
        helloArray[i] = 'Hello';
    }
    return helloArray;
}



console.log(arrayofHelloNTimes(60))
