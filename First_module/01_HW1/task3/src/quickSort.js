module.exports = quickSort;

function quickSort(arr) {

    if (typeof arr === 'string' || typeof arr === 'number'|| !arr )  {
        return 'Incorrect input data';
    }

    for (let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== 'number'){
            return 'Incorrect input data';
        }
    }

    if (arr.length < 2) {
        return arr; 
    }
    let less = [];
    let greater = [];
    let middleNum = Math.round(arr.length / 2) - 1;
    let middle = arr[middleNum];
    
    for (let i = 0; i < arr.length; i++){
        if (i === middleNum) {
            continue; 
        }


        if (arr[i] < middle) {
            less.push(arr[i]);
        }
        else {
            greater.push(arr[i]); 
        }
    }

    return quickSort(less).concat(middle, quickSort(greater));
}

