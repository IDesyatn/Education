const drawFilledSquare = require('.././drawFilledSquare.js');

describe('drawFilledSquare', () => {
    test('', () => {
        expect(drawFilledSquare())
            .toEqual('  *  *  *  *  *  *  *\n' +
                '  *  *  *  *  *  *  *\n' +
                '  *  *  *  *  *  *  *\n' +
                '  *  *  *  *  *  *  *\n' +
                '  *  *  *  *  *  *  *\n' +
                '  *  *  *  *  *  *  *\n' +
                '  *  *  *  *  *  *  *\n');
    });

})