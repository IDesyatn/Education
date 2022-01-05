//вводим строку, которя содержит число, написанное прописью(0-999)


module.exports = {getWordinNumber, getWordInNumberMoreNum}; 


function getWordinNumber(str) {

     if (typeof str !== 'string' || !str){
        return 'Введено неправильное число'
    }

    let spl = str.split(' ');
    let A1 = new Map([
        ['ноль', 0],
        ['один', 1],
        ['два', 2],
        ['три', 3],
        ['четыре', 4],
        ['пять', 5],
        ['шесть', 6],
        ['семь', 7],
        ['восемь', 8],
        ['девять', 9],
        ['одиннадцать', 11],
        ['двенадцать', 12],
        ['тринадцать', 13],
        ['четырнадцать', 14],
        ['пятнадцать', 15], 
        ['шестнадцать', 16],
        ['семнадцать', 17],
        ['восемнадцать', 18],
        ['девятнадцать', 19],
        ['десять', 10],
        ['двадцать', 20],
        ['тридцать', 30], 
        ['сорок', 40],
        ['пятьдесят', 50],
        ['шестьдесят', 60],
        ['семьдесят', 70], 
        ['восемьдесят', 80],
        ['девяносто', 90],
        ['сто', 100],
        ['двесте', 200],
        ['триста', 300],
        ['четыреста', 400],
        ['пятьсот', 500],
        ['шестьсот', 600],
        ['семьсот', 700],
        ['восемьсот', 800], 
        ['девятьсот', 900]
    ]);
    
    let number = 0;
    for( let i = 0; i < spl.length; i++){
        number += A1.get(spl[i]);
    }
    
    return number;
}


function getWordInNumberMoreNum(str) {
    
     if (typeof str !== 'string' || !str){
        return 'Введено неправильное число'
    }
    
    let spl = str.split(' '); 
    let tmp = 0; 
    let sum = 0;
    let length = spl.length; 
    for(let i = 0; i<length; i++){
        if(spl[0] == 'тысяч'|| spl[0] == 'тысяча'||spl[0] == 'тысячи'){
            tmp *= 1000;
            sum += tmp;
            tmp = 0; 
        }
        else if(spl[0] == 'миллион'|| spl[0] == 'миллиона'||spl[0] == 'миллионов'){
            tmp *= 1000000;
            sum += tmp;
            tmp = 0; 
        }
        else if(spl[0] == 'миллиард'|| spl[0] == 'миллиарда'||spl[0] == 'миллиардов'){
            tmp *= 1000000000;
            sum += tmp;
            tmp = 0; 
        }
        else{
            tmp += getWordinNumber(spl[0]);
        }
        spl.shift();
    }
    sum += tmp;
    return sum; 
}

console.log(getWordInNumberMoreNum('девять миллиардов пятьдесят шесть миллионов сто двадцать тысяч двесте семь'));
