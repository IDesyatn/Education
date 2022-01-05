const quickSort = require('.././quickSort.js');

describe('quickSort', () => {
    test('Array elements are positive', () => {
        expect(quickSort([3, 8, 5, 2, 7, 6, 1])).toEqual([1, 2, 3, 5, 6, 7, 8]);
    });

    test('Array has negative elements', () => {
        expect(quickSort([3, -8, -5, 2, 7, -6, 1])).toEqual([-8, -6, -5, 1, 2, 3, 7]);
    });

    test('Elements are zero ', () => {
        expect(quickSort([0,0,0,0])).toEqual([0,0,0,0]);
    });

    test('Array is empty', () => {
        expect(quickSort([])).toEqual([]);
    });

    test('Array has just one element', () => {
        expect(quickSort([1])).toEqual([1]);
    });

    test('Array has just two elements', () => {
        expect(quickSort([8,4])).toEqual([4,8]);
    });

    test('Argument is null', () => {
        expect(quickSort(null)).toBe('Incorrect input data');
    });

    test('Argument is string', () => {
        expect(quickSort('str')).toBe('Incorrect input data');
    });

    test('Array elements are null', () => {
        expect(quickSort([null,null,null])).toBe('Incorrect input data');
    });

    test('Array elements are string', () => {
        expect(quickSort(['str','str','str'])).toBe('Incorrect input data');
    });
})