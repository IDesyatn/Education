const getMirrorNumber = require('.././getMirrorNumber.js');

describe('getMirrorNumber', () => {
    test('Mirroring number 345', () => {
        expect(getMirrorNumber(345)).toBe('543');
    });

    test('Mirroring number 1763', () => {
        expect(getMirrorNumber(1763)).toBe('3671');
    });

    test('Negative number', () => {
        expect(getMirrorNumber(-789)).toBe('987');
    });

    test('Number is 0', () => {
        expect(getMirrorNumber(0)).toBe('0');
    });

    test('Number is 1', () => {
        expect(getMirrorNumber(1)).toBe('1');
    });

    test('Argument is null', () => {
        expect(getMirrorNumber(null)).toBe('Icorrect input data');
    });

    test('Argument is str', () => {
        expect(getMirrorNumber('str')).toBe('Icorrect input data');
    });
})