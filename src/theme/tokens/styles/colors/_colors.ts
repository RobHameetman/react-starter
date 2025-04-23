import chroma from 'chroma-js';

export const colorMix = (to: string, base: string, by = 0.5) =>
	chroma.mix(base, to, by, 'rgb').hex('rgba');

/* Core: One-off Color Tokens */
export enum OneOffColors {
	Current = 'currentColor',
	Transparent = 'transparent',
	Black = '#000000FF',
	White = '#FFFFFFFF',
	Grey = '#B5B5B5FF',
	LightGrey = '#F5F5F5FF',
	DarkGrey = '#363636FF',
	Shadow = '#00000029',
}

/* Core: Scalar Color Tokens */
export enum Amber {
	Core = '#FFC700FF',
	Dark = '#997700FF',
	Light = '#FFDD66FF',
}

export enum Azure {
	Core = '#3064B8FF',
	Dark = '#152C52FF',
	Light = '#3A79DEFF',
}

export enum Crimson {
	Core = '#A3002CFF',
	Dark = '#3D0010FF',
	Light = '#C90036FF',
}

export enum Emerald {
	Core = '#188049FF',
	Dark = '#0C4024FF',
	Light = '#27CC74FF',
}

export enum Slate {
	Core = '#3A3E45FF',
	Dark = '#2B2E33FF',
	Light = '#A5AFC4FF',
}

/* Core: Black Tokens */
export const BLACK = Object.freeze({
	100: colorMix(OneOffColors.Black, OneOffColors.White, 0.99),
	200: colorMix(OneOffColors.Black, OneOffColors.White, 0.98),
	300: colorMix(OneOffColors.Black, OneOffColors.White, 0.97),
	400: colorMix(OneOffColors.Black, OneOffColors.White, 0.96),
	500: colorMix(OneOffColors.Black, OneOffColors.White, 0.95),
	600: colorMix(OneOffColors.Black, OneOffColors.White, 0.94),
	700: colorMix(OneOffColors.Black, OneOffColors.White, 0.93),
	800: colorMix(OneOffColors.Black, OneOffColors.White, 0.92),
	900: colorMix(OneOffColors.Black, OneOffColors.White, 0.91),
});

export const BLACK_FADE = Object.freeze({
	10: colorMix(OneOffColors.Black, OneOffColors.Transparent, 0.9),
	20: colorMix(OneOffColors.Black, OneOffColors.Transparent, 0.8),
	30: colorMix(OneOffColors.Black, OneOffColors.Transparent, 0.7),
	40: colorMix(OneOffColors.Black, OneOffColors.Transparent, 0.6),
	50: colorMix(OneOffColors.Black, OneOffColors.Transparent, 0.5),
	60: colorMix(OneOffColors.Black, OneOffColors.Transparent, 0.4),
	70: colorMix(OneOffColors.Black, OneOffColors.Transparent, 0.3),
	80: colorMix(OneOffColors.Black, OneOffColors.Transparent, 0.2),
	90: colorMix(OneOffColors.Black, OneOffColors.Transparent, 0.1),
});

/* Core: White Tokens */
export const WHITE = Object.freeze({
	100: colorMix(OneOffColors.White, OneOffColors.Black, 0.99),
	200: colorMix(OneOffColors.White, OneOffColors.Black, 0.98),
	300: colorMix(OneOffColors.White, OneOffColors.Black, 0.97),
	400: colorMix(OneOffColors.White, OneOffColors.Black, 0.96),
	500: colorMix(OneOffColors.White, OneOffColors.Black, 0.95),
	600: colorMix(OneOffColors.White, OneOffColors.Black, 0.94),
	700: colorMix(OneOffColors.White, OneOffColors.Black, 0.93),
	800: colorMix(OneOffColors.White, OneOffColors.Black, 0.92),
	900: colorMix(OneOffColors.White, OneOffColors.Black, 0.91),
});

