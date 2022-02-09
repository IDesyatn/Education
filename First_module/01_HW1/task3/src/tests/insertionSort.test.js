const insertionSort = require('.././insertionSort.js');

describe('insertionSort', () => {
    test('Array elements are positive', () => {
        expect(insertionSort([3, 8, 5, 2, 7, 6, 1])).toEqual([1, 2, 3, 5, 6, 7, 8]);
    });

    test('Array has negative elements', () => {
        expect(insertionSort([3, -8, -5, 2, 7, -6, 1])).toEqual([-8, -6, -5, 1, 2, 3, 7]);
    });

    test('Elements are zero ', () => {
        expect(insertionSort([0,0,0,0])).toEqual([0,0,0,0]);
    });

    test('Array is empty', () => {
        expect(insertionSort([])).toBe('Incorrect input data');
    });

    test('Array has just one element', () => {
        expect(insertionSort([1])).toEqual([1]);
    });

    test('Array has just two elements', () => {
        expect(insertionSort([8,4])).toEqual([4,8]);
    });

    test('Argument is null', () => {
        expect(insertionSort(null)).toBe('Incorrect input data');
    });

    test('Argument is string', () => {
        expect(insertionSort('str')).toBe('Incorrect input data');
    });

    test('Array elements are null', () => {
        expect(insertionSort([null,null,null])).toBe('Incorrect input data');
    });

    test('Array elements are string', () => {
        expect(insertionSort(['str','str','str'])).toBe('Incorrect input data');
    });
})