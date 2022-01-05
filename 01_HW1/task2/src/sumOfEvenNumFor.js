//Сумма четных чисел и их количество от 1 до 99

module.exports = sumOfEvenNumFor;

function sumOfEvenNumFor(n) {
    if (typeof n !== 'number' || n < 1) {
        return 'Incorrect input data';
    }

    let sum = 0;
    let count = 0; 
    for (let i = 1; i <= n; i++){
        if (i % 2 == 0) {
            sum = sum + i;
            count = count + 1; 
        }
    }
    
    return sum + ' ' + count;
}

console.log(sumOfEvenNumFor(1));