//Сумма четных чисел и их количество от 1 до 99
function sumOfEvenNumFor() {
    let sum = 0;
    let num = 0; 
    for (let i = 1; i < 100; i++){
        if (i % 2 == 0) {
            sum = sum + i;
            num = num + 1; 
        }
    }
    
    return sum + ' ' + num;
}

function sumOfEvenNumWhile() {
    let sum = 0;
    let num = 0;
    let i = 1; 
    while (i < 100)
    {
        if (i % 2 == 0) {
            sum = sum + i;
            num = num + 1;
        }
        i++;
    }
    return sum + ' ' + num;
}

function sumOfEvenNumDoWhile() {
    let sum = 0;
    let num = 0;
    let i = 1; 
    do
    {
        if (i % 2 == 0) {
            sum = sum + i;
            num = num + 1;
        }
        i++;
    } while (i < 100)
    return sum + ' ' + num; 
}
console.log('For ' + sumOfEvenNumFor());
console.log('While ' + sumOfEvenNumWhile());
console.log('Do While ' + sumOfEvenNumDoWhile());


//Простое ли число? 
function checkPrimeNum(num) {
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
/*for (let i = 0; i < 101; i++) {
    console.log(i + ' ' + checkPrimeNum(i));
}*/


//Найти корень натурального числа
function binaryRootSearch(x) {
    let min = 1;
    let max = x;
    let pr = 0;
    for (; ;){
        let mid = (min + max) / 2;
        if (pr == mid) {
            return mid; 
        }
        let a = mid * mid;
        if (x == a)
            return mid;
        else if (x < a) {
            max = mid;
        }
        else {
                min = mid
        };
        
    }
}

function selectRootSearch(x) {
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

console.log('Корень '+ ' ' + binaryRootSearch(1150));
console.log('Корень'+ ' ' + selectRootSearch(1150));


//Найти факториал числа
function searchFactor(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++)
    {
        fact = fact * i; 
    }
    return fact; 
}
console.log(searchFactor(10));


//Найти сумму чисел заданного числа
function getNumbersSum(num){
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


//Получить зеркальное отражение числа
function getMirrorNumber(num) {
    let res = '';
    let tmp;

    while (num) {
        tmp = num % 10;
        num = (num - tmp) / 10;
        res += tmp; 
    }
    return res;
}
console.log(getMirrorNumber(345));
