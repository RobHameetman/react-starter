export enum FontFamilies {
	Arial = 'Arial',
	Arimo = 'Arimo',
	ArizonaFlare = 'Arizona Flare',
	Georgia = 'Georgia',
	Helveesti = 'Helveesti',
	Helvetica = 'Helvetica',
	HelveticaNeue = 'Helvetica Neue',
	Maitree = 'Maitree',
}

export enum FontStyles {
	Normal = 'normal',
	Italic = 'italic',
	Oblique = 'oblique',
}

export enum FontWeights {
	Thin = 100,
	Extralight = 200,
	Light = 300,
	Regular = 400,
	Medium = 500,
	Semibold = 600,
	Bold = 700,
	Extrabold = 800,
	Black = 900,
}

export enum LineHeights {
	Standard = '150%',
	Smaller = '130%',
	Smallest = '100%',
}

export enum LetterSpacing {
	Condensed = '-0.005em',
	Standard = '0.0012em',
}

export type FontFamily = `${FontFamilies}`;
export type FontWeight = Lowercase<keyof typeof FontWeights> | `${FontWeights}`;

export type Arial = FontFamilies.Arial;
export type Arimo = FontFamilies.Arimo;
export type ArizonaFlare = FontFamilies.ArizonaFlare;
export type Georgia = FontFamilies.Georgia;
export type Helveesti = FontFamilies.Helveesti;
export type Helvetica = FontFamilies.Helvetica;
export type HelveticaNeue = FontFamilies.HelveticaNeue;
export type Maitree = FontFamilies.Maitree;

export const Headings = {
	FontFamily: `'${FontFamilies.ArizonaFlare}', ${FontFamilies.Maitree}, ${FontFamilies.Georgia}, serif`,
	FontWeight: FontWeights.Light,
	LineHeight: LineHeights.Smallest,
	LetterSpacing: LetterSpacing.Condensed,
};

export const Text = {
	FontFamily: `${FontFamilies.Helveesti}, '${FontFamilies.HelveticaNeue}', ${FontFamilies.Helvetica}, ${FontFamilies.Arimo}, ${FontFamilies.Arial}, sans-serif`,
	FontWeight: FontWeights.Regular,
	LineHeight: LineHeights.Standard,
	LetterSpacing: LetterSpacing.Standard,
};

export type LineHeight = `${LineHeights}`;

export enum FontSizes {
	/* Specialized: Heading Sizes */
	Heading1 = '2.027rem',
	Heading2 = '1.802rem',
	Heading3 = '1.602rem',
	Heading4 = '1.424rem',
	Heading5 = '1.266rem',
	Heading6 = '1.125rem',

	/* Specialized: Body Sizes */
	Body1 = '1rem',
	Body2 = '1.125rem',

	/* Specialized: Label Sizes */
	Label1 = '1rem',
	Label2 = '0.875rem',
}

export enum FontSizesResponsive {
	/* Specialized: Heading Sizes */
	Heading1 = '2.986rem',
	Heading2 = '2.488rem',
	Heading3 = '2.074rem',
	Heading4 = '1.728rem',
	Heading5 = '1.44rem',
	Heading6 = '1.2rem',
}

/* Specialized: HTML Heading Sizes */
export enum HTMLHeadingSizes {
	H1 = FontSizes.Heading1,
	H2 = FontSizes.Heading2,
	H3 = FontSizes.Heading3,
	H4 = FontSizes.Heading4,
	H5 = FontSizes.Heading5,
	H6 = FontSizes.Heading6,
}

/* Specialized: HTML Heading Sizes */
export enum HTMLHeadingSizesResponsive {
	H1 = FontSizesResponsive.Heading1,
	H2 = FontSizesResponsive.Heading2,
	H3 = FontSizesResponsive.Heading3,
	H4 = FontSizesResponsive.Heading4,
	H5 = FontSizesResponsive.Heading5,
	H6 = FontSizesResponsive.Heading6,
}

/* Specialized: Headings */
export type Heading1 =
	`${typeof Headings.FontWeight} ${FontSizes.Heading1}/${typeof Headings.LineHeight} ${typeof Headings.FontFamily}`;

export type Heading2 =
	`${typeof Headings.FontWeight} ${FontSizes.Heading2}/${typeof Headings.LineHeight} ${typeof Headings.FontFamily}`;

export type Heading3 =
	`${typeof Headings.FontWeight} ${FontSizes.Heading3}/${typeof Headings.LineHeight} ${typeof Headings.FontFamily}`;

export type Heading4 =
	`${typeof Headings.FontWeight} ${FontSizes.Heading4}/${typeof Headings.LineHeight} ${typeof Headings.FontFamily}`;

export type Heading5 =
	`${typeof Headings.FontWeight} ${FontSizes.Heading5}/${typeof Headings.LineHeight} ${typeof Headings.FontFamily}`;

export type Heading6 =
	`${typeof Headings.FontWeight} ${FontSizes.Heading6}/${typeof Headings.LineHeight} ${typeof Headings.FontFamily}`;

/* Specialized: Body */
export type Body1 =
	`${typeof Text.FontWeight} ${FontSizes.Body1}/${typeof Text.LineHeight} ${typeof Text.FontFamily}`;

export type Body2 =
	`${typeof Text.FontWeight} ${FontSizes.Body2}/${typeof Text.LineHeight} ${typeof Text.FontFamily}`;

/* Specialized: Labels */
export type Label1 =
	`${typeof Text.FontWeight} ${FontSizes.Label1}/${LineHeights.Smaller} ${typeof Text.FontFamily}`;

export type Label2 =
	`${typeof Text.FontWeight} ${FontSizes.Label2}/${LineHeights.Smaller} ${typeof Text.FontFamily}`;

/* Specialized: Generic Font Sizes */
export type FontSizeInRem = `${number}rem`;

export type FontSizeInEm = `${number}em`;

export type FontSize = FontSizeInEm | FontSizeInRem;