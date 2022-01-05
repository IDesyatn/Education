//найти индекс минимального элемента массива

module.exports = getIndexMinElemArray;


function getIndexMinElemArray(arr) {
    if (Array.isArray(arr) === false || !arr.length) {
        return 'Incorrect input data';
    }

    let min = arr[0];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return 'Incorrect input data';
        }
        if (arr[i] < min) {
            min = arr[i]
            index = i;
        }
    }
    return index;
}