export const WHITE_FADE = Object.freeze({
	10: colorMix(OneOffColors.White, OneOffColors.Transparent, 0.9),
	20: colorMix(OneOffColors.White, OneOffColors.Transparent, 0.8),
	30: colorMix(OneOffColors.White, OneOffColors.Transparent, 0.7),
	40: colorMix(OneOffColors.White, OneOffColors.Transparent, 0.6),
	50: colorMix(OneOffColors.White, OneOffColors.Transparent, 0.5),
	60: colorMix(OneOffColors.White, OneOffColors.Transparent, 0.4),
	70: colorMix(OneOffColors.White, OneOffColors.Transparent, 0.3),
	80: colorMix(OneOffColors.White, OneOffColors.Transparent, 0.2),
	90: colorMix(OneOffColors.White, OneOffColors.Transparent, 0.1),
});

/* Core: Amber Tokens */
export const AMBER = Object.freeze({
	100: colorMix(Amber.Core, Amber.Light, 0),
	200: colorMix(Amber.Core, Amber.Light, 0.25),
	300: colorMix(Amber.Core, Amber.Light, 0.5),
	400: colorMix(Amber.Core, Amber.Light, 0.75),
	500: colorMix(Amber.Core, Amber.Light, 1),
	600: colorMix(Amber.Core, Amber.Dark, 0.75),
	700: colorMix(Amber.Core, Amber.Dark, 0.5),
	800: colorMix(Amber.Core, Amber.Dark, 0.25),
	900: colorMix(Amber.Core, Amber.Dark, 0),
});

export const AMBER_FADE = Object.freeze({
	10: colorMix(Amber.Core, OneOffColors.Transparent, 0.9),
	20: colorMix(Amber.Core, OneOffColors.Transparent, 0.8),
	30: colorMix(Amber.Core, OneOffColors.Transparent, 0.7),
	40: colorMix(Amber.Core, OneOffColors.Transparent, 0.6),
	50: colorMix(Amber.Core, OneOffColors.Transparent, 0.5),
	60: colorMix(Amber.Core, OneOffColors.Transparent, 0.4),
	70: colorMix(Amber.Core, OneOffColors.Transparent, 0.3),
	80: colorMix(Amber.Core, OneOffColors.Transparent, 0.2),
	90: colorMix(Amber.Core, OneOffColors.Transparent, 0.1),
});

/* Core: Amber Tokens */
export const AZURE = Object.freeze({
	100: colorMix(Azure.Core, Azure.Light, 0),
	200: colorMix(Azure.Core, Azure.Light, 0.25),
	300: colorMix(Azure.Core, Azure.Light, 0.5),
	400: colorMix(Azure.Core, Azure.Light, 0.75),
	500: colorMix(Azure.Core, Azure.Light, 1),
	600: colorMix(Azure.Core, Azure.Dark, 0.75),
	700: colorMix(Azure.Core, Azure.Dark, 0.5),
	800: colorMix(Azure.Core, Azure.Dark, 0.25),
	900: colorMix(Azure.Core, Azure.Dark, 0),
});

export const AZURE_FADE = Object.freeze({
	10: colorMix(Azure.Core, OneOffColors.Transparent, 0.9),
	20: colorMix(Azure.Core, OneOffColors.Transparent, 0.8),
	30: colorMix(Azure.Core, OneOffColors.Transparent, 0.7),
	40: colorMix(Azure.Core, OneOffColors.Transparent, 0.6),
	50: colorMix(Azure.Core, OneOffColors.Transparent, 0.5),
	60: colorMix(Azure.Core, OneOffColors.Transparent, 0.4),
	70: colorMix(Azure.Core, OneOffColors.Transparent, 0.3),
	80: colorMix(Azure.Core, OneOffColors.Transparent, 0.2),
	90: colorMix(Azure.Core, OneOffColors.Transparent, 0.1),
});

