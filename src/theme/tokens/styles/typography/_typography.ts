export enum FontFamilies {
	Arial = 'Arial',
	Helvetica = 'Helvetica',
	Titillium = 'Titillium Web',
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
export type Helvetica = FontFamilies.Helvetica;
export type Titillium = FontFamilies.Titillium;

export const Headings = {
	FontFamily: `'${FontFamilies.Titillium}', ${FontFamilies.Helvetica}, sans-serif`,
	FontWeight: FontWeights.Light,
	LineHeight: LineHeights.Smallest,
	LetterSpacing: LetterSpacing.Condensed,
};

export const Text = {
	FontFamily: `${FontFamilies.Helvetica}, ${FontFamilies.Arial}, sans-serif`,
	FontWeight: FontWeights.Regular,
	LineHeight: LineHeights.Standard,
	LetterSpacing: LetterSpacing.Standard,
};

export type LineHeight = `${LineHeights}`;

export enum FontSizes {
	/* Specialized: Heading Sizes */
	H1 = '2.027rem',
	H2 = '1.802rem',
	H3 = '1.602rem',
	H4 = '1.424rem',
	H5 = '1.266rem',
	H6 = '1.125rem',

	/* Specialized: Body Sizes */
	Text = '1rem',
	Subtext = '1.125rem',

	/* Specialized: Caption Sizes */
	Caption = '0.875rem',
	Subcaption = '0.75rem',

	/* Specialized: Markdown Sizes */
	Footnote = '0.875rem',
	TocHeading = '0.875rem',
	TocEntry = '0.875rem',

	/* Specialized: Miscellaneous Sizes */
	Blockquote = '0.875rem',
	Code = '0.75rem',
	Equation = '0.75rem',

	/* Specialized: Table Sizes */
	TableHeading = '0.875rem',
	TableText = '0.875rem',
	TableFootnote = '0.875rem',
	TablePageNumber = '0.875rem',
}

export enum FontSizesResponsive {
	/* Specialized: Heading Sizes */
	H1 = '2.986rem',
	H2 = '2.488rem',
	H3 = '2.074rem',
	H4 = '1.728rem',
	H5 = '1.44rem',
	H6 = '1.2rem',
}

/* Specialized: Headings */
export type H1 =
	`${typeof Headings.FontWeight} ${FontSizes.H1}/${typeof Headings.LineHeight} ${typeof Headings.FontFamily}`;

export type H2 =
	`${typeof Headings.FontWeight} ${FontSizes.H2}/${typeof Headings.LineHeight} ${typeof Headings.FontFamily}`;

export type H3 =
	`${typeof Headings.FontWeight} ${FontSizes.H3}/${typeof Headings.LineHeight} ${typeof Headings.FontFamily}`;

export type H4 =
	`${typeof Headings.FontWeight} ${FontSizes.H4}/${typeof Headings.LineHeight} ${typeof Headings.FontFamily}`;

export type H5 =
	`${typeof Headings.FontWeight} ${FontSizes.H5}/${typeof Headings.LineHeight} ${typeof Headings.FontFamily}`;

export type H6 =
	`${typeof Headings.FontWeight} ${FontSizes.H6}/${typeof Headings.LineHeight} ${typeof Headings.FontFamily}`;

/* Specialized: Body */
export type Text =
	`${typeof Text.FontWeight} ${FontSizes.Text}/${typeof Text.LineHeight} ${typeof Text.FontFamily}`;

export type Subtext =
	`${typeof Text.FontWeight} ${FontSizes.Subtext}/${typeof Text.LineHeight} ${typeof Text.FontFamily}`;

/* Specialized: Captions */
export type Caption =
	`${typeof Text.FontWeight} ${FontSizes.Caption}/${LineHeights.Smaller} ${typeof Text.FontFamily}`;

export type Subcaption =
	`${typeof Text.FontWeight} ${FontSizes.Subcaption}/${LineHeights.Smaller} ${typeof Text.FontFamily}`;

/* Specialized: Markdown */
export type Footnote =
	`${typeof Text.FontWeight} ${FontSizes.Footnote}/${LineHeights.Smaller} ${typeof Text.FontFamily}`;

export type TocHeading =
	`${typeof Headings.FontWeight} ${FontSizes.TocHeading}/${typeof Headings.LineHeight} ${typeof Headings.FontFamily}`;

export type TocEntry =
	`${typeof Text.FontWeight} ${FontSizes.TocEntry}/${typeof Text.LineHeight} ${typeof Text.FontFamily}`;

/* Specialized: Miscellaneous */
export type Blockquote =
	`${typeof Text.FontWeight} ${FontSizes.Blockquote}/${typeof Text.LineHeight} ${typeof Text.FontFamily}`;

export type Code =
	`${typeof Text.FontWeight} ${FontSizes.Code}/${typeof Text.LineHeight} ${typeof Text.FontFamily}`;

export type Equation =
	`${typeof Text.FontWeight} ${FontSizes.Equation}/${typeof Text.LineHeight} ${typeof Text.FontFamily}`;

/* Specialized: Table */
export type TableHeading =
	`${typeof Headings.FontWeight} ${FontSizes.TableHeading}/${typeof Headings.LineHeight} ${typeof Headings.FontFamily}`;

export type TableText =
	`${typeof Text.FontWeight} ${FontSizes.TableText}/${typeof Text.LineHeight} ${typeof Text.FontFamily}`;

export type TableFootnote =
	`${typeof Text.FontWeight} ${FontSizes.TableFootnote}/${typeof Text.LineHeight} ${typeof Text.FontFamily}`;

export type TablePageNumber =
	`${typeof Text.FontWeight} ${FontSizes.TablePageNumber}/${typeof Text.LineHeight} ${typeof Text.FontFamily}`;

/* Specialized: Generic Font Sizes */
export type FontSizeInRem = `${number}rem`;
export type FontSizeInEm = `${number}em`;

export type FontSize = FontSizeInEm | FontSizeInRem;
