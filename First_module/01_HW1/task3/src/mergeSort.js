module.exports = mergeSort;

  function mergeSort(arr) {
     if (Array.isArray(arr) === false || !arr.length) {
        return 'Incorrect input data';
    }
    for (let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== 'number'){
            return 'Incorrect input data';
        }
    }

    if (arr.length <= 1) {
        return arr;
    }

    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));

}

function merge(arrFirst, arrSecond) {

    let arrSort = [];
    let j = 0;
    let i = 0;

    while (i < arrFirst.length && j < arrSecond.length) {
        arrSort.push(
            (arrFirst[i] < arrSecond[j]) ?
                arrFirst[i++] : arrSecond[j++]
        );
    }

    return [
        ...arrSort,
        ...arrFirst.slice(i),
        ...arrSecond.slice(j)
    ];
}

//console.log(mergeSort([3, 8, 5, 2, 7, -6, 1]));