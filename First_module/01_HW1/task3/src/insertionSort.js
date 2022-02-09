module.exports = insertionSort;

function insertionSort(arr) {
    if (Array.isArray(arr) === false || !arr.length) {
        return 'Incorrect input data';
    }

    for (let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== 'number'){
            return 'Incorrect input data';
        }
    }

    let l = arr.length; 
    
    for (let i = 1; i < l; i++){
        const curr = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > curr) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = curr;
    }
    return arr;
}
