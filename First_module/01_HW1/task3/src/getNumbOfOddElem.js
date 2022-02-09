//посчитать количество нечетных элементов массива

module.exports = getNumbOfOddElem;


function getNumbOfOddElem(arr) {
     if (Array.isArray(arr) === false || !arr.length) {
        return 'Incorrect input data';
    }
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] !== 'number') {
            return 'Incorrect input data';
        }
        
        if (arr[i] % 2 !== 0) {
            count += 1;
            console.log(arr[i] % 2);
        }
    }
    return count;
}


