import addCandidate, {addHelp} from '../addCandidate';

describe('Tests for addCandidate', () => {
    test('addCandidate should be defined', () => {
        expect(addCandidate).toBeDefined()
    })
    test('addCandidate should be function', () => {
        expect(typeof addCandidate).toBe('function');
    })
    test('addHelp should be object', () => {
        expect(typeof addHelp).toBe('object');
    })
    test('addHelp.fillIn should be function', () => {
        expect(typeof addHelp.fillIn).toBe('function');
    })
    test('addHelp.fillIn should fill data into elements', () => {
        let person = {
            'name': 'mar',
            'balance': 2000,
            'age': 18,
            'documents': 3,
            'english': 'B1'
        }
        let i = 0;
        let namePerson = [document.createElement('span')];
        let balancePerson = [document.createElement('span')];
        let agePerson = [document.createElement('span')];
        let documentsPerson = [document.createElement('span')];
        let englishPerson = [document.createElement('span')];
        addHelp.fillIn(i, person, namePerson, balancePerson, agePerson, documentsPerson, englishPerson)
        expect(namePerson[0].textContent).toBe('mar');
    })
    test('addHelp.recordCandidate should be function', () => {
        expect(typeof addHelp.recordCandidate).toBe('function');
    })
    test('addHelp.recordCandidate should record candidate', () => {
        let participants = [0,1,2,3,4];
        let button = document.createElement('button');
        let newParticipant = {
            'name': 'mar',
            'balance': 2000,
            'age': 18,
            'documents': 3,
            'english': 'B1'
        }
        addHelp.recordCandidate(newParticipant.name, participants, newParticipant.balance, newParticipant.age, newParticipant.docs, newParticipant.english, button);

        expect(button.disabled).toBe(true);
    })
    test('addHelp.clearData should be function', () => {
        expect(typeof addHelp.clearData).toBe('function');
    })
    test('addHelp.clearData should clear data', () => {
        let nameInput = document.createElement('input');
        let balanceInput = document.createElement('input');
        let ageInput = document.createElement('input');
        let documentsInput = document.createElement('input');
        let englishLevelInput = document.createElement('input');
        let button = document.createElement('button');
        nameInput.value = 'Uc';
        balanceInput.value = 'Uc';
        ageInput.value = 'Uc';
        documentsInput.value = 'Uc';
        englishLevelInput.value = 'Uc';
        button.disabled = false;
        addHelp.clearData(nameInput, balanceInput, ageInput, documentsInput, englishLevelInput, button);
        expect(button.disabled).toBe(true);
        expect(englishLevelInput.value).toBe('');
    })
    test('addHelp.checkInputs should be function', () => {
        expect(typeof addHelp.checkInputs).toBe('function');
    })
    test('addHelp.checkInputs should check if inputs are empty or not', () => {
        let nameInput = document.createElement('input');
        let balanceInput = document.createElement('input');
        let ageInput = document.createElement('input');
        let documentsInput = document.createElement('input');
        let englishLevelInput = document.createElement('input');
        let button = document.createElement('button');
        nameInput.value = 'Uc';
        balanceInput.value = 'Uc';
        ageInput.value = 'Uc';
        documentsInput.value = 'Uc';
        englishLevelInput.value = 'Uc';
        addHelp.checkInputs(nameInput, balanceInput, ageInput, documentsInput, englishLevelInput, button)
        expect(button.disabled).toBe(false);
        addHelp.clearData(nameInput, balanceInput, ageInput, documentsInput, englishLevelInput, button);
        expect(button.disabled).toBe(true);
    })
    test('addHelp.blockGenerate should be function', () => {
        expect(typeof addHelp.blockGenerate).toBe('function');
    })
    test('addHelp.blockGenerate should toggle status', () => {
        let button = [document.createElement('button'), document.createElement('button'), document.createElement('button'), document.createElement('button')];
        addHelp.blockGenerate(button, true);
        expect(button[0].disabled).toBe(true);
        expect(button[1].disabled).toBe(true);
        expect(button[2].disabled).toBe(true);
        expect(button[3].disabled).toBe(true);
        addHelp.blockGenerate(button, false);
        expect(button[0].disabled).toBe(false);
        expect(button[1].disabled).toBe(false);
        expect(button[2].disabled).toBe(false);
        expect(button[3].disabled).toBe(false);
    })
})