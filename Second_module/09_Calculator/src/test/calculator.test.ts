import {Calculator} from "../ts/Calculator";

describe('calculation', () => {
  test('get sum', () => {
    const testCalc = new Calculator();
    expect(testCalc.calculation(1, 2, '+')).toBe(3);
  });
  test('get subtraction', () => {
    const testCalc = new Calculator();
    expect(testCalc.calculation(1, 2, '-')).toBe(-1);
  });
  test('get multiplication', () => {
    const testCalc = new Calculator();
    expect(testCalc.calculation(1, 2, 'x')).toBe(2);
  });
  test('get division', () => {
    const testCalc = new Calculator();
    expect(testCalc.calculation(6, 2, '/')).toBe(3);
  });
  test('get pow', () => {
    const testCalc = new Calculator();
    expect(testCalc.calculation(2, 2, 'xy')).toBe(4);
  });
  test('do not have operator', () => {
    const testCalc = new Calculator();
    expect(testCalc.calculation(10, 2, '')).toBe(2);
  });
});

describe('factorial', () => {
  test('get factorial number', () => {
    const testCalc = new Calculator();
    expect(testCalc.factorial(6)).toBe(720);
  });
  test('get factorial number', () => {
    const testCalc = new Calculator();
    expect(testCalc.factorial(-6)).toBe(-6);
  });
  test('get factorial number', () => {
    const testCalc = new Calculator();
    expect(testCalc.factorial('a')).toBe('a');
  });
  test('get factorial number', () => {
    const testCalc = new Calculator();
    expect(testCalc.factorial(0)).toBe(1);
  });
});

describe('sin', () => {
  test('get sin number', () => {
    const testCalc = new Calculator();
    expect(testCalc.sin(50)).toBe(0.76604444311897803520239265055542);
  });
});

describe('cos', () => {
  test('get cos number', () => {
    const testCalc = new Calculator();
    expect(testCalc.cos(0.5)).toBe(0.99996192306417128873735516482698);
  });
});

describe('tan', () => {
  test('get tan number', () => {
    const testCalc = new Calculator();
    expect(testCalc.tan(2)).toBe(0.03492076949174773050040262577373);
  });
});

describe('log', () => {
  test('get log number', () => {
    const testCalc = new Calculator();
    expect(testCalc.log(12)).toBe(1.0791812460476248277225056927041);
  });
});

describe('powTwo', () => {
  test('get pow Two number', () => {
    const testCalc = new Calculator();
    expect(testCalc.powTwo(12)).toBe(144);
  });
});

describe('cube', () => {
  test('get cube number', () => {
    const testCalc = new Calculator();
    expect(testCalc.cube(2)).toBe(8);
  });
});

describe('pow', () => {
  test('get pow number', () => {
    const testCalc = new Calculator();
    expect(testCalc.pow(15,9)).toBe(38443359375);
  });
});

describe('constant', () => {
  test('get constant', () => {
    const testCalc = new Calculator();
    expect(testCalc.constant()).toBe(2.718281828459045);
  });
});

describe('constantToPower', () => {
  test('get constant to power', () => {
    const testCalc = new Calculator();
    expect(testCalc.constantToPower(3)).toBe(20.085536923187664);
  });
});

describe('tenToPower', () => {
  test('get ten to power', () => {
    const testCalc = new Calculator();
    expect(testCalc.tenToPower(8)).toBe(100000000);
  });
});

describe('division', () => {
  test('division', () => {
    const testCalc = new Calculator();
    expect(testCalc.division(8, 3)).toBe(2.6666666666666665);
  });
});

describe('multiplication', () => {
  test('multiplication', () => {
    const testCalc = new Calculator();
    expect(testCalc.multiplication(89, 33)).toBe(2937);
  });
});

describe('subtraction', () => {
  test('subtraction', () => {
    const testCalc = new Calculator();
    expect(testCalc.subtraction(555, 98)).toBe(457);
  });
});

describe('sum', () => {
  test('sum', () => {
    const testCalc = new Calculator();
    expect(testCalc.sum(963, 54)).toBe(1017);
  });
});
