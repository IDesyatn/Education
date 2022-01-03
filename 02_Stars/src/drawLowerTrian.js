module.exports = drawLowerTrian;

function drawLowerTrian() {
    let getStr = ''
    for (let i = 0; i < 7; i++){
        for (let j = 0; j < 7; j++){
            if (i == 6) {
                 getStr = getStr + '  ' + '*'
            }
            else if ((i == j && i >= 3) || (i == (6-j) && i > 3)) {
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

console.log(drawLowerTrian());
