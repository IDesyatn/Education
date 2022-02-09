//найти минимальный элемент массива

module.exports = getMinElemArray;


function getMinElemArray(arr) {
     if (Array.isArray(arr) === false || !arr.length) {
        return 'Incorrect input data';
    }
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return 'Incorrect input data';
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min;
}