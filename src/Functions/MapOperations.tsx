export function reverseLookup<K, V>(map: Map<K, V>, value: V | null): K | null {

    for (const key of map.keys()) {

        if (map.get(key) === value) {
            return key;
        }
    }

    return null;
}