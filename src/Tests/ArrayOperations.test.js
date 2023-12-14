import { getAmongAllowedValues, hasDuplicates, removeDuplicates, removeNulls, splitStringByMultipleDelimiters, transposeMatrix } from '../entry';

test('Tests transposeMatrix', () => {

    expect(transposeMatrix([]).length).toBe(0);
    const transposedMatrix = transposeMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]])
    expect(transposedMatrix.length).toBe(3);
    expect(transposedMatrix[0].length).toBe(4);
    expect(transposedMatrix[0][0]).toBe(1);
    expect(transposedMatrix[0][1]).toBe(4);
    expect(transposedMatrix[0][2]).toBe(7);
    expect(transposedMatrix[0][3]).toBe(10);
    expect(transposedMatrix[1][0]).toBe(2);
    expect(transposedMatrix[1][1]).toBe(5);
    expect(transposedMatrix[1][2]).toBe(8);
    expect(transposedMatrix[1][3]).toBe(11);
    expect(transposedMatrix[2][0]).toBe(3);
    expect(transposedMatrix[2][1]).toBe(6);
    expect(transposedMatrix[2][2]).toBe(9);
    expect(transposedMatrix[2][3]).toBe(12);
});

test('Tests hasDuplicates', () => {

    expect(hasDuplicates([])).toBe(false);
    expect(hasDuplicates([1])).toBe(false);
    expect(hasDuplicates(['a', 'b'])).toBe(false);
    expect(hasDuplicates([4, 4])).toBe(true);
    expect(hasDuplicates([2, 0, -1, 8, 0])).toBe(true);
});

test('Tests removeDuplicates', () => {

    expect(removeDuplicates([]).length).toBe(0);
    expect(removeDuplicates([1]).length).toBe(1);
    expect(removeDuplicates(['a', 'b']).length).toBe(2);
    expect(removeDuplicates([4, 4]).length).toBe(1);
    expect(removeDuplicates([4, 4, 1, 4]).length).toBe(2);
    expect(removeDuplicates([2, 0, -1, 8, 0]).length).toBe(4);
    expect(removeDuplicates([2, 0, -1, 8, 0, 7, 7]).length).toBe(5);
    expect(removeDuplicates([2, 0, -1, 8, 0, 7, 7])[2]).toBe(-1);
});

test('Tests splitStringByMultipleDelimeters', () => {

    expect(splitStringByMultipleDelimiters('hei', ['\t', '\n']).length).toBe(1);
    expect(splitStringByMultipleDelimiters('hahaha', ['a', 'h']).length).toBe(7);
    expect(splitStringByMultipleDelimiters('abcdefg', ['c', 'e']).length).toBe(3);
    expect(splitStringByMultipleDelimiters('abcdefg', ['c', 'e'])[1]).toBe('d');
    expect(splitStringByMultipleDelimiters('', ['\t', '\n']).length).toBe(1);
});

test('Tests getAmongAllowedValues', () => {

    expect(getAmongAllowedValues('value', ['novalue', 'value'], '')).toBe('value');
    expect(getAmongAllowedValues('2', [], '3')).toBe('3');
    expect(getAmongAllowedValues('2', ['2'], '3')).toBe('2');
    expect(getAmongAllowedValues('2', ['1', '2', '3', '4'], '')).toBe('2');
    expect(getAmongAllowedValues('5', ['1', '2', '3', '4'], '')).toBe('');
});

test('Tests removeNulls', () => {

    expect(removeNulls([]).length).toBe(0);
    expect(removeNulls([1, 2, 3]).length).toBe(3);
    expect(removeNulls([1, 2, null, 3, null]).length).toBe(3);
    expect(removeNulls([null, null]).length).toBe(0);
    expect(removeNulls([1, 2, null, 3, null])[2]).toBe(3);
});