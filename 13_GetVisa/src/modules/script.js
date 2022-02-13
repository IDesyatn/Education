import generateData from './generateData';
import addCandidate from './addCandidate';
import initRace from './initRace';
import startRace from './startRace';

const storage = {
    participants: []
};

window.addEventListener('DOMContentLoaded', () => {
    generateData();
    addCandidate(storage.participants);
    initRace();
    startRace(storage.participants);
})