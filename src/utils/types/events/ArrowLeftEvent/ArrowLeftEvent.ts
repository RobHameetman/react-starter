import { KeyboardEvent } from 'react';
import { isKeyboardEvent } from '@/utils/functions/check/react/isKeyboardEvent';

/**
 * A compositional event type for React components that allow you to trigger an
 * action when the left arrow key (◀︎) is pressed.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export type ArrowLeftEvent<T = Element> = KeyboardEvent<T>;

/**
 * Checks that an `unknown` value is an {@link ArrowLeftEvent}.
 *
 * Requirements:
 *   - `value` must be a valid {@link KeyboardEvent}.
 *   - `value.code` is required and must be the string `'ArrowLeft'`.
 *   - `value.key` is required and must be the string `'ArrowLeft'`.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link ArrowLeftEvent}.
 */
export const isArrowLeftEvent = <T = Element>(
	value: unknown,
): value is ArrowLeftEvent<T> =>
	/**
	 * value
	 */
	isKeyboardEvent(value) &&
	/**
	 * value.code
	 */
	'code' in value &&
	value.code === 'ArrowLeft' &&
	/**
	 * value.key
	 */
	'key' in value &&
	value.key === 'ArrowLeft';
