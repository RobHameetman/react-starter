import { ASCII_WORDS_REGEX } from '@/utils/constants/unicode/regex/ASCII_WORDS_REGEX';
import { IS_UNICODE_REGEX } from '@/utils/constants/unicode/regex/IS_UNICODE_REGEX';
import { UNICODE_WORDS_REGEX } from '@/utils/constants/unicode/regex/UNICODE_WORDS_REGEX';

/**
 * Split a string into an array of words.
 *
 * @param value - A string value to split.
 * @param pattern - [Optional] A custom patter to match words against.
 *
 * @returns An array of words from the given value or an empty array if no words
 * are found.
 */
export const words = (value: string, pattern?: string | RegExp) => {
	if (pattern) {
		return value.match(pattern) || [];
	}

	return Array.from(
		value.match(
			IS_UNICODE_REGEX.test(value) ? UNICODE_WORDS_REGEX : ASCII_WORDS_REGEX,
		) ?? [],
	);
};
