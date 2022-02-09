const getNextPalindrome = require('.././getNextPalindrome.js');

describe('getNextPalindrome', () => {
    test('Next number is palindrom', () => {
        expect(getNextPalindrome(98)).toBe(99);
    });

    test('Number is Palindrom', () => {
        expect(getNextPalindrome(99)).toBe(101);
    });

    test('Palindrome is far', () => {
        expect(getNextPalindrome(26)).toBe(33);
    });

    test('Number is less than 10', () => {
        expect(getNextPalindrome(10)).toBe(11);
    });

     test('Palindrome is str', () => {
        expect(getNextPalindrome('str')).toBe('Incorrect input data');
     });
    
})