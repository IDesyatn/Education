const mergeSort = require('.././mergeSort.js');

describe('mergeSort', () => {
    test('Array elements are positive', () => {
        expect(mergeSort([3, 8, 5, 2, 7, 6, 1])).toEqual([1, 2, 3, 5, 6, 7, 8]);
    });

    test('Array has negative elements', () => {
        expect(mergeSort([3, -8, -5, 2, 7, -6, 1])).toEqual([-8, -6, -5, 1, 2, 3, 7]);
    });

    test('Elements are zero ', () => {
        expect(mergeSort([0,0,0,0])).toEqual([0,0,0,0]);
    });

    test('Array is empty', () => {
        expect(mergeSort([])).toBe('Incorrect input data');
    });

    test('Array has just one element', () => {
        expect(mergeSort([1])).toEqual([1]);
    });

    test('Array has just two elements', () => {
        expect(mergeSort([8,4])).toEqual([4,8]);
    });

    test('Argument is null', () => {
        expect(mergeSort(null)).toBe('Incorrect input data');
    });

    test('Argument is string', () => {
        expect(mergeSort('str')).toBe('Incorrect input data');
    });

    test('Array elements are null', () => {
        expect(mergeSort([null,null,null])).toBe('Incorrect input data');
    });

    test('Array elements are string', () => {
        expect(mergeSort(['str','str','str'])).toBe('Incorrect input data');
    });
})