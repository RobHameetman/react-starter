import { UnicodeCharacterRanges as Ranges } from '@/utils/enums/UnicodeCharacterRanges';
import { UnicodeCaptureGroups as Groups } from '@/utils/enums/UnicodeCaptureGroups';

/**
 * Used for matching complex Unicode strings instead of String.toUpperCase('')
 * or String.toLowerCase(''), which is used for ASCII strings. This regular
 * expression matches any string that contains at least one of the following:
 * - Zero-width joiner character
 * - Astral character (characters from Unicode planes 1-16)
 * - Combining mark
 * - Variation selector
 */
export const HAS_UNICODE_REGEX = RegExp(
	`[${Groups.ZWJ}${Ranges.Astral}${Ranges.Combo}${Ranges.Var}]`,
);
