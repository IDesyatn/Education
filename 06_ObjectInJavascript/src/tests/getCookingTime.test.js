const getCookingTime = require('.././getCookingTime.js');

describe('getCookingTime', () => {
    test('Count os 0', () => {
        expect(getCookingTime(0)).toBe(0);
    });

    test('Count is 5', () => {
        expect(getCookingTime(5)).toBe(5);
    });

     test('Count is 20', () => {
        expect(getCookingTime(20)).toBe(20);
    });

     test('Count is 21', () => {
        expect(getCookingTime(21)).toBe(25);
     });
    
    test('Count is 9', () => {
        expect(getCookingTime(9)).toBe(10);
    });

    test('Count is gegative number', () => {
        expect(getCookingTime(-9)).toBe('Incorrect input data');
    });
    
    test('Count is str', () => {
        expect(getCookingTime('str')).toBe('Incorrect input data');
    });
})
