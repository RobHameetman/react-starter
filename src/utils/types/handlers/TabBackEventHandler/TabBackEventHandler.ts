import { EventHandler } from 'react';
import { isVoidFunction } from '@app/utils/functions/check/js/specialized/isVoidFunction';
import {
	TabBackEvent,
	isTabBackEvent,
} from '@app/utils/types/events/TabBackEvent';
import { TabEventHandler } from '@app/utils/types/handlers/TabEventHandler';

/**
 * A compositional event handler type for React components that allow you to
 * trigger an action when the 'Tab' key is pressed while holding the 'Shift'
 * key.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export type TabBackEventHandler<T = Element> = EventHandler<TabBackEvent<T>> &
	TabEventHandler<T>;

/**
 * Checks that an `unknown` value is a {@link TabBackEventHandler} function.
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
 * @returns The determination that `value` is or is not a {@link TabBackEventHandler} function.
 */
export const isTabBackEventHandler = <T = Element>(
	value: unknown,
	event?: Record<string, unknown>,
): value is TabBackEventHandler<T> =>
	/**
	 * value
	 */
	event
		? isVoidFunction<TabBackEvent<T>>(value, [event], isTabBackEvent)
		: isVoidFunction(value);
