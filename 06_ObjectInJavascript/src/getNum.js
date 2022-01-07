module.exports = getNum; 

function getNum(arr) {
    if (!Array.isArray(arr) || !arr || arr.length < 3) {
        return 'Incorrect input data';
    }
    
    const odd = arr.filter(el => el % 2 !== 0);
    const even = arr.filter(el => el % 2 === 0);
    if (odd.length === 1) {
        return odd[0];
    }
    else if (even.length === 1) {
        return even[0];
    }
    else {
        return 'Number of even and odd numbers is greater than 1'
    }
}

