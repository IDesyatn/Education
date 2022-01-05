const sumOrMult = require('.././sumOrMult.js');

describe('sumOrMult', () => {
    test('First number is even', () => {
        expect(sumOrMult(4, 5)).toBe(20);
    })

    test('First number is odd', () => {
        expect(sumOrMult(3,8)).toBe(11);
    })

    test('Numbers are negative', () => {
        expect(sumOrMult(-2, -5)).toBe(10);
    })

    test('First number is 0', () => {
        expect(sumOrMult(0, 7)).toBe(7);
    })

    test('Arguments are null', () => {
        expect(sumOrMult(null, null)).toBe('Incorrect input data');
    })

    test('Arguments are string', () => {
        expect(sumOrMult('str', 'str')).toBe('Incorrect input data');
    })
})