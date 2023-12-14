import { parseNumberStrict } from './DecimalParser';

export function validateNumberInput(input: string, allowDecimals: boolean, minValue: number | null, maxValue: number | null): string | null {

    const modifiedInput: string = input.replace(/ /gu, '');

    if (modifiedInput === '') {
        return '';
    }

    if (allowDecimals && (modifiedInput === '.' || modifiedInput === ',')) {
        return '.';
    }

    if ((minValue === null || minValue < 0) && modifiedInput === '-') {
        return '-';
    }

    if (allowDecimals && (minValue === null || minValue < 0) && (modifiedInput === '-.' || modifiedInput === '-,')) {
        return '-.';
    }

    const numberValue: number | null = parseNumberStrict(modifiedInput);
    if (numberValue !== null && (Number.isInteger(numberValue) || allowDecimals) && (minValue === null || numberValue >= minValue) && (maxValue === null || numberValue <= maxValue)) {
        
        if (!allowDecimals) {
            return modifiedInput.replace('.', '');
        } else {
            return modifiedInput;
        }
    }

    return null;
}