/* Core: Crimson Tokens */
export const CRIMSON = Object.freeze({
	100: colorMix(Crimson.Core, Crimson.Light, 0),
	200: colorMix(Crimson.Core, Crimson.Light, 0.25),
	300: colorMix(Crimson.Core, Crimson.Light, 0.5),
	400: colorMix(Crimson.Core, Crimson.Light, 0.75),
	500: colorMix(Crimson.Core, Crimson.Light, 1),
	600: colorMix(Crimson.Core, Crimson.Dark, 0.75),
	700: colorMix(Crimson.Core, Crimson.Dark, 0.5),
	800: colorMix(Crimson.Core, Crimson.Dark, 0.25),
	900: colorMix(Crimson.Core, Crimson.Dark, 0),
});

export const CRIMSON_FADE = Object.freeze({
	10: colorMix(Crimson.Core, OneOffColors.Transparent, 0.9),
	20: colorMix(Crimson.Core, OneOffColors.Transparent, 0.8),
	30: colorMix(Crimson.Core, OneOffColors.Transparent, 0.7),
	40: colorMix(Crimson.Core, OneOffColors.Transparent, 0.6),
	50: colorMix(Crimson.Core, OneOffColors.Transparent, 0.5),
	60: colorMix(Crimson.Core, OneOffColors.Transparent, 0.4),
	70: colorMix(Crimson.Core, OneOffColors.Transparent, 0.3),
	80: colorMix(Crimson.Core, OneOffColors.Transparent, 0.2),
	90: colorMix(Crimson.Core, OneOffColors.Transparent, 0.1),
});

/* Core: Emerald Tokens */
export const EMERALD = Object.freeze({
	100: colorMix(Emerald.Core, Emerald.Light, 0),
	200: colorMix(Emerald.Core, Emerald.Light, 0.25),
	300: colorMix(Emerald.Core, Emerald.Light, 0.5),
	400: colorMix(Emerald.Core, Emerald.Light, 0.75),
	500: colorMix(Emerald.Core, Emerald.Light, 1),
	600: colorMix(Emerald.Core, Emerald.Dark, 0.75),
	700: colorMix(Emerald.Core, Emerald.Dark, 0.5),
	800: colorMix(Emerald.Core, Emerald.Dark, 0.25),
	900: colorMix(Emerald.Core, Emerald.Dark, 0),
});

export const EMERALD_FADE = Object.freeze({
	10: colorMix(Emerald.Core, OneOffColors.Transparent, 0.9),
	20: colorMix(Emerald.Core, OneOffColors.Transparent, 0.8),
	30: colorMix(Emerald.Core, OneOffColors.Transparent, 0.7),
	40: colorMix(Emerald.Core, OneOffColors.Transparent, 0.6),
	50: colorMix(Emerald.Core, OneOffColors.Transparent, 0.5),
	60: colorMix(Emerald.Core, OneOffColors.Transparent, 0.4),
	70: colorMix(Emerald.Core, OneOffColors.Transparent, 0.3),
	80: colorMix(Emerald.Core, OneOffColors.Transparent, 0.2),
	90: colorMix(Emerald.Core, OneOffColors.Transparent, 0.1),
});

/* Core: Slate Tokens */
export const SLATE = Object.freeze({
	100: colorMix(Slate.Core, Slate.Light, 0),
	200: colorMix(Slate.Core, Slate.Light, 0.25),
	300: colorMix(Slate.Core, Slate.Light, 0.5),
	400: colorMix(Slate.Core, Slate.Light, 0.75),
	500: colorMix(Slate.Core, Slate.Light, 1),
	600: colorMix(Slate.Core, Slate.Dark, 0.75),
	700: colorMix(Slate.Core, Slate.Dark, 0.5),
	800: colorMix(Slate.Core, Slate.Dark, 0.25),
	900: colorMix(Slate.Core, Slate.Dark, 0),
});

