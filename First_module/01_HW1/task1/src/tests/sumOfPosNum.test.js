const sumOfPosNum = require('.././sumOfPosNum.js');

describe('sumOfPosNum', () => {
    test('All numbers are positive', () => {
        expect(sumOfPosNum(3,9,8)).toBe(20);
    });

    test('All numbers are negative', () => {
        expect(sumOfPosNum(-6, -5, -7)).toBe(0);
    });

    test('One number is positive', () => {
        expect(sumOfPosNum(5, -7, -4)).toBe(5);
    });

    test('All numbers are 0', () => {
        expect(sumOfPosNum(0,0,0)).toBe(0);
    });

    test('All arguments are null', () => {
        expect(sumOfPosNum(null, null, null)).toBe('Incorrect input data');
    });

    test('Arguments are str', () => {
        expect(sumOfPosNum('str', 'str', 'str')).toBe('Incorrect input data');
    });

    test('Arguments are undefined', () => {
        expect(sumOfPosNum(undefined, undefined, undefined)).toBe('Incorrect input data');
    });
})