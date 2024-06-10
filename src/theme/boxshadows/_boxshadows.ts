import { AnyColor } from '../colors';
import { CoreTokens } from '../core';
import { Length } from '../spacing';

/**
 * {@link Length}
 */
export type BoxShadowOffset = `${Length} ${Length}`;

/**
 * {@link Length}
 */
export type BoxShadowFeathering = Length | `${Length} ${Length}`;

/**
 * {@link AnyColor}
 */
export type BoxShadowShorthand =
	| `${BoxShadowOffset} ${AnyColor}`
	| `${BoxShadowOffset} ${BoxShadowFeathering} ${AnyColor}`;

/**
 * {@link BoxShadowShorthand}
 */
export type InsetBoxShadow = `inset ${BoxShadowShorthand}`;

/**
 * {@link BoxShadowShorthand},
 * {@link InsetBoxShadow}
 */
export type BoxShadow =
	| BoxShadowShorthand
	| InsetBoxShadow
	| 'inherit'
	| 'initial'
	| 'none'
	| 'revert-layer'
	| 'revert'
	| 'unset';

/**
 * {@link CoreTokens}
 */
export const BOX_SHADOW_1: BoxShadow = `0 ${CoreTokens.BaseLength * 0.125}rem ${
	CoreTokens.BaseLength * 0.325
}rem 0 #00000029`;

/**
 * {@link CoreTokens}
 */
export const BOX_SHADOW_2: BoxShadow = `0 ${CoreTokens.BaseLength * 0.325}rem ${
	CoreTokens.BaseLength * 0.125
}rem 0 #00000029`;
