const drawLowerTrian = require('.././drawLowerTrian.js');

describe('drawLowerTrian', () => {
    test('', () => {
        expect(drawLowerTrian())
            .toEqual('                     \n' +
                '                     \n' +
                '                     \n' +
                '           *         \n' +
                '        *     *      \n' +
                '     *           *   \n' +
                '  *  *  *  *  *  *  *\n');
    });

})