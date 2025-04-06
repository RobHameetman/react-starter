import { getItem } from '@/utils/functions/storage/getItem';
import { snakeCase } from '@/utils/functions/string/snakeCase';
import { isCachedForm } from '../../../types/CachedForm';

/**
 * Retrieve the form cache from LocalStorage if available.
 *
 * @param name - The name of the current form.
 *
 * @remarks
 * Our form state is cached in LocalStorage for cross-session browser
 * persistence and user convenience.
 *
 * @returns The form state cached in LocalStorage or `null`.
 */
export const getFormCache = (name: string) => {
	const cache = getItem(snakeCase(`${name} Form`));

	/* console.log(cache); */
	const parsed = JSON.parse(cache || '{}');

	console.log(parsed);

	return isCachedForm(parsed) ? parsed : null;
};
