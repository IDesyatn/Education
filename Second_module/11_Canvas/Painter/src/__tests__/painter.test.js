import { Painter } from '../painter.js'

const paint = new Painter(); 

describe('Painter', () => {
    test('should return true', () => {
        expect(paint.start()).toBe(true)
    })
    test('should return false, undefined, undefined', () => {
        expect(paint.stop()).toEqual([false, undefined, undefined])
    })
})