const drawUppRightTrian = require('.././drawUppRightTrian.js');

describe('drawUppRightTrian', () => {
    test('', () => {
        expect(drawUppRightTrian())
            .toEqual('  *  *  *  *  *  *  *\n' +
                '     *              *\n' +
                '        *           *\n' +
                '           *        *\n' +
                '              *     *\n' +
                '                 *  *\n' +
                '                    *\n');
    });

})