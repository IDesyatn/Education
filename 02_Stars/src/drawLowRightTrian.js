module.exports = drawLowRightTrian;

function drawLowRightTrian() {
    let getStr = ''
    for (let i = 0; i < 7; i++){
        for (let j = 0; j < 7; j++){
            if (i == 6 || j == 6 || i == (6-j)) {
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

