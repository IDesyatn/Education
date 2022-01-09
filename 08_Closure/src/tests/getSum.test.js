const getSum = require('.././getSum.js');

describe('getSum', () => {
    test('large numbers', () => {
        expect(getSum('111111111111111111111111111111111111111111111111111', '23333333333333333333333333333333333333333333333333')).toBe('134444444444444444444444444444444444444444444444444');
    });

    test('small numbers', () => {
        expect(getSum('123', '324')).toBe('447');
    });

    test('sum is 1000', () => {
        expect(getSum('599', '401')).toBe('1000');
    });

    test('second number is greater than the first', () => {
        expect(getSum('599', '40135')).toBe('40710');
    });

     test('arg are one', () => {
        expect(getSum('1', '1')).toBe('2');
    });

    test('arg are undefined', () => {
        expect(getSum(undefined, undefined)).toBe('Incorrect input data');
    });
})