export const SLATE_FADE = Object.freeze({
	10: colorMix(Slate.Core, OneOffColors.Transparent, 0.9),
	20: colorMix(Slate.Core, OneOffColors.Transparent, 0.8),
	30: colorMix(Slate.Core, OneOffColors.Transparent, 0.7),
	40: colorMix(Slate.Core, OneOffColors.Transparent, 0.6),
	50: colorMix(Slate.Core, OneOffColors.Transparent, 0.5),
	60: colorMix(Slate.Core, OneOffColors.Transparent, 0.4),
	70: colorMix(Slate.Core, OneOffColors.Transparent, 0.3),
	80: colorMix(Slate.Core, OneOffColors.Transparent, 0.2),
	90: colorMix(Slate.Core, OneOffColors.Transparent, 0.1),
});

/* Core: Grey Tokens */
export const GREY = Object.freeze({
	100: colorMix(OneOffColors.Grey, OneOffColors.White, 0),
	200: colorMix(OneOffColors.Grey, OneOffColors.White, 0.25),
	300: colorMix(OneOffColors.Grey, OneOffColors.White, 0.5),
	400: colorMix(OneOffColors.Grey, OneOffColors.White, 0.75),
	500: colorMix(OneOffColors.Grey, OneOffColors.White, 1),
	600: colorMix(OneOffColors.Grey, OneOffColors.Black, 0.75),
	700: colorMix(OneOffColors.Grey, OneOffColors.Black, 0.5),
	800: colorMix(OneOffColors.Grey, OneOffColors.Black, 0.25),
	900: colorMix(OneOffColors.Grey, OneOffColors.Black, 0),
});

export const GREY_FADE = Object.freeze({
	10: colorMix(OneOffColors.Grey, OneOffColors.Transparent, 0.9),
	20: colorMix(OneOffColors.Grey, OneOffColors.Transparent, 0.8),
	30: colorMix(OneOffColors.Grey, OneOffColors.Transparent, 0.7),
	40: colorMix(OneOffColors.Grey, OneOffColors.Transparent, 0.6),
	50: colorMix(OneOffColors.Grey, OneOffColors.Transparent, 0.5),
	60: colorMix(OneOffColors.Grey, OneOffColors.Transparent, 0.4),
	70: colorMix(OneOffColors.Grey, OneOffColors.Transparent, 0.3),
	80: colorMix(OneOffColors.Grey, OneOffColors.Transparent, 0.2),
	90: colorMix(OneOffColors.Grey, OneOffColors.Transparent, 0.1),
});

/* Core: Light Grey Tokens */
export const LIGHT_GREY = Object.freeze({
	100: colorMix(OneOffColors.LightGrey, OneOffColors.White, 0.92),
	200: colorMix(OneOffColors.LightGrey, OneOffColors.White, 0.94),
	300: colorMix(OneOffColors.LightGrey, OneOffColors.White, 0.96),
	400: colorMix(OneOffColors.LightGrey, OneOffColors.White, 0.98),
	500: colorMix(OneOffColors.LightGrey, OneOffColors.White, 1),
	600: colorMix(OneOffColors.LightGrey, OneOffColors.Black, 0.98),
	700: colorMix(OneOffColors.LightGrey, OneOffColors.Black, 0.96),
	800: colorMix(OneOffColors.LightGrey, OneOffColors.Black, 0.94),
	900: colorMix(OneOffColors.LightGrey, OneOffColors.Black, 0.92),
});

export const LIGHT_GREY_FADE = Object.freeze({
	10: colorMix(OneOffColors.LightGrey, OneOffColors.Transparent, 0.9),
	20: colorMix(OneOffColors.LightGrey, OneOffColors.Transparent, 0.8),
	30: colorMix(OneOffColors.LightGrey, OneOffColors.Transparent, 0.7),
	40: colorMix(OneOffColors.LightGrey, OneOffColors.Transparent, 0.6),
	50: colorMix(OneOffColors.LightGrey, OneOffColors.Transparent, 0.5),
	60: colorMix(OneOffColors.LightGrey, OneOffColors.Transparent, 0.4),
	70: colorMix(OneOffColors.LightGrey, OneOffColors.Transparent, 0.3),
	80: colorMix(OneOffColors.LightGrey, OneOffColors.Transparent, 0.2),
	90: colorMix(OneOffColors.LightGrey, OneOffColors.Transparent, 0.1),
});

