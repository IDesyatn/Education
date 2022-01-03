const drawEmptySquare = require('.././drawEmptySquare.js');

describe('drawEmptySquare', () => {
    test('', () => {
        expect(drawEmptySquare())
            .toEqual('  *  *  *  *  *  *  *\n' +
                '  *                 *\n' +
                '  *                 *\n' +
                '  *                 *\n' +
                '  *                 *\n' +
                '  *                 *\n' +
                '  *  *  *  *  *  *  *\n');
    });

})