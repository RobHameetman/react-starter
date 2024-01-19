// import { Color } from '../colors';
import { CoreTokens } from '../../core';
import { Length } from '../spacing';

type Color = `#${string}`;

/**
 * {@link Length}
 */
export type BoxShadowOffset = `${Length} ${Length}`;

/**
 * {@link Length}
 */
export type BoxShadowFeathering = Length | `${Length} ${Length}`;

/**
 * {@link Color}
 */
export type BoxShadowShorthand =
	| BoxShadowOffset
	| `${BoxShadowOffset} ${BoxShadowFeathering}`
	| `${Color} ${BoxShadowOffset}`
	| `${BoxShadowOffset} ${Color} `
	| `${Color} ${BoxShadowOffset} ${BoxShadowFeathering}`
	| `${BoxShadowOffset} ${BoxShadowFeathering} ${Color}`;

/**
 * {@link BoxShadowShorthand}
 */
export type InsetBoxShadow =
	| `inset ${BoxShadowShorthand}`
	| `${BoxShadowShorthand} inset`;

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

// ✅ no error
const keyword: BoxShadow = 'none';
const correct: BoxShadow = '0 1px 2px 0 #00000029';
const noColor: BoxShadow = '0 1px 2px 0';
const inset: BoxShadow = 'inset 0 1px 2px 0 #00000029';
const inset2: BoxShadow = '#00000029 0 1px 2px 0 inset';

// ❌ not assignable to type 'BoxShadow'
const hasTypo: BoxShadow = '0 1px 2x #00000029';
const badSize: BoxShadow = '0 1px 2vh #00000029';
const notHex: BoxShadow = '0 1px 2px rgba(0, 0, 0, 0.16)';
const extraSpace: BoxShadow = '0 1px 2px 0 inset ';
const wrongKeyword: BoxShadow = 'none';

type Test = String;

const str = String('');

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
