import { UnicodeCaptureGroups as Groups } from '@/utils/enums/UnicodeCaptureGroups';
import { UnicodeRegexInputs as Inputs } from '@/utils/enums/UnicodeRegexInputs';

/**
 * @TODO
 */
export const UNICODE_WORDS_REGEX = RegExp(
	[
		`${Groups.Upper}?${Groups.Lower}+${Inputs.OptContrLower}(?=${[
			Groups.Break,
			Groups.Upper,
			'$',
		].join('|')})`,
		`${Inputs.MiscUpper}+${Inputs.OptContrUpper}(?=${[
			Groups.Break,
			Groups.Upper + Inputs.MiscLower,
			'$',
		].join('|')})`,
		`${Groups.Upper}?${Inputs.MiscLower}+${Inputs.OptContrLower}`,
		`${Groups.Upper}+${Inputs.OptContrUpper}`,
		Inputs.OrdUpper,
		Inputs.OrdLower,
		`${Groups.Digit}+`,
		Inputs.Emoji,
	].join('|'),
	'g',
);
