import startRace, {helpers} from '../startRace';

describe('Tests for startRace', () => {
    test('startRace should be defined',  () => {
        expect(startRace).toBeDefined()
    })
    test('startRace should be function', () => {
        expect(typeof startRace).toBe('function');
    })
    test('helpers should be object', () => {
        expect(typeof helpers).toBe('object');
    })
    test('helpers.allResultsAreTrue should be function', () => {
        expect(typeof helpers.allResultsAreTrue).toBe('function');
    })
    test('helpers.allResultsAreTrue should be true', () => {
        let arr = [true, true];
        let test = helpers.allResultsAreTrue(arr);
        expect(test).toBe(true);
    })
    test('helpers.accCheck should be function', () => {
        expect(typeof helpers.accCheck).toBe('function');
    })
    test('helpers.checkAcc should be function', () => {
        expect(typeof helpers.checkAcc).toBe('function');
    })
    test('helpers.checkAcc should return true if balance >= 2000', () => {
        expect(helpers.checkAcc(2000)).toBe(true);
    })
    test('helpers.checkAcc should return true if balance >= 2000', () => {
        expect(helpers.checkAcc(2001)).toBe(true);
    })
    test('helpers.checkAcc should return false if balance < 2000', () => {
        expect(helpers.checkAcc(1999)).toBe(false);
    })
    test('helpers.checkAge should be function', () => {
        expect(typeof helpers.checkAge).toBe('function');
    })
    test('helpers.checkAge should return true if age >= 18 && age <= 60', () => {
        expect(helpers.checkAge(18)).toBe(true);
        expect(helpers.checkAge(20)).toBe(true);
        expect(helpers.checkAge(60)).toBe(true);
    })
    test('helpers.checkAge should return false if age < 18 && age > 60', () => {
        expect(helpers.checkAge(17)).toBe(false);
        expect(helpers.checkAge(61)).toBe(false);
        expect(helpers.checkAge(0)).toBe(false);
    })
    test('helpers.checkDocs should be function', () => {
        expect(typeof helpers.checkDocs).toBe('function');
    })
    test('helpers.checkDocs should return true if docs is 3', () => {
        expect(helpers.checkDocs('3')).toBe(true);
    })
    test('helpers.checkDocs should return false if docs is not 3', () => {
        expect(helpers.checkDocs('1')).toBe(false);
        expect(helpers.checkDocs('2')).toBe(false);
    })
    test('helpers.checkLang should be function', () => {
        expect(typeof helpers.checkLang).toBe('function');
    })
    test('helpers.checkLang should be true if lang level is B1', () => {
        expect(helpers.checkLang('B1')).toBe(true);
    })
    test('helpers.checkLang should be true if lang level is B2', () => {
        expect(helpers.checkLang('B2')).toBe(true);
    })
    test('helpers.checkLang should be true if lang level is C1', () => {
        expect(helpers.checkLang('C1')).toBe(true);
    })
    test('helpers.checkLang should be false if lang level is not B1, B2 or C1', () => {
        expect(helpers.checkLang('A1')).toBe(false);
    })
    test('helpers.assignNames should be function', () => {
        expect(typeof helpers.assignNames).toBe('function');
    })
    test('helpers.randomIntFromInterval should be function', () => {
        expect(typeof helpers.randomIntFromInterval).toBe('function');
    })
    test('helpers.randomIntFromInterval should return random number', () => {
        let result = 1000;
        expect(helpers.randomIntFromInterval(1,1)).toBe(result);
    })
})