import { EventHandler, KeyboardEventHandler } from 'react';
import { isVoidFunction } from '@/utils/functions/check/js/specialized/isVoidFunction';
import { EnterEvent, isEnterEvent } from '@/utils/types/events/EnterEvent';

/**
 * A compositional event handler type for React components that allow you to
 * trigger an action when the 'Enter' key is pressed.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export type EnterEventHandler<T = Element> = EventHandler<EnterEvent<T>> &
	KeyboardEventHandler<T>;

/**
 * Checks that an `unknown` value is an {@link EnterEventHandler} function.
 *
 * Requirements:
 *   - `value` must be a function which takes an {@link EnterEvent<T>} and does not return a value.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value.
 * @param event - [Optional] An `unknown` value. Expected to be an event.
 *
 * @returns The determination that `value` is or is not an {@link EnterEventHandler} function.
 */
export const isEnterEventHandler = <T = Element>(
	value: unknown,
	event?: Record<string, unknown>,
): value is EnterEventHandler<T> =>
	/**
	 * value
	 */
	event
		? isVoidFunction<EnterEvent<T>>(value, [event], isEnterEvent)
		: isVoidFunction(value);
