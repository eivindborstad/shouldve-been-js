import fileDownload from 'js-file-download';

export function exportToTsv(header: string[], body: string[][], fileName: string): void {

    let contentString: string = header.join('\t') + '\n';

    body.forEach((bodyRow: string[]) => {
        contentString += bodyRow.join('\t') + '\n';
    });

    const blob: Blob = new Blob(
        [contentString],
        {
            type: 'text/plain',
        },
    );

    fileDownload(blob, fileName);
}

export async function importFromTsv(blob: Blob, hasHeader: boolean, columnHeaders: string[]): Promise<Map<string, string>[]> {

    if (!hasHeader && columnHeaders.length === 0) {
        return [];
    }

    const contentString: string = await new Response(blob).text();

    const rows: string[] = contentString.replace(/\r/gu, '').split('\n');

    const filteredRows: string[] = rows.filter((row: string) => row !== '' && !row.startsWith('#')); //remove empty rows and lines starting with hashtag

    if (filteredRows.length < 2) {
        return [];
    }

    const headers: string[] = columnHeaders.length > 0 ? columnHeaders : (filteredRows[0]?.split('\t') ?? []);

    const dataObjects: Map<string, string>[] = [];

    filteredRows.slice(hasHeader ? 1 : 0).forEach((row: string) => {

        const dataCells: string[] = row.split('\t');

        if (dataCells.length === headers.length) { //ignores rows with too few/many values

            const dataObject: Map<string, string> = new Map<string, string>();

            for (let i: number = 0; i < dataCells.length; i++) {
                dataObject.set(headers[i] ?? '', dataCells[i] ?? '');
            }

            dataObjects.push(dataObject);
        }
    });

    return dataObjects;
}