export function handleInputChangeMultiSelect(value: string, id: string, currentMap: Map<string, string>, setCurrentMap: (value: Map<string, string>) => void, selectedRows: string[]): Map<string, string> {
    
    const rowsToUpdate: string[] = [...selectedRows]; //updates all selected rows plus the one currently being modified
    if (rowsToUpdate.find((currentId: string) => currentId === id) === undefined) {
        rowsToUpdate.push(id);
    }

    const newMap: Map<string, string> = new Map<string, string>(currentMap);

    rowsToUpdate.forEach((currentId: string) => {
        newMap.set(currentId, value);
    });

    setCurrentMap(newMap);

    return newMap;
}

export function handleInputChangeSingleRow(value: string, id: string, currentMap: Map<string, string>, setCurrentMap: (value: Map<string, string>) => void): Map<string, string> {

    const newMap: Map<string, string> = new Map<string, string>(currentMap);
    newMap.set(id, value);
    setCurrentMap(newMap);
    return newMap;
}