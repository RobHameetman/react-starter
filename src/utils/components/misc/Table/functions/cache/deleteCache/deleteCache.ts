import { TABLE_CACHE_KEY } from '../../../constants';

/**
 * Delete the table cache from LocalStorage.
 *
 * @param name - The name of the current table.
 *
 * @remarks
 * Our table state is cached in LocalStorage for cross-session browser
 * persistence and user convenience.
 */
export const deleteCache = (name: string) => {
	return window.localStorage.removeItem(btoa(`${TABLE_CACHE_KEY} ${name}`));
};
