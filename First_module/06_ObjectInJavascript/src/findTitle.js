module.exports = findTitle; 

function findTitle(array, str) {
    if (typeof str !== 'string' || !Array.isArray(array) || !array || !str) {
        return 'Incorrect input data'
    }
    
    let arrTitle = [];
    for (let i = 0; i < array.length; i++){
        if (array[i].title)
        {
            if (array[i].title.toUpperCase().indexOf(str.toUpperCase())>=0)
            {
                arrTitle.push(array[i]);
            }
        }
    }
    return arrTitle;
}



