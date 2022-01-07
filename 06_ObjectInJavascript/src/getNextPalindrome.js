module.exports = getNextPalindrome; 


function getNextPalindrome(num) {
    if (typeof num !== 'number'){
        return 'Incorrect input data'
    }

    if (num < 11) {
        return 11;
    }

    for (let i = num + 1; ; i++){
        if (i.toString().split('').reverse().join('') === i.toString())
            return i;
    }
}