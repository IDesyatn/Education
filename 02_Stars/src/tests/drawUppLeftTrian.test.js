const drawUppLeftTrian = require('.././drawUppLeftTrian.js');

describe('drawUppLeftTrian', () => {
    test('', () => {
        expect(drawUppLeftTrian())
            .toEqual('  *  *  *  *  *  *  *\n' +
                '  *              *   \n' +
                '  *           *      \n' +
                '  *        *         \n' +
                '  *     *            \n' +
                '  *  *               \n' +
                '  *                  \n');
    });

})