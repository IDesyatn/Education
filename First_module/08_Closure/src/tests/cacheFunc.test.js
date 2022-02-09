const cache = require('.././cacheFunc.js');
function complexFunction(arg1, arg2) {
    return arg1 + arg2;
}

let cachedFunc = cache(complexFunction);

describe('cachedFunc',function () {
    test('first',function () {
        expect(cachedFunc('foo', 'bar')).toBe('To  cache: foo bar');
    })

    test('second',function () {
        expect(cachedFunc('foo', 'bar')).toBe('From cache: foo bar');
    })

     test('third',function () {
        expect(cachedFunc('foo', 'baz')).toBe('To  cache: foo baz');
     })
    
     test('fourth',function () {
        expect(cachedFunc('foo', 'bar')).toBe('From cache: foo bar');
     })
    
     test('fifth',function () {
        expect(cachedFunc('foo', 'baa')).toBe('To  cache: foo baa');
     })
  
})