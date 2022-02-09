const findTitle = require('.././findTitle.js');
const arr = [{ title: 'Some title1' }, { title: 'I like JS' }, { user: 'blabla js' }, { title: 'Js - is the best' }];

describe('findTitle', () => {
    test('Example from task', () => {
        expect(findTitle(arr, 'js')).toEqual([ { title: 'I like JS' }, { title: 'Js - is the best' } ]);
    });

    test('Str in upper case', () => {
        expect(findTitle(arr, 'JS')).toEqual([ { title: 'I like JS' }, { title: 'Js - is the best' } ]);
    });

    test('Arguments are null', () => {
        expect(findTitle(null, null)).toEqual('Incorrect input data');
    });
    
    test('String is number', () => {
        expect(findTitle(arr, 4)).toEqual('Incorrect input data');
    });
})