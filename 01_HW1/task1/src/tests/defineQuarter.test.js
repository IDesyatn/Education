const defineQuarter = require('.././defineQuarter.js');

describe('defineQuarter', () => {
    test('First quarter', () => {
        expect(defineQuarter(3,5)).toBe('Точка находится в первой четверти');
    });

    test('Second quarter', () => {
        expect(defineQuarter(-2,6)).toBe('Точка находится во второй четверти');
    });

    test('Third quarter', () => {
        expect(defineQuarter(-5,-5)).toBe('Точка находится в третьей четверти');
    });

    test('Fourth quarter', () => {
        expect(defineQuarter(3,-6)).toBe('Точка находится в четвертой четверти');
    });
 
    test('Point on axis ', () => {
        expect(defineQuarter(0,1)).toBe('Точка находится на оси');
    });

    test('Point in the center of coordinates ', () => {
        expect(defineQuarter(0,0)).toBe('Точка находится в цетре координат');
    });

     test('Not a number', () => {
        expect(defineQuarter('str')).toBe('Неправильные входные данные');
    });

    test('Null', () => {
        expect(defineQuarter(null)).toBe('Неправильные входные данные');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

})