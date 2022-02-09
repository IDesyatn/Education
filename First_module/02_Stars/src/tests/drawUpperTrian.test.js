const drawUpperTrian = require('.././drawUpperTrian.js');

describe('drawUpperTrian', () => {
    test('', () => {
        expect(drawUpperTrian())
            .toEqual('  *  *  *  *  *  *  *\n' +
                '     *           *   \n' +
                '        *     *      \n' +
                '           *         \n' +
                '                     \n' +
                '                     \n' +
                '                     \n');
    });

})