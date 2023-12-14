import { isEven, median, modulo } from '../entry';

test('Tests Modulo', () => {

    expect(modulo(7, 3)).toBe(1);
    expect(modulo(6, 6)).toBe(0);
    expect(modulo(2, 7)).toBe(2);
    expect(modulo(-4, 5)).toBe(1);
    expect(modulo(2.6, 1)).toBeCloseTo(0.6);
    expect(modulo(-18.2, 10)).toBeCloseTo(1.8);
});

test('Tests IsEven', () => {

    expect(isEven(4)).toBe(true);
    expect(isEven(1)).toBe(false);
    expect(isEven(-2)).toBe(true);
    expect(isEven(2.5)).toBe(false);
});

test('Tests Median', () => {

    expect(median([4, 5, 2, 9])).toBeCloseTo(4.5);
    expect(median([])).toBe(0);
    expect(median([8, 2, 10])).toBe(8);
    expect(median([1, 2, 3, 4])).toBeCloseTo(2.5);
});