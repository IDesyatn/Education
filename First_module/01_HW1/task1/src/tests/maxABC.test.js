const maxABC = require('.././maxABC.js');

describe('maxABC', () => {
    test('Multiplication more', () => {
        expect(maxABC(5, 2, 8)).toBe(83);
    });
    
    test('Amount more', () => {
        expect(maxABC(5, -2, 8)).toBe(14);
    });

    test('Numbers are 0', () => {
        expect(maxABC(0,0,0)).toBe(3);
    });

    test('Arguments are null', () => {
        expect(maxABC( null , null , null)).toBe('Incorrect input data');
    });

    test('Arguments are string', () => {
        expect(maxABC('a','b','c')).toBe('Incorrect input data');
    });

     afterEach(() => {
        jest.clearAllMocks();
    });

})