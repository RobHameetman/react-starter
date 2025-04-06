import { HAS_UNICODE_REGEX } from '@/utils/constants/unicode/regex/HAS_UNICODE_REGEX';
import { UNICODE_STRING_REGEX } from '@/utils/constants/unicode/regex/UNICODE_STRING_REGEX';

/**
 * Convert the first character of `string` value to uppercase and the remaining
 * to lowercase.
 *
 * @example
 * ```TypeScript
 * camelCase('ROB')  // 'Rob'
 * ```
 *
 * @param value - A string to convert to capitalize.
 *
 * @returns The capitalized version of `value`.
 */
export const capitalize = (value: string) => {
	if (!value) {
		return '';
	}

	const unicode = HAS_UNICODE_REGEX.test(value)
		? value.match(UNICODE_STRING_REGEX)
		: undefined;

	const [capital, ...trailing] = unicode ?? value.split('');

	return `${capital.toUpperCase()}${trailing.join('')}`;
};
