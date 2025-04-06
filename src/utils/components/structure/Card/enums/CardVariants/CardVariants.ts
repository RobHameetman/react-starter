import { isNonEmptyString } from '@/utils/functions/check/js/specialized/isNonEmptyString';

/**
 * A set of discrete variants for the `<Card />` component.
 */
export enum CardVariants {
	/**
	 * A card with a thin border around it.
	 */
	bordered = 'bordered',

	/**
	 * A flat card with no shadow underneath.
	 */
	flat = 'flat',

	/**
	 * An elevated card with a shadow underneath.
	 */
	shadow = 'shadow',
}

/**
 * Any one of the above variants for the `<Card />` component.
 */
export type CardVariant = keyof typeof CardVariants;

/**
 * A list of all the above variants for the `<Card />` component.
 */
export const CARD_VARIANTS = Object.keys(CardVariants).filter(
	(key) => typeof key === 'string',
);

/**
 * Checks that an `unknown` value is a {@link CardVariant}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link CardVariants}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link CardVariant}.
 */
export const isCardVariant = (value: unknown): value is CardVariant =>
	/**
	 * value
	 */
	isNonEmptyString(value) && CARD_VARIANTS.includes(value);
