const swapHalvOfArray = require('.././swapHalvOfArray.js');

describe('swapHalvOfArray', () => {
    test('The number of elements in the array is even', () => {
        expect(swapHalvOfArray([42, 6, -6, 2])).toEqual([-6, 2, 42, 6]);
    });

    test('The number of elements in the array is odd', () => {
        expect(swapHalvOfArray([5,7,-9])).toEqual([-9,7,5]);
    });

    test('Array has just one element', () => {
        expect(swapHalvOfArray([1])).toEqual([1]);
    });

    test('Array has just two elements', () => {
        expect(swapHalvOfArray([8,3])).toEqual([3,8]);
    });

     test('Array element is null', () => {
        expect(swapHalvOfArray([null, 5, 1, 3])).toEqual([1, 3, null, 5]);
    });

    test('Array elements are string', () => {
        expect(swapHalvOfArray(['1', '2', '3', '4'])).toEqual(['3', '4', '1', '2']);
    });
        
    test('Argument is null', () => {
        expect(swapHalvOfArray(null)).toBe('Incorrect input data');
    });

    test('Argument is string', () => {
        expect(swapHalvOfArray('str')).toBe('Incorrect input data');
    });

    test('Array is empty', () => {
        expect(swapHalvOfArray([])).toBe('Incorrect input data');
    });
})
