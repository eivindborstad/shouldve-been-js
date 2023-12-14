import { checkVersion } from '../entry';

test('Tests checkVersion', () => {

    expect(checkVersion('1.0.0', '1.0.0')).toBe(true);
    expect(checkVersion('1.4.1', '1.2.2')).toBe(true);
    expect(checkVersion('1.2.2', '1.4.1')).toBe(false);
    expect(checkVersion('1.0.0', '2')).toBe(false);
    expect(checkVersion('2.3', '2.3.5')).toBe(false);
    expect(checkVersion('2.3.5', '2.3')).toBe(true);
    expect(checkVersion('2.3.a', '2.3.b')).toBe(true);
    expect(checkVersion('2.3.a', '2.3.3.b')).toBe(false);
});