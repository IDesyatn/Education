const sumOfEvenNumFor = require('.././sumOfEvenNumFor.js');

describe('sumOfEvenNumFor', () => {
    test('Even number', () => {
        expect(sumOfEvenNumFor(10)).toBe('30 5');
    });

     test('Odd number', () => {
        expect(sumOfEvenNumFor(7)).toBe('12 3');
     });
    
     test('Negative number', () => {
        expect(sumOfEvenNumFor(-12)).toBe('Incorrect input data');
     });
    
     test('Number is 0', () => {
        expect(sumOfEvenNumFor(0)).toBe('Incorrect input data');
     });
    
     test('Number is 1', () => {
        expect(sumOfEvenNumFor(1)).toBe('0 0');
     });
    
     test('Argument is null', () => {
        expect(sumOfEvenNumFor()).toBe('Incorrect input data');
     });
    
     test('Argument is string', () => {
        expect(sumOfEvenNumFor('str')).toBe('Incorrect input data');
    });
})
