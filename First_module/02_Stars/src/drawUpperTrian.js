module.exports = drawUpperTrian;

function drawUpperTrian() {
    let getStr = ''
    for (let i = 0; i < 7; i++){
        for (let j = 0; j < 7; j++){
            if (i == 0) {
                 getStr = getStr + '  ' + '*'
            }
            else if ((i == j && i <= 3) || (i == (6-j) && i < 3)) {
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
