import { EventHandler, KeyboardEventHandler } from 'react';
import { isVoidFunction } from '@app/utils/functions/check/js/specialized/isVoidFunction';
import {
	EscapeEvent,
	isEscapeEvent,
} from '@app/utils/types/events/EscapeEvent';

/**
 * A compositional event handler type for React components that allow you to
 * trigger an action when the 'Escape' key is pressed.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export type EscapeEventHandler<T = Element> = EventHandler<EscapeEvent<T>> &
	KeyboardEventHandler<T>;

/**
 * Checks that an `unknown` value is an {@link EscapeEventHandler} function.
 *
 * Requirements:
 *   - `value` must be a function which takes an {@link EscapeEvent<T>} and does not return a value.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value.
 * @param event - [Optional] An `unknown` value. Expected to be an event.
 *
 * @returns The determination that `value` is or is not an {@link EscapeEventHandler} function.
 */
export const isEscapeEventHandler = <T = Element>(
	value: unknown,
	event?: Record<string, unknown>,
): value is EscapeEventHandler<T> =>
	/**
	 * value
	 */
	event
		? isVoidFunction<EscapeEvent<T>>(value, [event], isEscapeEvent)
		: isVoidFunction(value);
