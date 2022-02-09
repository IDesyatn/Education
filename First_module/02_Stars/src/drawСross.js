module.exports = drawСross;

function drawСross() {
    let getStr = ''
    for (let i = 0; i < 7; i++){
        for (let j = 0; j < 7; j++){
            if (i == (6-j) || i == j) {
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

