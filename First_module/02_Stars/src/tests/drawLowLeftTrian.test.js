const drawLowLeftTrian = require('.././drawLowLeftTrian.js');

describe('drawLowLeftTrian', () => {
    test('', () => {
        expect(drawLowLeftTrian())
            .toEqual('  *                  \n' +
                '  *  *               \n' +
                '  *     *            \n' +
                '  *        *         \n' +
                '  *           *      \n' +
                '  *              *   \n' +
                '  *  *  *  *  *  *  *\n');
    });

})