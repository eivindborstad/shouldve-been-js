import { parseNumberStrict } from './DecimalParser';

export function checkVersion(currentVersion: string, minVersion: string): boolean {

    const currentVersionList: number[] = currentVersion.split('.').map((section: string) => parseNumberStrict(section) ?? 0);
    const minVersionList: number[] = minVersion.split('.').map((section: string) => parseNumberStrict(section) ?? 0);

    for (let i: number = 0; i < minVersionList.length; i++) {

        const currentVersionNumber: number = currentVersionList[i] ?? 0;
        const minVersionNumber: number = minVersionList[i] ?? 0;
    
        if (minVersionNumber < currentVersionNumber) {
            return true;
        }
    
        if (minVersionNumber > currentVersionNumber) {
            return false;
        }
    }

    return true;
}