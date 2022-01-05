const getIndexMaxElemArray = require('.././getIndexMaxElemArray.js');

describe('getIndexMaxElemArray', () => {
    test('Index of maximum element positive number', () => {
        expect(getIndexMaxElemArray([43,5,-6])).toBe(0);
    });

    test('Index of maximum element negative number', () => {
        expect(getIndexMaxElemArray([-8,-7,-9])).toBe(1);
    });

    test('Maximal element is 0 ', () => {
        expect(getIndexMaxElemArray([-6,-2,0])).toBe(2);
    });

    test('Array is empty', () => {
        expect(getIndexMaxElemArray([])).toBe('Incorrect input data');
    });

    test('Array has just one element', () => {
        expect(getIndexMaxElemArray([1])).toBe(0);
    });

    test('Array has just two elements', () => {
        expect(getIndexMaxElemArray([8,4])).toBe(0);
    });

    test('Argument is null', () => {
        expect(getIndexMaxElemArray(null)).toBe('Incorrect input data');
    });

    test('Argument is string', () => {
        expect(getIndexMaxElemArray('str')).toBe('Incorrect input data');
    });

    test('Array elements are null', () => {
        expect(getIndexMaxElemArray([null,null,null])).toBe('Incorrect input data');
    });

    test('Array elements are string', () => {
        expect(getIndexMaxElemArray(['str','str','str'])).toBe('Incorrect input data');
    });
})