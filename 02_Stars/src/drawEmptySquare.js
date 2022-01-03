module.exports = drawEmptySquare;

function drawEmptySquare() {
    let getStr = ''
    for (let i = 0; i < 7; i++){
        for (let j = 0; j < 7; j++){
            if (i == 0 || i == 6 || j == 0 || j == 6) {
                 getStr = getStr + '  ' + '*'
            }
             else {
                getStr = getStr + '  '+ ' '; 
            }
        }
        getStr = getStr + '\n';  
    }
    return getStr; 
}

console.log(drawEmptySquare());