import { parseNumberStrict, parseNumberStrictAllowInfinite, numberToMinMaxDecimalsString, numberToString } from '../entry';

test('Tests DecimalParser', () => {

    expect(numberToMinMaxDecimalsString(12.3, 0, 6)).toBe('12.3');
    expect(numberToMinMaxDecimalsString(13.1, 3, 6)).toBe('13.100');
    expect(numberToMinMaxDecimalsString(-7.18765, 1, 1)).toBe('-7.2');
    expect(numberToMinMaxDecimalsString(null, 0, 0)).toBe('');
    expect(numberToString(3)).toBe('3');
    expect(numberToString(3.6)).toBe('3.6');
    expect(numberToString(-3.4)).toBe('-3.4');
    expect(numberToString(null)).toBe('');
    expect(parseNumberStrict('-4.5')).toBe(-4.5);
    expect(parseNumberStrict('-4,5')).toBe(-4.5);
    expect(parseNumberStrict('')).toBeNull();
    expect(parseNumberStrict('12.3.2')).toBeNull();
    expect(parseNumberStrict((1/0).toString())).toBeNull();
    expect(parseNumberStrictAllowInfinite('-4.5')).toBe(-4.5);
    expect(parseNumberStrictAllowInfinite('-4,5')).toBe(-4.5);
    expect(parseNumberStrictAllowInfinite('')).toBe(NaN);
    expect(parseNumberStrictAllowInfinite('12.3.2')).toBe(NaN);
    expect(parseNumberStrictAllowInfinite((1/0).toString())).toBe(Infinity);
});