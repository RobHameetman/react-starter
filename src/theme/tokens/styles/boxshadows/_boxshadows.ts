// import { Color } from '../colors';
import { CoreTokens } from '../../core';
import { AnyColor } from '../colors';
import { DefaultLength, Length } from '../spacing';

/**
 * {@link Length}
 */
export type BoxShadowOffset<L extends DefaultLength = DefaultLength> = `${L} ${L}`;
// export type BoxShadowOffset = `${Length} ${Length}`;

/**
 * {@link Length}
 */
export type BoxShadowFeathering<L extends DefaultLength = DefaultLength> = L | `${L} ${L}`;
// export type BoxShadowFeathering = Length | `${Length} ${Length}`;

/**
 * {@link Color}
 */
export type BoxShadowShorthand<L extends DefaultLength = DefaultLength> =
	| BoxShadowOffset<L>
	| `${BoxShadowOffset<L>} ${BoxShadowFeathering<L>}`
	| `${AnyColor} ${BoxShadowOffset<L>}`
	| `${BoxShadowOffset<L>} ${AnyColor} `
	| `${AnyColor} ${BoxShadowOffset<L>} ${BoxShadowFeathering<L>}`
	| `${BoxShadowOffset<L>} ${BoxShadowFeathering<L>} ${AnyColor}`;

// export type BoxShadowShorthand<L extends DefaultLength = DefaultLength> =
// 	`${`${'inset'} ` | ''}${`${Color} ` | ''}${BoxShadowOffset<L>}${` ${BoxShadowFeathering<L>}` | ''}${` ${'inset'}` | ''}${` ${Color}` | ''}`;

/**
 * {@link BoxShadowShorthand}
 */
export type InsetBoxShadow<L extends DefaultLength = DefaultLength> =
	| `inset ${BoxShadowShorthand<L>}`
	| `${BoxShadowShorthand<L>} inset`;

/**
 * {@link BoxShadowShorthand},
 * {@link InsetBoxShadow}
 */
export type BoxShadow<L extends DefaultLength = DefaultLength> =
	| BoxShadowShorthand<L>
	| InsetBoxShadow<L>
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
// const hasTypo: BoxShadow = '0 1px 2x #00000029';
// const badSize: BoxShadow = '0 1px 2vh #00000029';
// const notHex: BoxShadow = '0 1px 2px rgba(0, 0, 0, 0.16)';
// const extraSpace: BoxShadow = '0 1px 2px 0 inset ';
// const wrongKeyword: BoxShadow = 'auto';

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
