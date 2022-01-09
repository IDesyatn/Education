module.exports = tickets;

function tickets(persons) {

    if (!Array.isArray(persons) || persons.length === 0) {
        return 'Incorrect input data'
    }

    let count = {
        25: 0,
        50: 0,
        100: 0
    }; 

    for (let i = 0; i < persons.length; i++){
        if (persons[i] === 25 || persons[i] === '25') {
            count[25]++;   
        }

        if (persons[i] === 50 || persons[i] === '50') {
            if (count[25] < 1) {
                return 'NO'
            }
            count[50]++; 
            count[25]--; 
        }

        if (persons[i] === 100 || persons[i] === '100') {
            if (count[50] >= 1 && count[25] >= 1) { 
                count[100]++;
                count[50]--;
                count[25]--;
            }
            else if (count[25] > 2) {
                count[25] = count[25] - 3; 
            }
            else {
                return 'NO'
            }
        }
    }
    return "YES";
}
