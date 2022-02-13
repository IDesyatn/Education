// 'use strict';

import generateData from '../src/generateData';
import addCandidate from '../src/addCandidate';
import initRace from '../src/initRace';
import startRace from '../src/startRace';

const storage = {
    participants: []
};

window.addEventListener('DOMContentLoaded', () => {
    generateData();
    addCandidate(storage.participants);
    initRace();
    startRace(storage.participants);
})