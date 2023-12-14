import { safeParse } from './SafeParse';

export async function base64EncodeBinaryBlob(blob: Blob): Promise<string> {
    
    // eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
    const Buffer: any = require('buffer').Buffer; 
    
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const base64Data: string = safeParse<string>(Buffer.from(await blob.arrayBuffer(), 'binary').toString('base64'), '');

    return base64Data;
}

export function base64DecodeBinaryBlob(base64Data: string): Blob {

    // eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
    const Buffer: any = require('buffer').Buffer; 
    
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const blob: Blob = new Blob([Buffer.from(base64Data, 'base64')]);

    return blob;
}