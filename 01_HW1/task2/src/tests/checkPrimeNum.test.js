const checkPrimeNum = require('.././checkPrimeNum.js');

describe('checkPrimeNum', () => {
    test('Number is prime', () => {
        expect(checkPrimeNum(23)).toBe(true);
    });

    test('Number is odd', () => {
        expect(checkPrimeNum(24)).toBe(false);
    });

    test('Negative number', () => {
        expect(checkPrimeNum(-7)).toBe(false);
    });

    test('Number is 0', () => {
        expect(checkPrimeNum(0)).toBe(false);
    });

    test('Argument is null', () => {
        expect(checkPrimeNum(null)).toBe(false);
    });

    test('Argument is str', () => {
        expect(checkPrimeNum('str')).toBe(false);
    });
})
    