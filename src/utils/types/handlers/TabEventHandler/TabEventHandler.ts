import { EventHandler, KeyboardEventHandler } from 'react';
import { isVoidFunction } from '@/utils/functions/check/js/specialized/isVoidFunction';
import { TabEvent, isTabEvent } from '@/utils/types/events/TabEvent';

/**
 * A compositional event handler type for React components that allow you to
 * trigger an action when the 'Tab' key is pressed.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export type TabEventHandler<T = Element> = EventHandler<TabEvent<T>> &
	KeyboardEventHandler<T>;

/**
 * Checks that an `unknown` value is a {@link TabEventHandler} function.
 *
 * Requirements:
 *   - `value` must be a function which takes an {@link TabEvent<T>} and does not return a value.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value.
 * @param event - [Optional] An `unknown` value. Expected to be an event.
 *
 * @returns The determination that `value` is or is not a {@link TabEventHandler} function.
 */
export const isTabEventHandler = <T = Element>(
	value: unknown,
	event?: Record<string, unknown>,
): value is TabEventHandler<T> =>
	/**
	 * value
	 */
	event
		? isVoidFunction<TabEvent<T>>(value, [event], isTabEvent)
		: isVoidFunction(value);
