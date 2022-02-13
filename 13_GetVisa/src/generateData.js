export default function generateData() {
    const nameInput = document.getElementById('name');
    const balanceInput = document.getElementById('balance');
    const ageInput = document.getElementById('age');
    const documentsInput = document.getElementById('documents');
    const englishLevelInput = document.getElementById('englishLevel');
    const name = document.getElementById('generate-name');
    const balance = document.getElementById('generate-balance');
    const age = document.getElementById('generate-age');
    const documents = document.getElementById('generate-documents');
    const englishLevel = document.getElementById('generate-englishLevel');
    const addCandidate = document.getElementById('addCandidate');
    const generateAll = document.getElementById('generateAll');
    const generateButton = document.querySelectorAll('.form-button');

    let random;

    const names = ['Marina', 'Slava', 'Artem', 'Ruslan', 'Dima', 'Nastya', 'Natasha', 'Danya', 'Lesya', 'Alex'];
    const english = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

    name.addEventListener('click' , () => {
        genDataHelp.randName(nameInput, names);
    })
    balance.addEventListener('click' , () => {
        genDataHelp.randBalance(balanceInput);
    })
    age.addEventListener('click' , () => {
        genDataHelp.randAge(ageInput);
    })
    documents.addEventListener('click' , () => {
        genDataHelp.randDocs(documentsInput);
    })
    englishLevel.addEventListener('click' , () => {
        genDataHelp.randEnglishLevel(englishLevelInput, english);
    })
    generateAll.addEventListener('click', () => {
        genDataHelp.randName(nameInput, names);
        genDataHelp.randBalance(balanceInput);
        genDataHelp.randAge(ageInput);
        genDataHelp.randDocs(documentsInput);
        genDataHelp.randEnglishLevel(englishLevelInput, english);
        addCandidate.disabled = false;
        for (let i of generateButton) {
            i.disabled = false;
        }
    })
}

export const genDataHelp = {
    randName(element, names) {
        let random = Math.floor(Math.random() * 10);
        element.value = names[random];
    },
    randBalance(element) {
        let random = 0;
        if (Math.random() > 0.4) {
            random = Math.floor(Math.random() * 20001);
        } else {
            random = Math.floor(Math.random() * (1999 - 0 + 1) + 0);
        }
        element.value = random;
    },
    randAge(element) {
        let random = 0;
        if (Math.random() > 0.3) {
            random = Math.floor(Math.random() * (60 - 18 + 1) + 18);
        } else {
            random = Math.floor(Math.random() * (90 - 60 + 1) + 60);
        }
        element.value = random;
    },
    randDocs(element) {
        let random = 0;
        if (Math.random() > 0.2) {
            random = 3;
        } else {
            random = Math.floor(Math.random() * (2 - 1 + 1) + 1);
        }
        element.value = random;
    },
    randEnglishLevel(element, levels) {
        let random = 0;
        if (Math.random() > 0.3) {
            random = 2 || 3 || 4;
        } else {
            random = Math.ceil(Math.random() * (5 - 0) + 0);
        }
        element.value = levels[random];
    },
    clearData() {
        nameInput.value = ''; 
        balanceInput.value = ''; 
        ageInput.value = ''; 
        documentsInput.value = ''; 
        englishLevelInput.value = '';
        addCandidate.disabled = true;
    }
}