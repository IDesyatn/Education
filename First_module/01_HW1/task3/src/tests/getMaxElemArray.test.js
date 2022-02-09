const getMaxElemArray = require('.././getMaxElemArray.js');

describe('getMaxElemArray', () => {
    test('Max element is positive number', () => {
        expect(getMaxElemArray([43, 5, -6])).toBe(43);
    });

    test('Max element is negative number', () => {
        expect(getMaxElemArray([-8,-7,-9])).toBe(-7);
    });

    test('Max element is 0 ', () => {
        expect(getMaxElemArray([-6,-2,0])).toBe(0);
    });

    test('Array is empty', () => {
        expect(getMaxElemArray([])).toBe('Incorrect input data');
    });

    test('Array has just one element', () => {
        expect(getMaxElemArray([1])).toBe(1);
    });

    test('Array has just two elements', () => {
        expect(getMaxElemArray([8,4])).toBe(8);
    });

    test('Argument is null', () => {
        expect(getMaxElemArray(null)).toBe('Incorrect input data');
    });

    test('Argument is string', () => {
        expect(getMaxElemArray('str')).toBe('Incorrect input data');
    });

    test('Array elements are null', () => {
        expect(getMaxElemArray([null,null,null])).toBe('Incorrect input data');
    });

    test('Array elements are string', () => {
        expect(getMaxElemArray(['str','str','str'])).toBe('Incorrect input data');
    });
})