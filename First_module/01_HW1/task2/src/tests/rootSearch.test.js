const rootSearch = require('.././rootSearch.js');

describe('binaryRootSearch', () => {
    test('Integer root', () => {
        expect(rootSearch.binaryRootSearch(25)).toBe(5);
    });

    test('Fractional root', () => {
        expect(rootSearch.binaryRootSearch(26)).toBe(5);
    });

    test('Argument is 0', () => {
        expect(rootSearch.binaryRootSearch(0)).toBe('Incorrect input data');
    });

    test('Argument is 1', () => {
        expect(rootSearch.binaryRootSearch(1)).toBe(1);
    });

    test('Negative number', () => {
        expect(rootSearch.binaryRootSearch(-25)).toBe('Incorrect input data');
    });

    test('Argument is null', () => {
        expect(rootSearch.binaryRootSearch(null)).toBe('Incorrect input data');
    });

    test('Argument is string', () => {
        expect(rootSearch.binaryRootSearch('str')).toBe('Incorrect input data');
    });
})


describe('selectRootSearch', () => {
    test('Integer root', () => {
        expect(rootSearch.selectRootSearch(25)).toBe(5);
    });

    test('Fractional root', () => {
        expect(rootSearch.selectRootSearch(26)).toBe(5);
    });

    test('Argument is 0', () => {
        expect(rootSearch.selectRootSearch(0)).toBe('Incorrect input data');
    });

    test('Argument is 1', () => {
        expect(rootSearch.selectRootSearch(1)).toBe(1);
    });

    test('Negative number', () => {
        expect(rootSearch.selectRootSearch(-25)).toBe('Incorrect input data');
    });

    test('Argument is null', () => {
        expect(rootSearch.selectRootSearch(null)).toBe('Incorrect input data');
    });

    test('Argument is string', () => {
        expect(rootSearch.selectRootSearch('str')).toBe('Incorrect input data');
    });
})