const getIndexMinElemArray = require('.././getIndexMinElemArray.js');

describe('getIndexMinElemArray', () => {
    test('Index of min element is positive number', () => {
        expect(getIndexMinElemArray([43, 5, -6])).toBe(2);
    });

    test('Index of min element negative number', () => {
        expect(getIndexMinElemArray([-8,-7,-9])).toBe(2);
    });

    test('Min element is 0 ', () => {
        expect(getIndexMinElemArray([-6,-2,0])).toBe(0);
    });

    test('Array is empty', () => {
        expect(getIndexMinElemArray([])).toBe('Incorrect input data');
    });

    test('Array has just one element', () => {
        expect(getIndexMinElemArray([1])).toBe(0);
    });

    test('Array has just two elements', () => {
        expect(getIndexMinElemArray([8,4])).toBe(1);
    });

    test('Argument is null', () => {
        expect(getIndexMinElemArray(null)).toBe('Incorrect input data');
    });

    test('Argument is string', () => {
        expect(getIndexMinElemArray('str')).toBe('Incorrect input data');
    });

    test('Array elements are null', () => {
        expect(getIndexMinElemArray([null,null,null])).toBe('Incorrect input data');
    });

    test('Array elements are string', () => {
        expect(getIndexMinElemArray(['str','str','str'])).toBe('Incorrect input data');
    });

})