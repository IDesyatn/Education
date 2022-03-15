import generateData, {genDataHelp} from "../generateData";

describe('generateData', () => {
    test('generateData should be defined', () => {
        expect(generateData).toBeDefined()
    })
    test('generateData should be function', () => {
        expect(typeof generateData).toBe('function');
    })
    test('genDataHelp should be object', () => {
        expect(typeof genDataHelp).toBe('object');
    })
    test('genDataHelp.randName should be function', () => {
        expect(typeof genDataHelp.randName).toBe('function');
    })
    test('genDataHelp.randName should random name', () => {
        let names = ['Marina', 'Slava', 'Artem', 'Ruslan', 'Dima', 'Nastya', 'Natasha', 'Danya', 'Lesya', 'Alex'];
        let element = document.createElement('input');
        genDataHelp.randName(element, names);
        expect(element.value).toBe(element.value);
    })
    test('genDataHelp.randBalance should be function', () => {
        expect(typeof genDataHelp.randBalance).toBe('function');
    })
    test('genDataHelp.randAge should be function', () => {
        expect(typeof genDataHelp.randAge).toBe('function');
    })
    test('genDataHelp.randDocs should be function', () => {
        expect(typeof genDataHelp.randDocs).toBe('function');
    })
    test('genDataHelp.randEnglishLevel should be function', () => {
        expect(typeof genDataHelp.randEnglishLevel).toBe('function');
    })
})