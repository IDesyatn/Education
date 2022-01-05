const getSumOfOddArrElem = require('.././getSumOfOddArrElem.js');

describe('getSumOfOddArrElem', () => {
    test('Array has three elements', () => {
        expect(getSumOfOddArrElem([42, 6, -6])).toBe(6);
    });

    test('Array has just one element', () => {
        expect(getSumOfOddArrElem([1])).toBe(0);
    });

    test('Array has just two elements', () => {
        expect(getSumOfOddArrElem([8,3])).toBe(3);
    });

    test('Array has four elements', () => {
        expect(getSumOfOddArrElem([5,-7,-9, 5])).toBe(-2);
    });

    test('Array elements are null', () => {
        expect(getSumOfOddArrElem([null,null,null])).toBe('Incorrect input data');
    });

    test('Array elements are string', () => {
        expect(getSumOfOddArrElem(['str','str','str'])).toBe('Incorrect input data');
    });

    test('Argument is null', () => {
        expect(getSumOfOddArrElem(null)).toBe('Incorrect input data');
    });

    test('Argument is string', () => {
        expect(getSumOfOddArrElem('str')).toBe('Incorrect input data');
    });

    test('Array is empty', () => {
        expect(getSumOfOddArrElem([])).toBe('Incorrect input data');
    });
})