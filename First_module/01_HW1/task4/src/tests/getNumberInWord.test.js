const getNumberInWord = require('.././getNumberInWord.js');


describe('getNumberInWord', () => {
    test('Number is zero', () => {
        expect(getNumberInWord.getNumberInWord(0)).toBe('ноль');
    });

    test('Number is 555', () => {
        expect(getNumberInWord.getNumberInWord(555)).toBe('пятьсот пятьдесят пять');
    });

    test('Number is 12', () => {
        expect(getNumberInWord.getNumberInWord(12)).toBe('двенадцать');
    });

    test('Number is 30', () => {
        expect(getNumberInWord.getNumberInWord(30)).toBe('тридцать');
    });

    test('Number is 107', () => {
        expect(getNumberInWord.getNumberInWord(107)).toBe('сто семь');
    });

    test('Number is 110', () => {
        expect(getNumberInWord.getNumberInWord(110)).toBe('сто десять');
    });

     test('Number is 116', () => {
        expect(getNumberInWord.getNumberInWord(116)).toBe('сто шестнадцать');
    });

      test('Number is 55', () => {
        expect(getNumberInWord.getNumberInWord(55)).toBe('пятьдесят пять');
    });

    test('Number is  one', () => {
        expect(getNumberInWord.getNumberInWord(1)).toBe('один');
    });

    test('Number is 999', () => {
        expect(getNumberInWord.getNumberInWord(999)).toBe('девятьсот девяносто девять');
    });

    test('Negative number', () => {
        expect(getNumberInWord.getNumberInWord(-1)).toBe('Введено неправильное число');
    });

    test('Argumen is str', () => {
        expect(getNumberInWord.getNumberInWord('str')).toBe('Введено неправильное число');
    });

    test('Argument is null', () => {
        expect(getNumberInWord.getNumberInWord(null)).toBe('Введено неправильное число');
    });
})

describe('getNumberInWordMoreNum', () => {
    test('Number with billion', () => {
        expect(getNumberInWord.getNumberInWordMoreNum(5646767134)).toBe('пять миллиардов шестьсот сорок шесть миллионов семьсот шестьдесят семь тысяч сто тридцать четыре');
    });

    test('Number with million', () => {
        expect(getNumberInWord.getNumberInWordMoreNum(600000000)).toBe('шестьсот миллионов ');
    });

    test('Number is 1365', () => {
        expect(getNumberInWord.getNumberInWordMoreNum(600000000)).toBe('шестьсот миллионов ');
    });

    test('Number with thousand ', () => {
        expect(getNumberInWord.getNumberInWordMoreNum(76854)).toBe('семьдесят шесть тысяч восемьсот пятьдесят четыре');
    });

    test('Number is 999000000000', () => {
        expect(getNumberInWord.getNumberInWordMoreNum(999000000000)).toBe('девятьсот девяносто девять миллиардов ');
    });

    test('Negative number', () => {
        expect(getNumberInWord.getNumberInWordMoreNum(-6)).toBe('Введено неправильное число');
    });

    test('Argument is str', () => {
        expect(getNumberInWord.getNumberInWordMoreNum('str')).toBe('Введено неправильное число');
    });

    test('Argument is null', () => {
        expect(getNumberInWord.getNumberInWordMoreNum(null)).toBe('Введено неправильное число');
    });

  

})