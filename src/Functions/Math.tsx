export function modulo(n: number, d: number): number {

    return n < 0 ? ((n % d) + d) % d : n % d;
}

export function isEven(n: number): boolean {

    return modulo(n, 2) === 0;
}

export function median(numbers: number[]): number {

    if (numbers.length === 0) {
        return 0;
    }

    const sortedNumbers: number[] = [...numbers].sort((a: number, b: number) => a - b);

    if (isEven(sortedNumbers.length)) {
        return (sortedNumbers[(sortedNumbers.length / 2) - 1] + sortedNumbers[sortedNumbers.length / 2]) / 2;
    } else {
        return sortedNumbers[Math.floor(sortedNumbers.length / 2)];
    }
}