import { UnicodeCharacterRanges as Ranges } from '@/utils/enums/UnicodeCharacterRanges';
import { isNonEmptyString } from '@/utils/functions/check/js/specialized/isNonEmptyString';

/**
 * Regular expression strings for various Unicode character categories. Each
 * enum member is a string representing a regular expression that can match
 * characters in the corresponding category.
 */
export enum UnicodeCaptureGroups {
	/**
	 * Matches apostrophes and right single quotation marks.
	 */
	Apos = "['\u2019]",

	/**
	 * Matches any character in the Unicode astral planes.
	 */
	Astral = `[${Ranges.Astral}]`,

	/**
	 * Matches characters commonly used as delimiters or separators in text.
	 */
	Break = `[${Ranges.Break}]`,

	/**
	 * Matches a combination of all the "Combo" ranges.
	 */
	Combo = `[${Ranges.Combo}]`,

	/**
	 * Matches any digit (0-9).
	 */
	Digit = '\\d',

	/**
	 * Matches any character in the Dingbats Unicode block.
	 */
	Dingbat = `[${Ranges.Dingbat}]`,

	/**
	 * Matches any lowercase alphabetic character, including some non-ASCII
	 * characters.
	 */
	Lower = `[${Ranges.Lower}]`,

	/**
	 * Matches any uppercase alphabetic character, including some non-ASCII
	 * characters.
	 */
	Upper = `[${Ranges.Upper}]`,

	/**
	 * Matches any character that is not in the Astral, Break, Digit, Dingbat,
	 * Lower, or Upper categories.
	 */
	Misc = `[^${Ranges.Astral}${Ranges.Break}${Digit}${Ranges.Dingbat}${Ranges.Lower}${Ranges.Upper}]`,

	/**
	 * Matches any Fitzpatrick skin tone modifier.
	 */
	Fitz = '\\ud83c[\\udffb-\\udfff]',

	/**
	 * Matches any combining mark or Fitzpatrick skin tone modifier.
	 */
	Modifier = `(?:${Combo}|${Fitz})`,

	/**
	 * Matches any character that is not in the Unicode astral planes.
	 */
	NonAstral = `[^${Ranges.Astral}]`,

	/**
	 * Matches any regional indicator symbol.
	 */
	Regional = '(?:\\ud83c[\\udde6-\\uddff]){2}',

	/**
	 * Matches any Unicode surrogate pair.
	 */
	SurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',

	/**
	 * Matches the zero-width joiner (ZWJ).
	 */
	ZWJ = '\\u200d',
}

/**
 * Any one of the above {@link UnicodeCaptureGroups}.
 */
export type UnicodeCaptureGroup = `${UnicodeCaptureGroups}`;

/**
 * A list of all {@link UnicodeCaptureGroup} values.
 */
export const UNICODE_CAPTURE_GROUPS = Object.freeze(
	Object.values<UnicodeCaptureGroup>(UnicodeCaptureGroups),
);

/**
 * Checks that an `unknown` value is a {@link UnicodeCaptureGroup}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link UnicodeCaptureGroups}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link UnicodeCaptureGroup}.
 */
export const isUnicodeCaptureGroup = (
	value: unknown,
): value is UnicodeCaptureGroup =>
	/**
	 * value
	 */
	isNonEmptyString(value) &&
	Array.from<string>(UNICODE_CAPTURE_GROUPS).includes(value);
