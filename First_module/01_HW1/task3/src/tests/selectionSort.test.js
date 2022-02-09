const selectionSort = require('.././selectionSort.js');

describe('selectionSort', () => {
    test('Array elements are positive', () => {
        expect(selectionSort([3, 8, 5, 2, 7, 6, 1])).toEqual([1, 2, 3, 5, 6, 7, 8]);
    });

    test('Array has negative elements', () => {
        expect(selectionSort([3, -8, -5, 2, 7, -6, 1])).toEqual([-8, -6, -5, 1, 2, 3, 7]);
    });

    test('Elements are zero ', () => {
        expect(selectionSort([0,0,0,0])).toEqual([0,0,0,0]);
    });

    test('Array is empty', () => {
        expect(selectionSort([])).toBe('Incorrect input data');
    });

    test('Array has just one element', () => {
        expect(selectionSort([1])).toEqual([1]);
    });

    test('Array has just two elements', () => {
        expect(selectionSort([8,4])).toEqual([4,8]);
    });

    test('Argument is null', () => {
        expect(selectionSort(null)).toBe('Incorrect input data');
    });

    test('Argument is string', () => {
        expect(selectionSort('str')).toBe('Incorrect input data');
    });

    test('Array elements are null', () => {
        expect(selectionSort([null,null,null])).toBe('Incorrect input data');
    });

    test('Array elements are string', () => {
        expect(selectionSort(['str','str','str'])).toBe('Incorrect input data');
    });
})