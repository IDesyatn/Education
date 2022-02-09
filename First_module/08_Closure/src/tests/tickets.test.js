const tickets = require('.././tickets.js');

describe('tickets', () => {
    test('example 1', () => {
        expect(tickets([25, 25, 50])).toBe('YES');
    });

    test('example 2', () => {
        expect(tickets([25, 100])).toBe('NO');
    });

    test('example 3', () => {
        expect(tickets([25, 25, 50, 100])).toBe('YES');
    });

    test('example 4', () => {
        expect(tickets([25, 50, 100])).toBe('NO');
    });

    test('example 5', () => {
        expect(tickets(['25', '25', '50', '100'])).toBe('YES');
    });

     test('example 6', () => {
        expect(tickets(['25', '50', '100'])).toBe('NO');
     });
    
    test('one client with 50', () => {
        expect(tickets(['50'])).toBe('NO');
    });

    test('example 7', () => {
        expect(tickets([25, 25, 25, 100])).toBe('YES');
    });

    test('argument is str', () => {
        expect(tickets('str')).toBe('Incorrect input data');
    });
})