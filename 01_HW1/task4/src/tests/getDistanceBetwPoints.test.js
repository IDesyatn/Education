const getDistanceBetwPoints = require('.././getDistanceBetwPoints.js');

describe('getDistanceBetwPoints', () => {
    test('Points with positive coordinates', () => {
        expect(getDistanceBetwPoints([5,4], [3,4])).toBe(2);
    });

    test('Points with negative coordinates', () => {
        expect(getDistanceBetwPoints([-2,-4], [-2,-6])).toBe(2);
    });

    test('Point at the center of coordinates', () => {
        expect(getDistanceBetwPoints([0,0],[0,0])).toBe(0);
    });

    test('Dots in different quarters', () => {
        expect(getDistanceBetwPoints([5,4],[-2,-6])).toBe(12.206555615733702);
    });

    test('Arguments are null', () => {
        expect(getDistanceBetwPoints(null,null)).toBe('Incorrect input data');
    });

    test('Arguments are str', () => {
        expect(getDistanceBetwPoints('str')).toBe('Incorrect input data');
    });
})