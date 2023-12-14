export function numberToMinMaxDecimalsString(value: number | null, minDecimals: number, maxDecimals: number): string {

    if (value === null) {
        return '';
    }

    const stringWithDot: string = value.toLocaleString('en-US', {
        minimumFractionDigits: minDecimals,
        maximumFractionDigits: maxDecimals,
    });

    const stringWithoutThousandSeparators: string = stringWithDot.replace(/,/gu, '');

    return stringWithoutThousandSeparators;
}

export function numberToString(value: number | null): string {

    if (value === null) {
        return '';
    }

    return value.toString();
}

export function parseNumberStrict(input: string | null): number | null {

    if (input === null) {
        return null;
    }

    const stringWithDot: string = input.replace(',', '.');

    const numberValue: number = Number(stringWithDot);

    if (input === '' || !isFinite(numberValue)) {

        return null;
    } else {

        return numberValue;
    }
}

export function parseNumberStrictAllowInfinite(input: string | null): number {

    if (input === null) {
        return NaN;
    }

    const stringWithDot: string = input.replace(',', '.');

    const numberValue: number = Number(stringWithDot);

    if (input === '') {

        return NaN;
    } else {

        return numberValue;
    }
}

export function roundToNDecimals(input: number, n: number): number {

    return Math.round(input * (10 ** n)) / (10 ** n);
}