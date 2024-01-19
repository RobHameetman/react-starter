import { EventHandler } from 'react';
import { isVoidFunction } from '@app/utils/functions/check/js/specialized/isVoidFunction';
import { HoverEvent, isHoverEvent } from '@app/utils/types/events/HoverEvent';

/**
 * A compositional event handler type for React components that allow you to
 * trigger an action when the user hovers over an element.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export type HoverEventHandler<T = Element> = EventHandler<HoverEvent<T>>;

/**
 * Checks that an `unknown` value is an {@link HoverEventHandler} function.
 *
 * Requirements:
 *   - `value` must be a function which takes an {@link HoverEvent<T>} and does not return a value.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value.
 * @param event - [Optional] An `unknown` value. Expected to be an event.
 *
 * @returns The determination that `value` is or is not an {@link HoverEventHandler} function.
 */
export const isHoverEventHandler = <T = Element>(
	value: unknown,
	event?: Record<string, unknown>,
): value is HoverEventHandler<T> =>
	/**
	 * value
	 */
	event
		? isVoidFunction<HoverEvent<T>>(value, [event], isHoverEvent)
		: isVoidFunction(value);
