import { reverseLookup } from '../entry';

test('Tests MapOperations', () => {

    const map = new Map();
    map.set('a', 'p');
    map.set('b', 'q');
    map.set('c', 'r');

    expect(reverseLookup(map, 'q')).toBe('b');
    expect(reverseLookup(map, 's')).toBeNull();
});