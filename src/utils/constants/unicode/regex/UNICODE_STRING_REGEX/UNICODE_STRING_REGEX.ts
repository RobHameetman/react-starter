import { UnicodeCaptureGroups as Groups } from '@app/utils/enums/UnicodeCaptureGroups';
import { UnicodeRegexInputs as Inputs } from '@app/utils/enums/UnicodeRegexInputs';

/**
 * Used for matching complex Unicode strings instead of String.split(''), which
 * is used for ASCII strings.
 *
 * This pattern is designed to accurately match a variety of Unicode strings,
 * including:
 * - Sequences of base characters followed by a range of diacritic characters
 * - Flags represented by a pair of regional indicator symbols
 * - Single characters from the Basic Multilingual Plane (BMP) and the
 *   Supplementary Multilingual Plane (SMP)
 * - Variations of these characters with the variation selectors \ufe0e (text
 *   style) and \ufe0f (emoji style)
 * - Sequences of these characters modified by Zero Width Joiner (ZWJ, \u200d)
 *   sequences, which are often used in emoji sequences
 *
 * The 'g' flag allows the pattern to match all occurrences in the string.
 */
export const UNICODE_STRING_REGEX = RegExp(
	`${Groups.Fitz}(?=${Groups.Fitz})|${Inputs.Symbol}${Inputs.Seq}`,
	'g',
);
