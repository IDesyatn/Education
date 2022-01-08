const buttonGenerate = document.getElementById('generate');
buttonGenerate.addEventListener('click', function (event) {
    readBeginEnd();
})
const buttonReset = document.getElementById('reset');
buttonReset.addEventListener('click', function (event) {
    reset();
})

let usedNum = [];
let min = 0; 
let max = 0;
let count = 0; 

function getRandomNum(begin, end) {   
        return Math.round(Math.random() * (end - begin) + begin);
}

function countingOutNum(begin, end) {   
    console.log(usedNum);
    let random = 0;
    for (let i = 0; ; i++) {
        random = getRandomNum(begin, end);
        if (!usedNum.sort().includes(random) && usedNum.length  === end - begin ) {
            usedNum.push(random);
            return 'Generated number:' + random + '. Elements are over';
        }
        if (!usedNum.sort().includes(random)) {
            usedNum.push(random);
            return 'Generated number:' + random;
        }
    }
}

function reset() {   
    usedNum = [];
    document.getElementById('generate').disabled = false;
    divHelper('');
    return usedNum;
}

function readBeginEnd() {  
    let begin = Number(document.getElementById("min").value);
    let end = Number(document.getElementById("max").value);

    if (isNaN(begin) || isNaN(end) || end < begin) {
        return divHelper('Range entered incorrectly');
    }

    if (begin !== min || end !== max) {
        min = begin; 
        max = end; 
        usedNum = []; 
    }

    if (usedNum.length === end - begin + 1) {
        endOfNumbers();
        return divHelper('Elements are over');
    }

    divHelper(countingOutNum(begin, end)); 
    return true;
}

function endOfNumbers() {
    document.getElementById('generate').disabled = true;
}

function divHelper(str){        
    let divHelper = document.getElementById('helper'); 
    divHelper.innerHTML = str;
    return true; 
}   



