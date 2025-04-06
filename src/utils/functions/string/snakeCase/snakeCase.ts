import { words } from '@/utils/functions/string/words';

/**
 * Convert a string to snake-case.
 * @see https://en.wikipedia.org/wiki/Snake_case
 *
 * @example
 * ```TypeScript
 * snakeCase('Foo Bar')      // 'foo_bar'
 * snakeCase('fooBar')       // 'foo_bar'
 * snakeCase('--FOO-BAR--')  // 'foo_bar'
 * snakeCase('foo2bar')      // 'foo_2_bar'
 * ```
 *
 * @param value - A string to convert to snake-case.
 *
 * @returns The snake-case version of `value`.
 */
export const snakeCase = (value: string) =>
	words(value.replace(/['\u2019]/g, '')).reduce(
		(result, word, index) =>
			`${result}${index ? '_' : ''}${word.toLowerCase()}`,
		'',
	) as string;
