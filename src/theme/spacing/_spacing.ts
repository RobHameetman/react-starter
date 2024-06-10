import { CoreTokens } from '../core/';

export enum Spacing {
	'0.5rem' = CoreTokens.BaseLength,
	'1rem' = Spacing['0.5rem'] + Spacing['0.5rem'],
	'1.5rem' = Spacing['1rem'] + Spacing['0.5rem'],
	'2rem' = Spacing['1.5rem'] + Spacing['0.5rem'],
	'2.5rem' = Spacing['2rem'] + Spacing['0.5rem'],
	'3rem' = Spacing['2.5rem'] + Spacing['0.5rem'],
	'3.5rem' = Spacing['3rem'] + Spacing['0.5rem'],
	'4rem' = Spacing['3.5rem'] + Spacing['0.5rem'],
	'4.5rem' = Spacing['4rem'] + Spacing['0.5rem'],
	'7rem' = Spacing['4.5rem'] + Spacing['2.5rem'],
}

export enum RelativeSpacing {
	'0.5em' = CoreTokens.RelativeBaseLength,
	'1em' = RelativeSpacing['0.5em'] + RelativeSpacing['0.5em'],
	'1.5em' = RelativeSpacing['1em'] + RelativeSpacing['0.5em'],
	'2em' = RelativeSpacing['1.5em'] + RelativeSpacing['0.5em'],
	'2.5em' = RelativeSpacing['2em'] + RelativeSpacing['0.5em'],
	'3em' = RelativeSpacing['2.5em'] + RelativeSpacing['0.5em'],
	'3.5em' = RelativeSpacing['3em'] + RelativeSpacing['0.5em'],
	'4em' = RelativeSpacing['3.5em'] + RelativeSpacing['0.5em'],
	'4.5em' = RelativeSpacing['4em'] + RelativeSpacing['0.5em'],
	'7em' = RelativeSpacing['4.5em'] + RelativeSpacing['2.5em'],
}

export type LengthInRem = `${number}rem`;
export type LengthInEm = `${number}em`;
export type LengthInPx = `${number}px`;
export type Length = LengthInEm | LengthInPx | LengthInRem | '0';

export type SizeInRem = LengthInRem;
export type SizeInEm = LengthInEm;
export type SizeInPx = LengthInPx;
export type Size = SizeInEm | SizeInPx | SizeInRem | '0';