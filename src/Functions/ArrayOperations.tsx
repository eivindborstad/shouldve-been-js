export function transposeMatrix<T>(matrix: T[][]): T[][] {

    if (matrix.length === 0) {
        return [];
    }

    const newArray: T[][] = [];
    
    for (let i: number = 0; i < (matrix[0]?.length ?? 0); i++) {
        newArray.push([]);
    }

    for (let i: number = 0; i < matrix.length; i++) {

        for (let j: number = 0; j < (matrix[0]?.length ?? 0); j++) {

            const element: T | undefined = matrix[i]?.[j];

            if (element !== undefined) {
                newArray[j]?.push(element);
            }
        }
    }

    return newArray;
}

export function hasDuplicates<T>(array: T[]): boolean {

    return (new Set(array)).size !== array.length;
}

export function removeDuplicates<T>(array: T[]): T[] {

    return [...new Set(array)];
}

export function splitStringByMultipleDelimiters(input: string, delimiters: string[]): string[] {

    const tempDelimiter: string = '%%%'; //if the actual input string contains this, the splitting will fail

    let tempString: string = input;

    delimiters.forEach((delimiter: string) => {
        tempString = tempString.split(delimiter).join(tempDelimiter);
    });

    return tempString.split(tempDelimiter);
}

export function getAmongAllowedValues<T>(input: T, allowedValues: T[], defaultValue: T): T {

    return allowedValues.includes(input) ? input : defaultValue;
}

export function removeNulls<T>(array: (T | null)[]): T[] {
    
    return array.flatMap((element: T | null) => (element === null ? [] : [element]));
}