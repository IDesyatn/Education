//Найти сумму чисел заданного числа

module.exports = getNumbersSum;

function getNumbersSum(num) {
    if (typeof num !== 'number') {
        return 'Icorrect input data';
    }

    if (num === 0) {
        return 0; 
    }

    if (num < 0) {
            num = num * (-1)
    }
    let result = 0;
    let tmp;
    
    while (num) {
        tmp = num % 10;
        num = (num - tmp) / 10; 
        result += tmp;
    }
    return result;
}
console.log(getNumbersSum(26));