//Вводим число(0-999) и получаем строку с прописью числа

module.exports = {getNumberInWord, getNumberInWordMoreNum}; 


function getNumberInWord(num) {
    if ( (isNaN(num))|| (num < 0) || (num > 999) || (parseInt(num) != num)) {
        return 'Введено неправильное число';
    }
    
    let c = num % 10;  //0
    let b = (num - c) % 100 / 10;  //2
    let a = (num - b*10 - c) / 100; //7
    let A1 = ['ноль','один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    let A2 = ['одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать','шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    let A3 = ['десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят','шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    let A4 = ['сто', 'двесте', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
    if (num >= 0 && num <= 9) {
        return A1[num];
    }
    else if (num > 10 && num < 20) {
        return A2[num - 11];
    }
    else if (num >= 10 && num <= 90 && num % 10 == 0) {
        return A3[num / 10 - 1];
    }
    else if (num > 20 && num < 100 && num % 10 != 0) {
        return A3[b - 1] + ' ' + A1[c];
    }
    else if (num >= 100 && num <= 900 && num % 100 == 0) {
        return A4[num / 100 - 1];
    }
    else if (num > 100 && num < 1000 && num % 100 != 0 && num % 10 == 0) {
        return A4[a - 1] + ' ' + A3[b - 1];
    }
    else if (num > 100 && num < 1000 && b == 0 && c != 0) {
        return A4[a - 1] + ' ' + A1[c];
    }
    else if (num > 100 && num < 1000 && b == 1 && c != 0) {
        return A4[a - 1] + ' ' + A2[c - 1];
    }
    else
        return A4[a - 1] + ' ' + A3[b - 1] + ' ' + A1[c];
}



function getNumberInWordMoreNum(num) { 
    
    if ( (isNaN(num))|| (num < 0) || (num > 999000000000) || (parseInt(num) != num)) {
        return 'Введено неправильное число';
    }
    if (num < 1000) {
        return getNumberInWord(num);
    }
    let sNum = num.toString(); 
    let arr = sNum.split(''); 
    let length = arr.length; 
    let temp, count = 0; 
    let result = '';   
    

    for( let i=length-1; i>=0; i--){
        temp = arr[i]+temp; 
        count += 1; 
        switch(count){
            case 3: {
                temp = parseInt(temp, 10)
                if (temp == 0)
                    break;
                result = getNumberInWord(temp);
                temp = ''; 
                break;
            };
            case 4 :{
                if(arr[i] == 0){
                    if(arr[i-1] == 0){
                        if(arr[i-2]==0)
                        break;
                    }
                }
                switch(parseInt(arr[i],10)){
                case 1: result = ' тысяча ' + result; break; 
                case 2:
                case 3: 
                case 4: result = ' тысячи ' + result; break; 
                default: result = ' тысяч ' + result;}
                break;
            };
            case 7:{
                if(arr[i] == 0){
                    if(arr[i-1] == 0){
                        if(arr[i-2]==0)
                        break;
                    }
                }
                switch(parseInt(arr[i],10)){
                    case 1: result = ' миллион ' + result;break;  
                    case 2:
                    case 3: 
                    case 4: result = ' миллиона ' + result; break; 
                    default: result = ' миллионов ' + result; 
                }
                break;
            };
            case 10:{
                if(arr[i] == 0){
                    if(arr[i-1] == 0){
                        if(arr[i-2]==0)
                        break;
                    }
                }
                switch(parseInt(arr[i],10)){
                    case 1: result = ' миллиард ' + result; break; 
                    case 2:
                    case 3: 
                    case 4: result = ' миллиарда ' + result; break; 
                    default: result = ' миллиардов ' + result; 
                }
                break;
            };
            case 6:
            case 9:
            case 12:{
                temp = parseInt(temp, 10);
                if (temp == 0){
                    temp = '';
                    break;
                }
                result = getNumberInWord(temp) + result;
                temp = '';
            };
            break;
        }
    }

    if(temp > 0){
        result = getNumberInWord(temp) + result;
    }
    
    return result;
}

console.log(getNumberInWordMoreNum(387456783))