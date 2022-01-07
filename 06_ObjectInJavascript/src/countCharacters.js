module.exports = countCharacters; 

function countCharacters(str) {
    if (!str || typeof str !== 'string') {
        return 'Incorrect input data'
    }
    let strOnlyLet = str.replace(/[^a-zа-я0-9]+/g, '');
  
    let obj = {};
    for (let i = 0; i < strOnlyLet.length; i++){
        if (typeof obj[strOnlyLet[i]] === "undefined") {
            obj[strOnlyLet[i]] = 1;
        }
        else {
            obj[strOnlyLet[i]] = obj[strOnlyLet[i]] + 1;
        }
    }
    return obj;
}


