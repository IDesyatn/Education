//Простое ли число?
module.exports = checkPrimeNum;

function checkPrimeNum(num) {
    if (typeof num !== 'number') {
        return false;
    }
    let bool = true;
    if (num <= 1) { bool = false; }
    else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0)
                bool = false;
        }
    }
    return bool; 
}
