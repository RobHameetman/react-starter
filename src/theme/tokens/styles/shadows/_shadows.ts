import { CoreTokens } from '../../core';
import { AnyColor, HexColor } from '../colors';
import { DefaultLength, Length } from '../spacing';

/**
 * {@link Length}
 */
export type DropShadowOffset<L extends DefaultLength = DefaultLength> = `${L} ${L}`;

/**
 * {@link DefaultLength}
 */
export type DropShadowBlur<L extends DefaultLength = DefaultLength> = L;

/**
 * {@link BoxShadowShorthand},
 * {@link InsetBoxShadow}
 */
export type DropShadow<L extends DefaultLength = DefaultLength, C extends AnyColor = HexColor> =
	| `${C} ${DropShadowOffset<L>}`
	| `${DropShadowOffset<L>} ${C}`
	| `${C} ${DropShadowOffset<L>} ${DropShadowBlur<L>}`
	| `${DropShadowOffset<L>} ${DropShadowBlur<L>} ${C}`;

/**
 * {@link CoreTokens}
 */
export const DROP_SHADOW_1: DropShadow = `0 ${CoreTokens.BaseLength * 0.125}rem ${
	CoreTokens.BaseLength * 0.325
}rem #00000029`;

/**
 * {@link CoreTokens}
 */
export const DROP_SHADOW_2: DropShadow = `0 ${CoreTokens.BaseLength * 0.325}rem ${
	CoreTokens.BaseLength * 0.125
}rem #00000029`;
