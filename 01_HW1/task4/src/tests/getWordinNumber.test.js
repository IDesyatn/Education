const getWordinNumber = require('.././getWordinNumber.js');

describe('getWordinNumber', () => {
    test('number is 0', () => {
        expect(getWordinNumber.getWordinNumber('ноль')).toBe(0);
    });

    test('number is 1', () => {
        expect(getWordinNumber.getWordinNumber('один')).toBe(1);
    });

    test('number is 999', () => {
        expect(getWordinNumber.getWordinNumber('девятьсот девяносто девять')).toBe(999);
    });

    test('number is 555', () => {
        expect(getWordinNumber.getWordinNumber('пятьсот пятьдесят пять')).toBe(555);
    });

     test('number is 13', () => {
        expect(getWordinNumber.getWordinNumber('тринадцать')).toBe(13);
    });

    test('Argument is null', () => {
        expect(getWordinNumber.getWordinNumber(null)).toBe('Введено неправильное число');
    });

})

describe('getNumberInWord', () => {
    test('number is 9056120207', () => {
        expect(getWordinNumber.getWordInNumberMoreNum('девять миллиардов пятьдесят шесть миллионов сто двадцать тысяч двесте семь')).toBe(9056120207);
    });

    test('number is 0', () => {
        expect(getWordinNumber.getWordInNumberMoreNum('ноль')).toBe(0);
    });

    test('number is 387456783', () => {
        expect(getWordinNumber.getWordInNumberMoreNum('триста восемьдесят семь миллионов четыреста пятьдесят шесть тысяч семьсот восемьдесят три')).toBe(387456783);
    });

    test('argument is null', () => {
        expect(getWordinNumber.getWordInNumberMoreNum(null)).toBe('Введено неправильное число');
    });

})