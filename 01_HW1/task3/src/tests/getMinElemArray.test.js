const getMinElemArray = require('.././getMinElemArray.js');

describe('getMinElemArray', () => {
    test('Min element is positive number', () => {
        expect(getMinElemArray([43, 5, -6])).toBe(-6);
    });

    test('Min element is negative number', () => {
        expect(getMinElemArray([-8,-7,-9])).toBe(-9);
    });

    test('Min element is 0 ', () => {
        expect(getMinElemArray([6,2,0])).toBe(0);
    });

    test('Array is empty', () => {
        expect(getMinElemArray([])).toBe('Incorrect input data');
    });

    test('Array has just one element', () => {
        expect(getMinElemArray([1])).toBe(1);
    });

    test('Array has just two elements', () => {
        expect(getMinElemArray([8,4])).toBe(4);
    });

    test('Argument is null', () => {
        expect(getMinElemArray(null)).toBe('Incorrect input data');
    });

    test('Argument is string', () => {
        expect(getMinElemArray('str')).toBe('Incorrect input data');
    });

    test('Array elements are null', () => {
        expect(getMinElemArray([null,null,null])).toBe('Incorrect input data');
    });

    test('Array elements are string', () => {
        expect(getMinElemArray(['str','str','str'])).toBe('Incorrect input data');
    });
})