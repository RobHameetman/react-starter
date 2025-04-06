import { capitalize } from '@/utils/functions/string/capitalize';
import { words } from '@/utils/functions/string/words';

/**
 * Convert a string to camel-case.
 * @see https://en.wikipedia.org/wiki/Camel_case
 *
 * @example
 * ```TypeScript
 * camelCase('Foo Bar')        // 'fooBar'
 * camelCase('--foo-bar--')    // 'fooBar'
 * camelCase('__FOO_BAR__')    // 'fooBar'
 * ```
 *
 * @param value - A string to convert to camel-case.
 *
 * @returns The camel-case version of `value`.
 */
export const camelCase = (value: string) =>
	words(value.replace(/['\u2019]/g, '')).reduce((result, word, index) => {
		const lower = word.toLowerCase();

		return result + (index ? capitalize(lower) : lower);
	}, '');
