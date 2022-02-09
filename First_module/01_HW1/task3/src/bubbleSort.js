//Отсортировать массив пузырьком, выбором, вставками

module.exports = bubbleSort;


function bubbleSort(arr) {
    if (Array.isArray(arr) === false || !arr.length) {
        return 'Incorrect input data';
    }
    for (let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== 'number'){
            return 'Incorrect input data';
        }
    }

    for (let i = 0, endI = arr.length - 1; i < endI; i++){
        let wasSwap = false;

        for (let j = 0, endJ = endI - i; j < endJ; j++){
            if (arr[j] > arr[j + 1]) {
                let swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
                wasSwap = true;
            }
        }

        if (!wasSwap)
            break; 
    }
    return arr;
}
