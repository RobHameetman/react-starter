import { Color } from '../colors';
import { CoreTokens } from '../core';
import { LengthInPx, RelativeSpacing, Spacing } from '../spacing';

/**
 * {@link Spacing}
 */
export enum BorderRadii {
	'0.125rem' = CoreTokens.BaseLength / 4,
	'0.25rem' = Spacing['1rem'] / 4,
	'0.375rem' = Spacing['1.5rem'] / 4,
	'0.5rem' = Spacing['2rem'] / 4,
	'0.625rem' = Spacing['2.5rem'] / 4,
	'0.75rem' = Spacing['3rem'] / 4,
	'0.875rem' = Spacing['3.5rem'] / 4,
	'1rem' = Spacing['4rem'] / 4,
	'1.125rem' = Spacing['4.5rem'] / 4,
	'1.75rem' = Spacing['7rem'] / 4,
}

/**
 * {@link RelativeSpacing}
 */
export enum RelativeBorderRadii {
	'0.125em' = CoreTokens.BaseLength / 4,
	'0.25em' = RelativeSpacing['1em'] / 4,
	'0.375em' = RelativeSpacing['1.5em'] / 4,
	'0.5em' = RelativeSpacing['2em'] / 4,
	'0.625em' = RelativeSpacing['2.5em'] / 4,
	'0.75em' = RelativeSpacing['3em'] / 4,
	'0.875em' = RelativeSpacing['3.5em'] / 4,
	'1em' = RelativeSpacing['4em'] / 4,
	'1.125em' = RelativeSpacing['4.5em'] / 4,
	'1.75em' = RelativeSpacing['7em'] / 4,
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#syntax
 */
export enum BorderStyles {
	None = 'none',
	Hidden = 'hidden',
	Dashed = 'dashed',
	Dotted = 'dotted',
	Solid = 'solid',
	Double = 'double',
	Groove = 'groove',
	Ridge = 'ridge',
	Inset = 'inset',
	Outset = 'outset',
}

/**
 * {@link Color},
 * {@link LengthInPx}
 */
export type Border<T extends Color = Color> =
	`${LengthInPx} ${BorderStyles} ${T}`;
