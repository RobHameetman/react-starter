export enum CoreTokens {
	/* Lengths */
	BaseLength = 0.5,
	RelativeBaseLength = BaseLength,

	/* Scales */
	Dodecatonic = 12,
	Undecatonic = 11,
	Decatonic = 10,
	Nonatonic = 9,
	Octatonic = 8,
	Heptatonic = 7,
	Hexatonic = 6,
	Pentatonic = 5,
	Tetratonic = 4,
	Tritonic = 3,
	Ditonic = 2,
	Monotonic = 1,

	/* Ratios */
	QuarticRatio = 4,
	CubicRatio = 3,
	QuadraticRatio = 2,
	ClassicRatio = 2,
	GoldenRatio = 1.618033988749895,

	/* Aspect Ratios */
	AspectRatio21x9 = 2.37,
	AspectRatio2x1 = 2,
	AspectRatio37x20 = 1.85,
	AspectRatio16x9 = 1.77,
	AspectRatio16x10 = 1.6,
	AspectRatio3x2 = 1.5,
	AspectRatio4x3 = 1.33,
	AspectRatio1x1 = 1,
	AspectRatio9x16 = 0.5625,

	/* Device Modes */
	Portrait = AspectRatio9x16,
	Landscape = AspectRatio16x9,

	/* Displays */
	Square = AspectRatio1x1,
	Fullscreen = AspectRatio4x3,
	Dslr = AspectRatio3x2,
	Widescreen = AspectRatio16x9,
	Desktop = AspectRatio16x10,
	Cinematic = AspectRatio37x20,
	Univisium = AspectRatio2x1,
	Anamorphic = AspectRatio21x9,
}
