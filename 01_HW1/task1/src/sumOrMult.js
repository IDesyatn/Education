// Если а – четное посчитать а*б, иначе а+б
module.exports = sumOrMult;

function sumOrMult(a, b) {
     if (typeof a !== 'number'||typeof b !== 'number') {
        return 'Incorrect input data'; 
     }
     if (a === 0){
          return a + b; 
     }
     return (a % 2 == 0 ) ? a * b : a + b; 
}