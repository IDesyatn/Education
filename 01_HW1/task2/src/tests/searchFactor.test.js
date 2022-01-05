const searchFactor = require('.././searchFactor.js');

describe('searchFactor', () => {
    test('Factorial of first positive number', () => {
        expect(searchFactor(4)).toBe(24);
    });

    test('Factorial of second positive number', () => {
        expect(searchFactor(10)).toBe(3628800);
    });

    test('Factorial of 1', () => {
        expect(searchFactor(1)).toBe(1);
    });

    test('Factorial of 0', () => {
        expect(searchFactor(0)).toBe(1);
    });

    test('Negative number', () => {
        expect(searchFactor(-16)).toBe('Icorrect input data');
    });

    test('Argument is null', () => {
        expect(searchFactor(null)).toBe('Icorrect input data');
    });

    test('Argument is str', () => {
        expect(searchFactor('str')).toBe('Icorrect input data');
    });
})