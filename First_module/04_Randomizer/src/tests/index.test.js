const index = require('.././index.js');

describe('countingOutNum', () => {
    test('', () => {
        let usedNum = [3,4,5,2]
        expect(index.countingOutNum(1,5)).toBe(1);
    });

    test('', () => {
        expect(index.countingOutNum('')).toBe();
    });

    test('', () => {
        expect(index.countingOutNum('')).toBe();
    });

    test('', () => {
        expect(index.countingOutNum('')).toBe();
    });

     test('', () => {
        expect(index.countingOutNum('')).toBe();
     });
    
      afterEach(() => {
        jest.clearAllMocks();
    });
})


