//Получить строковое название дня недели по номеру дня
module.exports = getStringNameDayOfWeek; 

function getStringNameDayOfWeek(numDay) {
    if (typeof numDay !== 'number' || !numDay|| numDay<=0 || numDay>7){
        return 'Incorrect input data'
    }
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let strDay = days[numDay - 1];
    return strDay;
}
