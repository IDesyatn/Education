const drawLowRightTrian = require('.././drawLowRightTrian.js');

describe('drawLowRightTrian', () => {
    test('', () => {
        expect(drawLowRightTrian())
            .toEqual('                    *\n' +
                '                 *  *\n' +
                '              *     *\n' +
                '           *        *\n' +
                '        *           *\n' +
                '     *              *\n' +
                '  *  *  *  *  *  *  *\n');
    });

})