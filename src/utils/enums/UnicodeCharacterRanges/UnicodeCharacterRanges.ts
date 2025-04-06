import { isNonEmptyString } from '@/utils/functions/check/js/specialized/isNonEmptyString';

/**
 * Ranges for various Unicode character categories. Each enum member is a string
 * representing a range (or ranges) of Unicode characters. These ranges can be
 * used in regular expressions to match characters in the corresponding category.
 */
export enum UnicodeCharacterRanges {
	/**
	 * A range of Unicode code points for astral characters. This range includes
	 * the Unicode surrogate pair range (U+D800–U+DFFF), which is used in UTF-16
	 * encoding to represent characters outside the Basic Multilingual Plane
	 * (BMP). Characters in this range are part of a pair that together represent
	 * a single character in an astral plane. Astral code points are pretty easy
	 * to recognize: if you need more than 4 hexadecimal digits to represent the
	 * code point, it’s an astral code point.
	 */
	Astral = '\\ud800-\\udfff',

	/**
	 * A range of Unicode code points for Combining Diacritical Marks. This range
	 * includes a variety of non-spacing marks that can be combined with other
	 * characters to form new characters. These are primarily used in the
	 * representation of accented characters in many languages.
	 */
	ComboMarks = '\\u0300-\\u036f',

	/**
	 * A range of Unicode code points for Combining Half Marks. This range
	 * includes the Unicode characters from U+FE20 to U+FE2F, which are used for
	 * glyph modification, indicating that a character should be joined with its
	 * preceding character, its following character, or both. These marks are
	 * typically used in vertical text scenarios.
	 */
	ComboHalfMarks = '\\ufe20-\\ufe2f',

	/**
	 * A range of Unicode code points for Combining Diacritical Marks for Symbols.
	 * This range includes non-spacing marks that can be combined with other
	 * characters, specifically symbols, to form new characters. These are often
	 * used in mathematical notation and other specialized uses.
	 */
	ComboSymbols = '\\u20d0-\\u20ff',

	/**
	 * A range of Unicode code points for Combining Diacritical Marks Extended.
	 * This range corresponds to the Unicode characters from U+1AB0 to U+1AFF.
	 * These marks are used for combining characters, mainly utilized to express
	 * accents, diacritics and certain other modifications in various languages.
	 */
	ComboMarksExtended = '\\u1ab0-\\u1aff',

	/**
	 * A range of Unicode code points for Combining Diacritical Marks Supplement.
	 * This range includes additional non-spacing marks that can be combined with
	 * other characters to form new characters. These are used for specialized
	 * linguistic purposes and other special notations.
	 */
	ComboMarksSupplement = '\\u1dc0-\\u1dff',

	/**
	 * A range of Unicode code points for Dingbats. The Dingbats block contains
	 * decorative character glyphs and symbols. The original 256-character set was
	 * based on he Zapf Dingbats typeface, which was named after its creator
	 * Hermann Zapf, designed for the International Typeface Corporation. Examples
	 * include various geometric shapes, weather symbols, religious symbols,
	 * astrological signs, encircled numerals, and a set of ornamental hearts.
	 */
	Dingbat = '\\u2700-\\u27bf',

	/**
	 * A range of Unicode code points for lowercase letters. This range includes
	 * lowercase basic Latin alphabet letters (a-z) as well as additional Latin
	 * lowercase letters from the Latin-1 Supplement Unicode block. This
	 * supplement includes various accented letters, special characters, and other
	 * letters used in western European languages.
	 */
	Lower = 'a-z\\xdf-\\xf6\\xf8-\\xff',

	/**
	 * A range of Unicode code points for uppercase letters. This range includes
	 * uppercase basic Latin alphabet letters (A-Z) as well as additional Latin
	 * uppercase letters from the Latin-1 Supplement Unicode block. This
	 * supplement includes various accented letters, special characters, and other
	 * letters used in western European languages.
	 */
	Upper = 'A-Z\\xc0-\\xd6\\xd8-\\xde',

	/**
	 * A range of Unicode code points for Variation Selectors. Variation Selectors
	 * are used to specify a specific variant for a Unicode character. In this
	 * case, U+FE0E (VARIATION SELECTOR-15) is used to request a text
	 * representation for an emoji character, and U+FE0F (VARIATION SELECTOR-16)
	 * is used to request an emoji representation for an emoji character. This is
	 * useful when the default presentation for the character is not what is
	 * desired.
	 */
	Var = '\\ufe0e\\ufe0f',

	/**
	 * A range of Unicode code points for several common mathematical operations.
	 * This includes the Unicode values for the NOT SIGN (¬ U+00AC), PLUS-MINUS
	 * SIGN (± U+00B1), MULTIPLICATION SIGN (× U+00D7), and DIVISION SIGN
	 * (÷ U+00F7). These are commonly used mathematical symbols in various fields
	 * of study.
	 */
	MathOp = '\\xac\\xb1\\xd7\\xf7',

	/**
	 * A range of Unicode code points for non-character symbols. This range
	 * includes various control characters, punctuation, digits, and special
	 * symbols in the ASCII range that do not correspond to character letters.
	 */
	NonCharacter = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',

	/**
	 * A range of Unicode code points for General Punctuation. This range, U+2000
	 * to U+206F, includes a variety of punctuation and special characters used in
	 * all kinds of text. This includes but is not limited to various kinds of
	 * spaces, hyphens, invisible operators, formatting marks, and directional
	 * indicators.
	 */
	Punctuation = '\\u2000-\\u206f',

	/**
	 * A range of Unicode code points for whitespace characters. This includes
	 * various types of spaces (regular space, non-breaking space, zero-width
	 * space, etc.), tab, line feed, carriage return, form feed, vertical tab, and
	 * various line separator characters.
	 */
	Space = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',

	/**
	 * A range of Unicode code points for various combining characters. Combining
	 * characters are used to modify other characters and include various accents
	 * and diacritical marks.
	 */
	Combo = `${ComboMarks}${ComboHalfMarks}${ComboSymbols}${ComboMarksExtended}${ComboMarksSupplement}`,

	/**
	 * A comprehensive range of Unicode code points that are typically used as
	 * break points in text. This includes various spaces, punctuation, and
	 * special characters.
	 */
	Break = `${MathOp}${NonCharacter}${Punctuation}${Space}`,
}

/**
 * Any one of the above {@link UnicodeCharacterRanges}.
 */
export type UnicodeCharacterRange = `${UnicodeCharacterRanges}`;

/**
 * A list of all {@link UnicodeCharacterRange} values.
 */
export const UNICODE_CHARACTER_RANGES = Object.freeze(
	Object.values<UnicodeCharacterRange>(UnicodeCharacterRanges),
);

/**
 * Checks that an `unknown` value is a {@link UnicodeCharacterRange}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link UnicodeCharacterRanges}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link UnicodeCharacterRange}.
 */
export const isUnicodeCharacterRange = (
	value: unknown,
): value is UnicodeCharacterRange =>
	/**
	 * value
	 */
	isNonEmptyString(value) &&
	Array.from<string>(UNICODE_CHARACTER_RANGES).includes(value);
