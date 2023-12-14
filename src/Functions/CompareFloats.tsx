export const floatDelta: number = 0.0001;

export function isFloatsEqual(a: number, b: number): boolean {

    return (Math.abs(a - b) < floatDelta);
}