// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export function safeParse<T>(input: any, defaultValue: T): T {

    return typeof input === typeof defaultValue ? input : defaultValue;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export function safeParseNullDefault<T>(input: any, defaultValue: T): T | null { //still need to pass a default value to find type of T

    return typeof input === typeof defaultValue ? input : null;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export function safeParseUndefinedDefault<T>(input: any, defaultValue: T): T | undefined { //still need to pass a default value to find type of T

    return typeof input === typeof defaultValue ? input : undefined;
}