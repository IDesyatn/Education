//найти максимальный элемент массива

module.exports = getMaxElemArray;


function getMaxElemArray(arr) {
     if (Array.isArray(arr) === false || !arr.length) {
        return 'Incorrect input data';
    }

    let max=arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return 'Incorrect input data';
        }
        
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}
