module.exports = drawFilledSquare;

function drawFilledSquare() {
    let getStr = ''
    for (let i = 0; i < 7; i++){
        for (let j = 0; j < 7; j++){
            getStr = getStr + '  ' + '*'
        }
        getStr = getStr + '\n';  
    }
    return getStr;
}

console.log(drawFilledSquare());