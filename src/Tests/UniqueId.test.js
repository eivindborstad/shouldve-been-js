import { getUniqueId } from '../entry';
import { removeDuplicates } from '../entry';

test('Tests GetUniqueId', () => {

    const uniqueIds = [];

    for (let i = 0; i < 500; i++) {
        uniqueIds.push(getUniqueId());
    }

    const duplicatesRemoved = removeDuplicates(uniqueIds);

    expect(uniqueIds.length).toBe(500);
    expect(uniqueIds[0].length).toBe(36);
    expect(duplicatesRemoved.length).toBe(uniqueIds.length);
});