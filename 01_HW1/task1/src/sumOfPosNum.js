//Найти суммы только положительных из трех чисел

module.exports = sumOfPosNum;

function sumOfPosNum(a, b, c) {
    if (typeof a !== 'number'||typeof b !== 'number' || typeof c !== 'number') {
        return 'Incorrect input data'; 
    }

    let sum = 0;
    if (a > 0) {
        sum = sum + a;}
    if (b > 0) {
        sum = sum + b;}
    if (c > 0) {
        sum = sum + c;}
    return sum;
}
