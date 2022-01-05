module.exports = selectionSort;

function selectionSort(arr) {
     if (Array.isArray(arr) === false || !arr.length) {
        return 'Incorrect input data';
    }
    for (let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== 'number'){
            return 'Incorrect input data';
        }
    }

    let l = arr.length;
    for (let i = 0; i < (l - 1); i++){
        let min = i;
        for (let j = i + 1; j < l; j++){
            if (arr[min] > arr[j]) {
                min = j; 
            }
        }
        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}
