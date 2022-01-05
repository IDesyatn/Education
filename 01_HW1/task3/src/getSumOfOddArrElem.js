//посчитать сумму элементов массива с нечетными индексами

module.exports = getSumOfOddArrElem;


function getSumOfOddArrElem(arr) {
    if (Array.isArray(arr) === false || !arr.length) {
        return 'Incorrect input data';
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return 'Incorrect input data';
        }
        if (i % 2 !== 0 && i !== 0) {
            sum = sum + arr[i]; 
        }
    }
    return sum;
}