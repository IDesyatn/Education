module.exports = getSum;

function getSum(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        return 'Incorrect input data';
    }

    let numArr1 = str1.split('').map(Number);  
    let numArr2 = str2.split('').map(Number);
    let tmp = [];
    if (numArr2.length > numArr1.length) {
        tmp = numArr1;
        numArr1 = numArr2;
        numArr2 = tmp;
    }

    let sum = [];
    let tmp2 = 0;
    for (let i = numArr1.length-1, j = numArr2.length-1, count = 0; count <= i; count++){

        if (tmp2 > 0) {
            numArr1[i - count] = numArr1[i - count] + 1; 
            tmp2 = 0;
        }

        if (j < count) {
            sum[i - count] =  numArr1[i - count] ;
        }
        else if (numArr2[j - count] + numArr1[i-count] >= 10) {
            tmp2 = 1; 
            sum[i - count] = (numArr2[j - count] + numArr1[i - count]) % 2; 
        }
        else {
            sum[i - count] =  numArr2[j - count] + numArr1[i - count];
        }
    }

    if (tmp2 !== 0) {
        sum.unshift(tmp2);
    }    
    return sum.join('');
}





console.log(getSum('599', '40135'));