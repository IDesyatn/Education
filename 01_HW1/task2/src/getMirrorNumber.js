//Получить зеркальное отражение числа
module.exports = getMirrorNumber;

function getMirrorNumber(num) {
     if (typeof num !== 'number') {
        return 'Icorrect input data';
    }
    if (num === 0) {
        return '0'; 
    }
    if (num < 0) {
            num = num * (-1)
    }
    let res = '';
    let tmp = 0;

    while (num) {
        tmp = num % 10;
        num = (num - tmp) / 10;
        res += tmp;
    }
    return res;
}

