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

    if (filteredRows.length < (hasHeader ? 2 : 1)) { //need at least 2 rows if the first one is a header
        return [];
    }

    const headers: string[] = columnHeaders.length > 0 ? columnHeaders : (filteredRows[0]?.split('\t') ?? []);

    const dataObjects: Map<string, string>[] = [];

    filteredRows.slice(hasHeader ? 1 : 0).forEach((row: string) => {

        const dataCells: string[] = row.split('\t');

        const dataObject: Map<string, string> = new Map<string, string>();

        for (let i: number = 0; i < headers.length; i++) {
            dataObject.set(headers[i] ?? '', dataCells[i] ?? ''); //if there are fewer/more columns in the datarow than in the header, the first ones will be used and the rest will be empty
        }

        dataObjects.push(dataObject);
    });

    return dataObjects;
}