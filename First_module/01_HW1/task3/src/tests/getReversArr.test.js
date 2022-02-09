const getReversArr = require('.././getReversArr.js');

describe('getReversArr', () => {
    test('The number of elements in the array is even', () => {
        expect(getReversArr([42, 6, -6, 2])).toEqual([2, -6, 6, 42]);
    });

    test('The number of elements in the array is odd', () => {
        expect(getReversArr([5,7,-9])).toEqual([-9,7,5]);
    });

    test('Array has just one element', () => {
        expect(getReversArr([1])).toEqual([1]);
    });

    test('Array has just two elements', () => {
        expect(getReversArr([8,3])).toEqual([3,8]);
    });

     test('Array elements are null', () => {
        expect(getReversArr([null, 1, 3])).toEqual([3, 1, null]);
    });

    test('Array elements are string', () => {
        expect(getReversArr(['1', '2', '3'])).toEqual(['3', '2', '1']);
    });
        
    test('Argument is null', () => {
        expect(getReversArr(null)).toBe('Incorrect input data');
    });

    test('Argument is string', () => {
        expect(getReversArr('str')).toBe('Incorrect input data');
    });

    test('Array is empty', () => {
        expect(getReversArr([])).toBe('Incorrect input data');
    });
})
