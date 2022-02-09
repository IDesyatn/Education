//Посчитать выражение (макс(а*б*с, а+б+с))+3

module.exports = maxABC;

function maxABC(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        return 'Incorrect input data'; 
    }
    let sum = a + b + c;
    let mult = a * b * c;
    return Math.max(sum, mult) + 3;
}
