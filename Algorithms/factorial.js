

function factorialRecursive(number) {
    // base case
    if (number === 1) {
        return number;
    }

    // recursive case
    return number * factorialRecursive(number - 1);
}
function factorialIterative(number) {
    answer = 1;
    while (number > 1) {
        answer *= number;
        number--;
    }
    return answer;
}



console.log(factorialRecursive(9));
console.log(factorialIterative(9));