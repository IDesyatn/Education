//Найти корень натурального числа

module.exports = { binaryRootSearch, selectRootSearch };

function binaryRootSearch(x) {
    if (typeof x !== 'number' || x < 1) {
        return 'Incorrect input data';
    }

    let min = 1;
    let max = x;
    let pr = 0;
    for (; ;){
        let mid = (min + max) / 2;
        if (pr === mid) {
            return parseInt(mid); 
        }
        let a = mid * mid;
        if (x === a)
            return parseInt(mid);
        if (x < a) {
            max = mid;
        }
        else {
            min = mid;
        }
        pr = mid;
    }
}

function selectRootSearch(x) {
    if (typeof x !== 'number' || x < 1) {
        return 'Incorrect input data';
    }

    let q = 0;
    for (let i = 1; ; i++){
        q = i * i;
        if (x == q)
            return i;
        if (x < q) {
            return i - 1;
        }
    }
}

for (let i = 10; i < 100; i++) {
 console.log('Корень ' + ' ' + binaryRootSearch(i));
    console.log('Корень' + ' ' + selectRootSearch(i));
}
