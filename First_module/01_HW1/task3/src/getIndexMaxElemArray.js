//найти индекс максимального элемента массива

module.exports = getIndexMaxElemArray;

function getIndexMaxElemArray(arr) {
    if (Array.isArray(arr) === false || !arr.length) {
        return 'Incorrect input data';
    }
    let max = arr[0];
    let index = 0; 
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return 'Incorrect input data';
        }
        
        if (arr[i] > max) {
            max = arr[i]
            index = i; 
        }
    }
    return index;
}
