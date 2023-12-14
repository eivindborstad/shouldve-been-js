import { handleInputChangeMultiSelect, handleInputChangeSingleRow } from '../entry';

test('Tests InputChange', () => {

    let map = new Map();
    map.set('1', 'value1');
    map.set('2', 'value2');
    map.set('3', 'value3');

    const setMap = (value) => map = value;

    const newMap1 = handleInputChangeSingleRow('newValue', '1', map, setMap);

    expect(map.get('1')).toBe('newValue');
    expect(map.get('2')).toBe('value2');
    expect(map.get('3')).toBe('value3');
    expect(newMap1.get('1')).toBe('newValue');
    expect(newMap1.get('2')).toBe('value2');
    expect(newMap1.get('3')).toBe('value3');

    const newMap2 = handleInputChangeSingleRow('newValue', '4', map, setMap);

    expect(map.get('1')).toBe('newValue');
    expect(map.get('2')).toBe('value2');
    expect(map.get('3')).toBe('value3');
    expect(newMap2.get('1')).toBe('newValue');
    expect(newMap2.get('2')).toBe('value2');
    expect(newMap2.get('3')).toBe('value3');

    const newMap3 = handleInputChangeMultiSelect('anotherValue', '1', map, setMap, ['2']);

    expect(map.get('1')).toBe('anotherValue');
    expect(map.get('2')).toBe('anotherValue');
    expect(map.get('3')).toBe('value3');
    expect(newMap3.get('1')).toBe('anotherValue');
    expect(newMap3.get('2')).toBe('anotherValue');
    expect(newMap3.get('3')).toBe('value3');

    const newMap4 = handleInputChangeMultiSelect('yetAnotherValue', '1', map, setMap, ['1', '2', '4']);

    expect(map.get('1')).toBe('yetAnotherValue');
    expect(map.get('2')).toBe('yetAnotherValue');
    expect(map.get('3')).toBe('value3');
    expect(newMap4.get('1')).toBe('yetAnotherValue');
    expect(newMap4.get('2')).toBe('yetAnotherValue');
    expect(newMap4.get('3')).toBe('value3');
});