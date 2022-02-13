export default function startRace(participants) {
    const race = document.getElementById('race');
    const initializationTable = document.getElementById('tab1');
    const raceTable = document.getElementById('tab2');
    const part = document.querySelectorAll('.part');
    const balances = document.querySelectorAll('.balances');
    const ages = document.querySelectorAll('.ages');
    const docs = document.querySelectorAll('.docs');
    const english = document.querySelectorAll('.english');
    const winner = document.querySelectorAll('.general__race-winner');
    const nowon = document.querySelector('.noWin');

    race.addEventListener('click', () => {
        raceTable.classList.remove('hide');
        initializationTable.classList.add('hide');
        helpers.assignNames(part[0], participants[0].name);
        helpers.assignNames(part[1], participants[1].name);
        helpers.assignNames(part[2], participants[2].name);
        helpers.assignNames(part[3], participants[3].name);
        helpers.assignNames(part[4], participants[4].name);

        Promise.any([
            Promise.all(
                [
                    helpers.accCheck(helpers.checkAcc, participants[0].balance, helpers.randomIntFromInterval(5, 10), balances[0]),
                    helpers.accCheck(helpers.checkAge, participants[0].age, helpers.randomIntFromInterval(1, 3), ages[0]),
                    helpers.accCheck(helpers.checkDocs, participants[0].documents, helpers.randomIntFromInterval(10, 20), docs[0]),
                    helpers.accCheck(helpers.checkLang, participants[0].english, helpers.randomIntFromInterval(5, 10), english[0])
                ]
            ).then((results) => {
                const isWinner = helpers.allResultsAreTrue(results);

                return isWinner ? {
                    participant: participants[0],
                    index: 0
                } : Promise.reject(false);
            })
            ,
        
            Promise.all(
                [
                    helpers.accCheck(helpers.checkAcc, participants[1].balance, helpers.randomIntFromInterval(5, 10), balances[1]),
                    helpers.accCheck(helpers.checkAge, participants[1].age, helpers.randomIntFromInterval(1, 3), ages[1]),
                    helpers.accCheck(helpers.checkDocs, participants[1].documents, helpers.randomIntFromInterval(10, 20), docs[1]),
                    helpers.accCheck(helpers.checkLang, participants[1].english, helpers.randomIntFromInterval(5, 10), english[1])
                ]
            ).then((results) => {
                const isWinner = helpers.allResultsAreTrue(results);

                return isWinner ? {
                    participant: participants[1],
                    index: 1
                } : Promise.reject(false);
            })
            ,

            Promise.all(
                [
                    helpers.accCheck(helpers.checkAcc, participants[2].balance, helpers.randomIntFromInterval(5, 10), balances[2]),
                    helpers.accCheck(helpers.checkAge, participants[2].age, helpers.randomIntFromInterval(1, 3), ages[2]),
                    helpers.accCheck(helpers.checkDocs, participants[2].documents, helpers.randomIntFromInterval(10, 20), docs[2]),
                    helpers.accCheck(helpers.checkLang, participants[2].english, helpers.randomIntFromInterval(5, 10), english[2])
                ]
            )
            .then((results) => {
                const isWinner = helpers.allResultsAreTrue(results);

                return isWinner ? {
                    participant: participants[2],
                    index: 2
                } : Promise.reject(false);
            })
            ,

            Promise.all(
                [
                    helpers.accCheck(helpers.checkAcc, participants[3].balance, helpers.randomIntFromInterval(5, 10), balances[3]),
                    helpers.accCheck(helpers.checkAge, participants[3].age, helpers.randomIntFromInterval(1, 3), ages[3]),
                    helpers.accCheck(helpers.checkDocs, participants[3].documents, helpers.randomIntFromInterval(10, 20), docs[3]),
                    helpers.accCheck(helpers.checkLang, participants[3].english, helpers.randomIntFromInterval(5, 10), english[3])
                ]
            )
            .then((results) => {
                const isWinner = helpers.allResultsAreTrue(results);

                return isWinner ? {
                    participant: participants[3],
                    index: 3
                } : Promise.reject(false);
            })
            ,

            Promise.all(
                [
                    helpers.accCheck(helpers.checkAcc, participants[4].balance, helpers.randomIntFromInterval(5, 10), balances[4]),
                    helpers.accCheck(helpers.checkAge, participants[4].age, helpers.randomIntFromInterval(1, 3), ages[4]),
                    helpers.accCheck(helpers.checkDocs, participants[4].documents, helpers.randomIntFromInterval(10, 20), docs[4]),
                    helpers.accCheck(helpers.checkLang, participants[4].english, helpers.randomIntFromInterval(5, 10), english[4])
                ]
            )
            .then((results) => {
                const isWinner = helpers.allResultsAreTrue(results);

                return isWinner ? {
                    participant: participants[4],
                    index: 4
                } : Promise.reject(false);
            })
        ])
        .then((result) => {
            const { index, participant } = result;
            winner[index].textContent = 'WINNER';
        })
        .catch(() => {
            nowon.classList.remove('hide');
        })
    })    
}
export const helpers = {
    allResultsAreTrue(results) {
        return results.every(item => item === true);
    },
    accCheck(fnc, data, time, element) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            if (fnc(data)) {
                resolve('You win');
              } else {
                reject(new Error('You lose'));
              }
            }, time)
        })
        .then(() => {
            element.classList.add('success-check');
            return true;
        }).catch(() => {
            element.classList.add('fail-check');
            return false;
        });
    },
    checkAcc(data) {
        if (data >= 2000) {
            return true;
        } else {
            return false;
        }
    },
    checkAge(data) {
        if (data < 18 || data > 60) {
            return false;
        } else {
            return true;
        }
    },
    checkDocs(data) {
        if (data === '3') {
            return true; 
        } else {
            return false;
        }
    },
    checkLang(data) {
        if (data === 'B1' || data === 'B2' || data === 'C1') {
            return true; 
        } else {
            return false;
        }
    },
    assignNames(input, data) {
        input.textContent = data;
    },
    randomIntFromInterval(min, max) {
        return (Math.floor(Math.random() * (max - min + 1) + min)) * 1000;
    }
}