/* Core: Dark Grey Tokens */
export const DARK_GREY = Object.freeze({
	100: colorMix(OneOffColors.DarkGrey, OneOffColors.White, 0.92),
	200: colorMix(OneOffColors.DarkGrey, OneOffColors.White, 0.94),
	300: colorMix(OneOffColors.DarkGrey, OneOffColors.White, 0.96),
	400: colorMix(OneOffColors.DarkGrey, OneOffColors.White, 0.98),
	500: colorMix(OneOffColors.DarkGrey, OneOffColors.White, 1),
	600: colorMix(OneOffColors.DarkGrey, OneOffColors.Black, 0.98),
	700: colorMix(OneOffColors.DarkGrey, OneOffColors.Black, 0.96),
	800: colorMix(OneOffColors.DarkGrey, OneOffColors.Black, 0.94),
	900: colorMix(OneOffColors.DarkGrey, OneOffColors.Black, 0.92),
});

export const DARK_GREY_FADE = Object.freeze({
	10: colorMix(OneOffColors.DarkGrey, OneOffColors.Transparent, 0.9),
	20: colorMix(OneOffColors.DarkGrey, OneOffColors.Transparent, 0.8),
	30: colorMix(OneOffColors.DarkGrey, OneOffColors.Transparent, 0.7),
	40: colorMix(OneOffColors.DarkGrey, OneOffColors.Transparent, 0.6),
	50: colorMix(OneOffColors.DarkGrey, OneOffColors.Transparent, 0.5),
	60: colorMix(OneOffColors.DarkGrey, OneOffColors.Transparent, 0.4),
	70: colorMix(OneOffColors.DarkGrey, OneOffColors.Transparent, 0.3),
	80: colorMix(OneOffColors.DarkGrey, OneOffColors.Transparent, 0.2),
	90: colorMix(OneOffColors.DarkGrey, OneOffColors.Transparent, 0.1),
});

/* Specialized: Priority Tokens */
export const PriorityColors = Object.freeze({
	Primary: CRIMSON[300],
	PrimaryEngaged: CRIMSON[200],
	Secondary: SLATE[400],
	SecondaryEngaged: SLATE[300],
	Tertiary: CRIMSON[300],
	TertiaryEngaged: CRIMSON[200],
});

/* Specialized: Intent Tokens */
export const IntentColors = Object.freeze({
	Error: CRIMSON[300],
	ErrorEngaged: CRIMSON[200],
	Info: AZURE[300],
	InfoEngaged: AZURE[200],
	Success: EMERALD[300],
	SuccessEngaged: EMERALD[200],
	Warning: CRIMSON[300],
	WarningEngaged: CRIMSON[200],
	Disabled: GREY[200],
});

/* Specialized: Social Brand Tokens */
export const SocialBrandColors = Object.freeze({
	Github: '#181717FF',
	GithubEngaged: '#323131FF',
	Google: '#4285F4FF',
	GoogleEngaged: '#5C9FFFFF',
	LinkedIn: '#0A66C2FF',
	LinkedInEngaged: '#2480DCFF',
});

export type Color =
	| OneOffColors
	| Amber
	| Azure
	| Crimson
	| Emerald
	| Slate;

export type HexColor = `#${number}`;
export type RGBColor = `rgb(#${number}, #${number}, #${number})`;
export type RGBAColor = `rgba(#${number}, #${number}, #${number}, ${number})`;
export type HSLColor = `hsl(#${number}, #${number}, #${number})`;
export type HSLAColor = `hsla(#${number}, #${number}, #${number}, ${number})`;
export type AnyColor = HexColor | RGBColor | RGBAColor | HSLColor | HSLAColor;
