const drawСross = require('.././drawСross.js');

describe('drawСross', () => {
    test('', () => {
        expect(drawСross())
            .toEqual('  *                 *\n' +
                '     *           *   \n' +
                '        *     *      \n' +
                '           *         \n' +
                '        *     *      \n' +
                '     *           *   \n' +
                '  *                 *\n');
    });

})