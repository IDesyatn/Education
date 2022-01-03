module.exports = drawUppRightTrian;

function drawUppRightTrian() {
    let getStr = ''
    for (let i = 0; i < 7; i++){
        for (let j = 0; j < 7; j++){
            if (i == 0 || j == 6 || i == j) {
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

