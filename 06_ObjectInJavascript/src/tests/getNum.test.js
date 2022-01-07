const getNum = require('.././getNum.js');

describe('getNum', () => {
    test('Num is even', () => {
        expect(getNum([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])).toBe(4);
    });

    test('Num is odd', () => {
        expect(getNum([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])).toBe(13);
    });

    test('More than 1 odd, even number', () => {
        expect(getNum([0, 2, 8, -4, 0, -123, 13, -4, 28, 12])).toBe('Number of even and odd numbers is greater than 1');
    });

     test('Array is empty', () => {
        expect(getNum([])).toBe('Incorrect input data');
     });
    
    test('Array has just one element', () => {
        expect(getNum([1])).toBe('Incorrect input data');
    });

    test('Array has just two element', () => {
        expect(getNum([1,2])).toBe('Incorrect input data');
    });

    test('Argument is str', () => {
        expect(getNum('str')).toBe('Incorrect input data');
    });

})