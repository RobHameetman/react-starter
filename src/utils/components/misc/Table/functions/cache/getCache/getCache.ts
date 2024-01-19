import { TABLE_CACHE_KEY } from '../../../constants';
import { TableCache } from '../../../types';

/**
 * Retrieve the table cache from LocalStorage if available.
 *
 * @param name - The name of the current table.
 *
 * @returns The table state cached in LocalStorage or `null`.
 *
 * @remarks
 * Our table state is cached in LocalStorage for cross-session browser
 * persistence and user convenience.
 */
export const getCache = (name: string): TableCache | null => {
	const cache = window.localStorage.getItem(btoa(`${TABLE_CACHE_KEY} ${name}`));
	const decoded = cache ? atob(JSON.parse(cache)) : '';

	return decoded ? JSON.parse(decoded) : null;
};
