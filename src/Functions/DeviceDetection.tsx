//various methods related to finding the correct device/browser/environment
//see: https://www.geeksforgeeks.org/how-to-detect-the-user-browser-safari-chrome-ie-firefox-and-opera-using-javascript/

export function isSafari(): boolean {

    try {
        const userAgent: string = window.navigator.userAgent.toLowerCase();
        return userAgent.includes('safari') && !userAgent.includes('chrome'); //the chrome agent includes the word safari as well
        
    } catch (e: unknown) {
        return false;
    }
}

export function isInstalled(): boolean {
    return window.matchMedia('(display-mode: standalone)').matches;
}