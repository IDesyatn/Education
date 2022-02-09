module.exports = getCookingTime; 

function getCookingTime(eggsAm) {
    if (typeof eggsAm !== 'number' || eggsAm < 0) {
        return 'Incorrect input data';
    }

    return Math.ceil(eggsAm / 5) * 5;

}





