import { setItem } from '@/utils/functions/storage/setItem';
import { snakeCase } from '@/utils/functions/string/snakeCase';
import { CachedForm } from '../../../types';

/**
 * Set the form cache in LocalStorage.
 *
 * @param name - The name of the current form.
 * @param cache - The state of the current form in memory.
 *
 * @remarks
 * Our form state is cached in LocalStorage for cross-session browser
 * persistence and user convenience.
 */
export const setFormCache = (name: string, cache: CachedForm) =>
	setItem(snakeCase(`${name} Form`), JSON.stringify(cache));
