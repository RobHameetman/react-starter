import { UnicodeCharacterRanges as Ranges } from '@app/utils/enums/UnicodeCharacterRanges';
import { UnicodeCaptureGroups as Groups } from '@app/utils/enums/UnicodeCaptureGroups';
import { isNonEmptyString } from '@app/utils/functions/check/js/specialized/isNonEmptyString';

/**
 * Composite regular expression strings for matching specific combinations of
 * Unicode characters. Each enum member is a string representing a regular
 * expression that can match the corresponding character combination.
 */
export enum UnicodeRegexInputs {
	/**
	 * Matches any character that is either a lowercase letter or not categorized
	 * in other groups.
	 */
	MiscLower = `(?:${Groups.Lower}|${Groups.Misc})`,

	/**
	 * Matches any character that is either an uppercase letter or not categorized
	 * in other groups.
	 */
	MiscUpper = `(?:${Groups.Upper}|${Groups.Misc})`,

	/**
	 * Matches a non-astral character followed by an optional combining mark.
	 */
	NonAstralCombo = `${Groups.NonAstral}${Groups.Combo}?`,

	/**
	 * Matches an optional contraction following an apostrophe in lowercase.
	 */
	OptContrLower = `(?:${Groups.Apos}(?:d|ll|m|re|s|t|ve))?`,

	/**
	 * Matches an optional contraction following an apostrophe in uppercase.
	 */
	OptContrUpper = `(?:${Groups.Apos}(?:D|LL|M|RE|S|T|VE))?`,

	/**
	 * Matches an optional character modifier.
	 */
	OptMod = `${Groups.Modifier}?`,

	/**
	 * Matches an optional variation selector.
	 */
	OptVar = `[${Ranges.Var}]?`,

	/**
	 * Matches an optional sequence of characters joined with a zero-width joiner.
	 */
	OptJoin = `(?:${Groups.ZWJ}(?:${Groups.NonAstral}|${Groups.Regional}|${Groups.SurrPair})${OptVar}${OptMod})*`,

	/**
	 * Matches an ordinal number indicator in lowercase.
	 */
	OrdLower = `${Groups.Digit}*(?:1st|2nd|3rd|(?![123])${Groups.Digit}th)(?=\\b|[A-Z_])`,

	/**
	 * Matches an ordinal number indicator in uppercase.
	 */
	OrdUpper = `${Groups.Digit}*(?:1ST|2ND|3RD|(?![123])${Groups.Digit}TH)(?=\\b|[a-z_])`,

	/**
	 * Matches a sequence of characters including optional variation selectors,
	 * modifiers, and joined characters.
	 */
	Seq = `${OptVar}${OptMod}${OptJoin}`,

	/**
	 * Matches a symbol character, including combining marks and regional
	 * indicators.
	 */
	Symbol = `(?:${NonAstralCombo}|${Groups.Combo}|${Groups.Regional}|${Groups.SurrPair}|${Groups.Astral})`,

	/**
	 * Matches an emoji character sequence.
	 */
	Emoji = `(?:${Groups.Dingbat}|${Groups.Regional}|${Groups.SurrPair})${Seq}`,
}

/**
 * Any one of the above {@link UnicodeRegexInputs}.
 */
export type UnicodeRegexInput = `${UnicodeRegexInputs}`;

/**
 * A list of all {@link UnicodeRegexInput} values.
 */
export const UNICODE_REGEX_INPUTS = Object.freeze(
	Object.values<UnicodeRegexInput>(UnicodeRegexInputs),
);

/**
 * Checks that an `unknown` value is a {@link UnicodeRegexInput}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link UnicodeRegexInputs}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link UnicodeRegexInput}.
 */
export const isUnicodeRegexInput = (
	value: unknown,
): value is UnicodeRegexInput =>
	/**
	 * value
	 */
	isNonEmptyString(value) &&
	Array.from<string>(UNICODE_REGEX_INPUTS).includes(value);
