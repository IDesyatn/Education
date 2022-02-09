
let attemptsNum = 0;
let conceivedNum = 0;
let countGames = 0;
let lastAttemptNum = 0;
let startOfRange = 0;
let endOfRange = 0; 


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}



function firstStep() {
    startOfRange =  Number(document.getElementById("startOfRange").value);
    endOfRange = Number(document.getElementById("endOfRange").value);
    attemptsNum = Number(document.getElementById("attemptsNum").value);
    let divNaN = document.getElementById('NaNErr'); 
    divNaN.innerHTML = "";
    

    if (isNaN(startOfRange) || isNaN(endOfRange) || isNaN(attemptsNum)) {
        divNaN.innerHTML = "Надо цифры";
        return false;
    }
    else if (startOfRange < 1 || startOfRange > 200 || endOfRange < 1 || endOfRange > 200) {
        divNaN.innerHTML = "Границы должны быть больше 0 и меньше или равны 200";
        return false; 
    }
    else if (startOfRange >= endOfRange) {
        divNaN.innerHTML = "Начало диапазона должно быть меньше конца";
        return false;
    }
    else if (attemptsNum < 1 || attemptsNum > 15) {
        divNaN.innerHTML = "Количество попыток может быть от 1 до 15";
        return false;
    }
    else if (Number.isInteger(attemptsNum) === false || Number.isInteger(startOfRange) === false || Number.isInteger(endOfRange) === false) {
        divNaN.innerHTML = "Число должно быть целым";
        return false;
    }

    conceivedNum = getRandomIntInclusive(endOfRange, startOfRange); 


    document.getElementById('inputButton').disabled = true;
    document.getElementById('startOfRange').disabled = true;
    document.getElementById('endOfRange').disabled = true;
    document.getElementById('attemptsNum').disabled = true;
    document.getElementById('guessButton').disabled = false;
    document.getElementById('guessInput').disabled = false;
    document.getElementById('begin').innerHTML = startOfRange;
    document.getElementById('end').innerHTML = endOfRange;

     
  
    document.getElementById('secondDiv').style.display = "flex";


    document.getElementById('count').innerHTML = endingNumbOfAttemp(attemptsNum);
    
}

function guessTheNumber() {
    document.getElementById('divHelper').hidden = false;
    divHelper = document.getElementById('divHelper');
    divHelper.innerHTML = "";
    document.getElementById('divHelper').hidden = false;
    let currNum = Number(document.getElementById('guessInput').value);
    let differenceCurr = 0;
    let differenceLast = 0; 
    
    if (isNaN(currNum)) {
        divHelper.innerHTML = "Надо вводить цифры";
        return false;
    }
    else if (currNum === 0) {
         divHelper.innerHTML = "Поле не может быть пустым и значение не может равняться 0";
        return false;
    }
    else if (currNum < startOfRange || currNum > endOfRange) {
        divHelper.innerHTML = "Выходишь за границы";
        return false;
    }
    else if (Number.isInteger(currNum) === false) {
        divHelper.innerHTML = "Число должно быть целым";
        return false;
    }
    

    countGames = countGames + 1;

    if (currNum === conceivedNum) {
        divHelper.innerHTML = 'Поздравляю, ты угадал задуманное число за ' + endingNumbOfAttemp(countGames) + '! Можешь нажать кнопку выход и сыграем еще раз)';
        document.getElementById('guessInput').disabled = true;
        document.getElementById('guessButton').disabled = true;
        return false; 
    }
    else if (countGames == 1) {
        divHelper.innerHTML = "К сожалению неверно, давай еще раз. Количество оставшихся попыток: " + (attemptsNum - countGames);
        lastAttemptNum = currNum;
        return false;
    }
    else if( attemptsNum == countGames) {
        divHelper.innerHTML = 'К сожалению, тоже неверно и у тебя закончились попытки, но ты можешь сыграть еще раз. P.s. загаданное число было ' + conceivedNum;
        document.getElementById('guessInput').disabled = true;
        document.getElementById('guessButton').disabled = true;
        return false;
    }
    
    differenceCurr = Math.abs(currNum - conceivedNum);
    differenceLast = Math.abs(lastAttemptNum - conceivedNum);
    

    lastAttemptNum = currNum;
    
    if (differenceCurr === differenceLast) {
        divHelper.innerHTML = "Ты всё так же далек от цели, соберись! Количество оставшихся попыток: " + (attemptsNum - countGames);
        return false; 
    }
    else if (differenceCurr < differenceLast) {
        divHelper.innerHTML = "Не угадал, но теплее!!! Количество оставшихся попыток: " + (attemptsNum - countGames);
        return false;
    }
    else if (differenceCurr > differenceLast){
        divHelper.innerHTML = "Не угадал, холоднее... Количество оставшихся попыток:" + (attemptsNum - countGames);
        return false;
    }

}

function endingNumbOfAttemp(count) {
    if (count === 1) {
        return "1 попытку";
    }
    else if (count === 2 || count === 3 || count === 4) {
        return count + " попытки";
    }
    else {
        return count + " попыток";
    }

}

function exit() {
    document.getElementById('inputButton').disabled = false;
    document.getElementById('startOfRange').disabled = false;
    document.getElementById('endOfRange').disabled = false;
    document.getElementById('attemptsNum').disabled = false;
    document.getElementById('guessInput').value = '';
    document.getElementById('divHelper').hidden = true;
    conceivedNum = 0;
    attemptsNum = 0;
    countGames = 0;
    document.getElementById('secondDiv').style.display = "none";
}






