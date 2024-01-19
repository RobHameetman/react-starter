import { isString } from '@app/utils/functions/check/js/core/isString';

/**
 * The type of alignment of content within a given element or component.
 */
export enum Alignments {
	/**
	 * The value used when content is aligned to the left.
	 */
	Left,

	/**
	 * The value used when content is aligned in the center.
	 */
	Center,

	/**
	 * The value used when content is aligned to the right.
	 */
	Right,
}

/**
 * Any one of the given alignment types.
 */
export type Alignment = Lowercase<keyof typeof Alignments>;

/**
 * An array of all {@link Alignment} values.
 */
export const ALIGNMENTS = Object.freeze(
	Object.keys(Alignments)
		.filter(isString)
		.map((key) => key.toLowerCase()),
);

/**
 * Checks that an `unknown` value is an {@link Alignment}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key of `Alignment`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link Alignment}.
 */
export const isAlignment = (value: unknown): value is Alignment =>
	/**
	 * value
	 */
	isString(value) && Boolean(value.length) && ALIGNMENTS.includes(value);
