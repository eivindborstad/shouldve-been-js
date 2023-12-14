import { isFloatsEqual } from '../entry';

test('Tests CompareFloats', () => {

    expect(isFloatsEqual(2, -2)).toBe(false);
    expect(isFloatsEqual(2, 2)).toBe(true);
    expect(isFloatsEqual(2.6, 5.2 / 2)).toBe(true);
    expect(isFloatsEqual(1.11, 1.12)).toBe(false);
    expect(isFloatsEqual(0.777777777, 0.777777778)).toBe(true);
    expect(isFloatsEqual(0, 1 / 100000000)).toBe(true);
});