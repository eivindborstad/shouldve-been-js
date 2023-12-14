export function camelCaseToWords(input: string): string {

    return input.split('').map((char: string, index: number) => {
        if (index === 0) {
            return char.toUpperCase();
        } else {
            return char.toUpperCase() === char ? ' ' + char : char;
        }
    }).join('');
}