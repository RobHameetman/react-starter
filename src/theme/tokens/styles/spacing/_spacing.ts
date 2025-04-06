import { CoreTokens } from '../../core';

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

export type LengthInCap = `${number}cap`;
export type LengthInCh = `${number}ch`;
export type LengthInEm = `${number}em`;
export type LengthInEx = `${number}ex`;
export type LengthInIc = `${number}ic`;
export type LengthInLh = `${number}lh`;
export type LengthLocalFont = LengthInCap | LengthInCh | LengthInEm | LengthInEx | LengthInIc | LengthInLh;

export type LengthInRcap = `${number}rcap`;
export type LengthInRch = `${number}rch`;
export type LengthInRem = `${number}rem`;
export type LengthInRex = `${number}rex`;
export type LengthInRic = `${number}ric`;
export type LengthInRlh = `${number}rlh`;
export type LengthRootFont = LengthInRcap | LengthInRch | LengthInRem | LengthInRex | LengthInRic | LengthInRlh;

export type LengthInDvh = `${number}dvh`;
export type LengthInDvw = `${number}dvw`;
export type LengthInLvh = `${number}lvh`;
export type LengthInLvw = `${number}lvw`;
export type LengthInSvh = `${number}svh`;
export type LengthInSvw = `${number}svw`;
export type LengthInVb = `${number}vb`;
export type LengthInVh = `${number}vh`;
export type LengthInVi = `${number}vi`;
export type LengthInVmax = `${number}vmax`;
export type LengthInVmin = `${number}vmin`;
export type LengthInVw = `${number}vw`;
export type LengthViewport = LengthInDvh | LengthInDvw | LengthInLvh | LengthInLvw | LengthInSvh | LengthInSvw | LengthInVb | LengthInVh | LengthInVi | LengthInVmax | LengthInVmin | LengthInVw;

export type LengthInCbq = `${number}cbq`;
export type LengthInCqh = `${number}cqh`;
export type LengthInCqi = `${number}cqi`;
export type LengthInCqmax = `${number}cqmax`;
export type LengthInCqmin = `${number}cqmin`;
export type LengthInCqw = `${number}cqw`;
export type LengthContainer = LengthInCbq | LengthInCqh | LengthInCqi | LengthInCqmax | LengthInCqmin | LengthInCqw;

export type LengthInPercent = `${number}%`;

export type LengthInCm = `${number}cm`;
export type LengthInMm = `${number}mm`;
export type LengthInQ = `${number}Q`;
export type LengthInInches = `${number}in`;
export type LengthInPc = `${number}pc`;
export type LengthInPt = `${number}pt`;
export type LengthInPx = `${number}px`;
export type LenghtAbsolute = LengthInCm | LengthInMm | LengthInQ | LengthInInches | LengthInPc | LengthInPt | LengthInPx;

export type Length = LengthLocalFont | LengthRootFont | LengthViewport | LengthContainer | LengthInPercent | LenghtAbsolute | '0';

export type SizeInCap = LengthInCap;
export type SizeInCh = LengthInCh;
export type SizeInEm = LengthInEm;
export type SizeInEx = LengthInEx;
export type SizeInIc = LengthInIc;
export type SizeInLh = LengthInLh;
export type SizeLocalFont = SizeInCap | SizeInCh | SizeInEm | SizeInEx | SizeInIc | SizeInLh;

export type SizeInRcap = LengthInRcap;
export type SizeInRch = LengthInRch;
export type SizeInRem = LengthInRem;
export type SizeInRex = LengthInRex;
export type SizeInRic = LengthInRic;
export type SizeInRlh = LengthInRlh;
export type SizeRootFont = SizeInRcap | SizeInRch | SizeInRem | SizeInRex | SizeInRic | SizeInRlh;

export type SizeInDvh = LengthInDvh;
export type SizeInDvw = LengthInDvw;
export type SizeInLvh = LengthInLvh;
export type SizeInLvw = LengthInLvw;
export type SizeInSvh = LengthInSvh;
export type SizeInSvw = LengthInSvw;
export type SizeInVb = LengthInVb;
export type SizeInVh = LengthInVh;
export type SizeInVi = LengthInVi;
export type SizeInVmax = LengthInVmax;
export type SizeInVmin = LengthInVmin;
export type SizeInVw = LengthInVw;
export type SizeViewport = SizeInDvh | SizeInDvw | SizeInLvh | SizeInLvw | SizeInSvh | SizeInSvw | SizeInVb | SizeInVh | SizeInVi | SizeInVmax | SizeInVmin | SizeInVw;

export type SizeInCbq = LengthInCbq;
export type SizeInCqh = LengthInCqh;
export type SizeInCqi = LengthInCqi;
export type SizeInCqmax = LengthInCqmax;
export type SizeInCqmin = LengthInCqmin;
export type SizeInCqw = LengthInCqw;
export type SizeContainer = SizeInCbq | SizeInCqh | SizeInCqi | SizeInCqmax | SizeInCqmin | SizeInCqw;

export type SizeInPercent = LengthInPercent;

export type SizeInCm = LengthInCm;
export type SizeInMm = LengthInMm;
export type SizeInQ = LengthInQ;
export type SizeInInches = LengthInInches;
export type SizeInPc = LengthInPc;
export type SizeInPt = LengthInPt;
export type SizeInPx = LengthInPx;
export type SizeAbsolute = SizeInCm | SizeInMm | SizeInQ | SizeInInches | SizeInPc | SizeInPt | SizeInPx;

export type Size = SizeLocalFont | SizeRootFont | SizeViewport | SizeContainer | SizeInPercent | SizeAbsolute | '0';
