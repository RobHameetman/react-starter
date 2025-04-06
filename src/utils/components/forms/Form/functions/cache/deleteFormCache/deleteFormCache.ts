import { removeItem } from '@/utils/functions/storage/removeItem';
import { snakeCase } from '@/utils/functions/string/snakeCase';

/**
 * Delete the form cache from LocalStorage.
 *
 * @param name - The name of the current form.
 *
 * @remarks
 * Our form state is cached in LocalStorage for cross-session browser
 * persistence and user convenience.
 */
export const deleteFormCache = (name: string) =>
	removeItem(snakeCase(`${name} Form`));
