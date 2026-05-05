import type { PersistedClient, Persister } from '@tanstack/react-query-persist-client';
// Purpose: IndexedDB-backed persister for TanStack Query cache.
// bSDD dictionary/class data rarely changes — persisting across sessions avoids
// re-fetching thousands of classes on every app load.
import { del, get, set } from 'idb-keyval';

const IDB_KEY: IDBValidKey = 'bsdd-query-cache';

export function createIDBPersister(): Persister {
  return {
    persistClient: async (client: PersistedClient) => {
      await set(IDB_KEY, client);
    },
    restoreClient: async () => {
      return await get<PersistedClient>(IDB_KEY);
    },
    removeClient: async () => {
      await del(IDB_KEY);
    },
  };
}

export const bsddPersister = createIDBPersister();
