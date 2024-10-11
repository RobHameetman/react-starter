import { EventHandler, KeyboardEventHandler } from 'react';
import { isVoidFunction } from '@/utils/functions/check/js/specialized/isVoidFunction';
import { ArrowUpEvent, isArrowUpEvent } from '@/utils/types/events/ArrowUpEvent';

/**
 * A compositional event handler type for React components that allow you to
 * trigger an action when the 'Enter' key is pressed.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export type ArrowUpEventHandler<T = Element> = EventHandler<ArrowUpEvent<T>> &
	KeyboardEventHandler<T>;

/**
 * Checks that an `unknown` value is an {@link ArrowUpEventHandler} function.
 *
 * Requirements:
 *   - `value` must be a function which takes an {@link ArrowUpEvent<T>} and does not return a value.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value.
 * @param event - [Optional] An `unknown` value. Expected to be an event.
 *
 * @returns The determination that `value` is or is not an {@link ArrowUpEventHandler} function.
 */
export const isArrowUpEventHandler = <T = Element>(
	value: unknown,
	event?: Record<string, unknown>,
): value is ArrowUpEventHandler<T> =>
	/**
	 * value
	 */
	event
		? isVoidFunction<ArrowUpEvent<T>>(value, [event], isArrowUpEvent)
		: isVoidFunction(value);
