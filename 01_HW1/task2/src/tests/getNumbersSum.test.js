const getNumbersSum = require('.././getNumbersSum.js');

describe('getNumbersSum', () => {
    test('Sum of digits of a number', () => {
        expect(getNumbersSum(1423)).toBe(10);
    });

    test('Sum of digits of a number', () => {
        expect(getNumbersSum(541)).toBe(10);
    });

    test('Negative number', () => {
        expect(getNumbersSum(-123)).toBe(6);
    });

    test('Number is 0', () => {
        expect(getNumbersSum(0)).toBe(0);
    });

    test('Number is 1', () => {
        expect(getNumbersSum(1)).toBe(1);
    });

    test('Argument is null', () => {
        expect(getNumbersSum(null)).toBe('Icorrect input data');
    });

    test('Argument is str', () => {
        expect(getNumbersSum('str')).toBe('Icorrect input data');
    });
})