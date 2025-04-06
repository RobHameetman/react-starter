import { isString } from '@/utils/functions/check/js/core/isString';

/**
 * A list of all possible {@link InteractionModality} values. An interaction
 * modality is a way in which a user or an assistive technology can interact
 * with the application. These are used to determine whether certain events are
 * virtual and whether or not to show focus rings.
 */
export enum InteractionModalities {
	/**
	 * The "keyboard" modality is used when a keyboard event is fired before a
	 * focus event.
	 */
	keyboard = 'keyboard',

	/**
	 * The "pointer" modality is used when a pointer event is fired before a focus
	 * event.
	 */
	pointer = 'pointer',

	/**
	 * The "virtual" modality is used to indicate that a focus event occurred
	 * without a preceding user interaction.
	 */
	virtual = 'virtual',
}

/**
 * Any one of the above {@link InteractionModalities}.
 */
export type InteractionModality = keyof typeof InteractionModalities;

/**
 * A list of all {@link Modality} values.
 */
export const INTERACTION_MODALITIES = Object.freeze(
	Object.keys(InteractionModalities).filter(isString),
);

/**
 * Checks that an `unknown` value is an {@link InteractionModality}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link InteractionModalities}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link InteractionModality}.
 */
export const isInteractionModality = (
	value: unknown,
): value is InteractionModality =>
	/**
	 * value
	 */
	isString(value) && INTERACTION_MODALITIES.includes(value);
