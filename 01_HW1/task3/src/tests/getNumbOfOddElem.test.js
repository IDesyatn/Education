const getNumbOfOddElem = require('.././getNumbOfOddElem.js');

describe('getNumbOfOddElem', () => {
    test('All elements are even', () => {
        expect(getNumbOfOddElem([42, 6, -6])).toBe(0);
    });

    test('All elements are odd', () => {
        expect(getNumbOfOddElem([5,-7,-9])).toBe(3);
    });

    test('Array has just one element', () => {
        expect(getNumbOfOddElem([1])).toBe(1);
    });

    test('Array has just two elements', () => {
        expect(getNumbOfOddElem([8,3])).toBe(1);
    });

    test('Argument is null', () => {
        expect(getNumbOfOddElem(null)).toBe('Incorrect input data');
    });

    test('Argument is string', () => {
        expect(getNumbOfOddElem('str')).toBe('Incorrect input data');
    });

    test('Array is empty', () => {
        expect(getNumbOfOddElem([])).toBe('Incorrect input data');
    });

     test('Array elements are null', () => {
        expect(getNumbOfOddElem([null,null,null])).toBe('Incorrect input data');
    });

    test('Array elements are string', () => {
        expect(getNumbOfOddElem(['str','str','str'])).toBe('Incorrect input data');
    })
});