import { TABLE_CACHE_KEY } from '../../../constants';
import { TableCache } from '../../../types';

/**
 * Set the table cache in LocalStorage.
 *
 * @param name - The name of the current table.
 * @param cache - The state of the current table in memory.
 *
 * @remarks
 * Our table state is cached in LocalStorage for cross-session browser
 * persistence and user convenience.
 */
export const setCache = (name: string, cache: TableCache) => {
	const encoded = btoa(JSON.stringify(cache));

	window.localStorage.setItem(
		btoa(`${TABLE_CACHE_KEY} ${name}`),
		JSON.stringify(encoded),
	);
};
