import { isString } from '@app/utils/functions/check/js/core/isString';

export enum Breakpoints {
	XS = 650,
	SM = 960,
	MD = 1280,
	LG = 1440,
	XL = 1920,
}

export enum BreakpointsRem {
	XS = 40.625,
	SM = 60,
	MD = 80,
	LG = 90,
	XL = 120,
}

export enum BreakpointsInPx {
	XS = '650px',
	SM = '960px',
	MD = '1280px',
	LG = '1440px',
	XL = '1920px',
}

export enum BreakpointsInRem {
	XS = '40.625rem',
	SM = '60rem',
	MD = '80rem',
	LG = '90rem',
	XL = '120rem',
}

export type Breakpoint = Lowercase<keyof typeof Breakpoints>;

export const BREAKPOINTS = Object.keys(Breakpoints).map((breakpoint) =>
	breakpoint.toLowerCase(),
);

export const isBreakpoint = (value: unknown): value is Breakpoint =>
	/**
	 * value
	 */
	isString(value) &&
	BREAKPOINTS.some((breakpoint) =>
		new RegExp(`^${breakpoint}$`, 'i').test(value),
	);
