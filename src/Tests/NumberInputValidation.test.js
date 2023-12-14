import { validateNumberInput } from '../entry';

test('Tests NumberInputValidation', () => {

    expect(validateNumberInput('15', true, null, null)).toBe('15');
    expect(validateNumberInput('15', false, 0, 20)).toBe('15');
    expect(validateNumberInput('15', false, 10, 12)).toBeNull();
    expect(validateNumberInput('15', false, 100, 200)).toBeNull();
    expect(validateNumberInput('15.5', true, null, null)).toBe('15.5');
    expect(validateNumberInput('15,5', true, null, null)).toBe('15,5');
    expect(validateNumberInput('15.5', false, null, null)).toBeNull();
    expect(validateNumberInput('.4', true, null, null)).toBe('.4');
    expect(validateNumberInput('8.', true, null, null)).toBe('8.');
    expect(validateNumberInput('-7.3', true, 0, null)).toBeNull();
    expect(validateNumberInput('', true, null, null)).toBe('');
    expect(validateNumberInput('.', true, null, null)).toBe('.');
    expect(validateNumberInput('-', true, null, null)).toBe('-');
    expect(validateNumberInput('-.', true, null, null)).toBe('-.');
    expect(validateNumberInput('-,', true, null, null)).toBe('-.');
    expect(validateNumberInput('-.', true, 0, null)).toBeNull();
    expect(validateNumberInput(' 5', true, null, null)).toBe('5');
    expect(validateNumberInput('.-', true, null, null)).toBeNull();
    expect(validateNumberInput('70', true, null, 50)).toBeNull();
    expect(validateNumberInput('-.5', true, null, null)).toBe('-.5');
    expect(validateNumberInput('-.-', true, null, null)).toBeNull();
    expect(validateNumberInput('5-', true, null, null)).toBeNull();
    expect(validateNumberInput('a', true, null, null)).toBeNull();
    expect(validateNumberInput('..', true, null, null)).toBeNull();
    expect(validateNumberInput('-10.2', true, null, null)).toBe('-10.2');
});