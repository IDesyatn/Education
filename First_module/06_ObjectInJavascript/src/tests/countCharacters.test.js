const countCharacters = require('.././countCharacters.js');

describe('countCharacters', () => {
    test('Str contains number and symbols', () => {
        expect(countCharacters('juhu7ssd6$!!  @!')).toEqual({ '6': 1, '7': 1, j: 1, u: 2, h: 1, s: 2, d: 1 });
    });

    test('Str contains only letters', () => {
        expect(countCharacters('juhussd')).toEqual({ j: 1, u: 2, h: 1, s: 2, d: 1 });
    });

    test('Str contains only j', () => {
        expect(countCharacters('jjjjjjj')).toEqual({ j: 7 });
    });

    test('Str is empy', () => {
        expect(countCharacters('')).toEqual('Incorrect input data');
    });

     test('Argumnet is undefined', () => {
        expect(countCharacters(undefined)).toEqual('Incorrect input data');
    });
})