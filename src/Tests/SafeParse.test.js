import { safeParse, safeParseNullDefault, safeParseUndefinedDefault } from '../entry';

test('Tests SafeParse', () => {

    expect(safeParse('someValue', '')).toBe('someValue');
    expect(safeParse(7, 'default')).toBe('default');
    expect(safeParse(new Date(), new Date(0)).getFullYear()).toBeGreaterThan(1970);
    expect(safeParse('invalid', new Date(0))).toEqual(new Date(0));
    expect(safeParseNullDefault('someValue', '')).toBe('someValue');
    expect(safeParseNullDefault('invalid', new Date(0))).toBeNull();
    expect(safeParseUndefinedDefault('someValue', '')).toBe('someValue');
    expect(safeParseUndefinedDefault('invalid', new Date(0))).toBeUndefined();
});