const studGrade = require('.././studGrade.js');

describe('studGrade', () => {
    test('Grade F', () => {
        expect(studGrade(19)).toBe('Оценка студента: F');
    });

    test('Grade A', () => {
        expect(studGrade(92)).toBe('Оценка студента: A');
    });

    test('Grade B', () => {
        expect(studGrade(79)).toBe('Оценка студента: B');
    });

    test('Grade C', () => {
        expect(studGrade(62)).toBe('Оценка студента: C');
    });

    test('Grade D', () => {
        expect(studGrade(50)).toBe('Оценка студента: D');
    });

    test('Grade E', () => {
        expect(studGrade(25)).toBe('Оценка студента: E');
    });

    test('Number is 0', () => {
        expect(studGrade(0)).toBe('Оценка студента: F');
    });

    test('Number is 100', () => {
        expect(studGrade(100)).toBe('Оценка студента: A');
    });

    test('Number less than 0', () => {
        expect(studGrade(-6)).toBe('Неправильно введена информация');
    });

    test('Number is greater than 100', () => {
        expect(studGrade(120)).toBe('Неправильно введена информация');
    });

    test('Argument is null', () => {
        expect(studGrade(null)).toBe('Неправильно введена информация');
    });

    test('Argument is str', () => {
        expect(studGrade('str')).toBe('Неправильно введена информация');
    });
})