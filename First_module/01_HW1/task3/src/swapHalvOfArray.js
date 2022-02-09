//Поменять местами первую и вторую половину массива(1 2 3 4 -> 3 4 1 2)

module.exports = swapHalvOfArray;


function swapHalvOfArray(arr) {
    if (Array.isArray(arr) === false || !arr.length) {
        return 'Incorrect input data';
    }

    let tmp = 0;
    
    if (arr.length % 2 == 0) {
        for (let i = 0; i < (arr.length / 2); i++) {
            tmp = arr[i];
            arr[i] = arr[i + arr.length / 2];
            arr[i + arr.length / 2] = tmp;
        }
    }
    else {
        let q = Math.round(arr.length / 2);
        for (let i = 0; i < q-1; i++) {
            tmp = arr[i];
            arr[i] = arr[i + q];
            arr[i + q] = tmp;
        }
    }
    return arr;
}
