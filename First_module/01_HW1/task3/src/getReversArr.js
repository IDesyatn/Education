//сделать реверс массива

module.exports = getReversArr;


function getReversArr(arr) {
     if (Array.isArray(arr) === false || !arr.length) {
        return 'Incorrect input data';
    }

    let rev = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        rev[rev.length - i - 1] = arr[i];
    }
    return rev;
}
