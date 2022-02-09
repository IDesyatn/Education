const getStringNameDayOfWeek = require('.././getStringNameDayOfWeek.js');

describe('getStringNameDayOfWeek', () => {
    test('Monday', () => {
        expect(getStringNameDayOfWeek(1)).toBe('Monday');
    });

    test('Sunday', () => {
        expect(getStringNameDayOfWeek(7)).toBe('Sunday');
    });

    test('Argument is zero', () => {
        expect(getStringNameDayOfWeek(0)).toBe('Incorrect input data');
    });

     test('Argument is 10', () => {
        expect(getStringNameDayOfWeek(10)).toBe('Incorrect input data');
     });
    
     test('Argument is less than zero', () => {
        expect(getStringNameDayOfWeek(-6)).toBe('Incorrect input data');
    });

    test('Argument is str', () => {
        expect(getStringNameDayOfWeek('str')).toBe('Incorrect input data');
    });

    test('Argument is null', () => {
        expect(getStringNameDayOfWeek(null)).toBe('Incorrect input data');
    });
})