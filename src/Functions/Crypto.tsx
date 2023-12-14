export async function sha256(message: string): Promise<string | null> { //this only works over https and on localhost, but that shouldn't be a problem
    
    try {
        const messageBuffer = new TextEncoder().encode(message); 
        const hashBuffer = await crypto.subtle.digest('SHA-256', messageBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    } catch (e: unknown) {
        return null;
    }
}