const bubbleSort = require('.././bubbleSort.js');

describe('bubbleSort', () => {
    test('Array elements are positive', () => {
        expect(bubbleSort([3, 8, 5, 2, 7, 6, 1])).toEqual([1, 2, 3, 5, 6, 7, 8]);
    });

    test('Array has negative elements', () => {
        expect(bubbleSort([3, -8, -5, 2, 7, -6, 1])).toEqual([-8, -6, -5, 1, 2, 3, 7]);
    });

    test('Elements are zero ', () => {
        expect(bubbleSort([0,0,0,0])).toEqual([0,0,0,0]);
    });

    test('Array is empty', () => {
        expect(bubbleSort([])).toBe('Incorrect input data');
    });

    test('Array has just one element', () => {
        expect(bubbleSort([1])).toEqual([1]);
    });

    test('Array has just two elements', () => {
        expect(bubbleSort([8,4])).toEqual([4,8]);
    });

    test('Argument is null', () => {
        expect(bubbleSort(null)).toBe('Incorrect input data');
    });

    test('Argument is string', () => {
        expect(bubbleSort('str')).toBe('Incorrect input data');
    });

    test('Array elements are null', () => {
        expect(bubbleSort([null,null,null])).toBe('Incorrect input data');
    });

    test('Array elements are string', () => {
        expect(bubbleSort(['str','str','str'])).toBe('Incorrect input data');
    });
})