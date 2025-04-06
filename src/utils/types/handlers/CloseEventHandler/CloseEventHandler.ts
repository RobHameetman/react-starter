import { EventHandler } from 'react';
import { isVoidFunction } from '@/utils/functions/check/js/specialized/isVoidFunction';
import { CloseEvent, isCloseEvent } from '@/utils/types/events/CloseEvent';

/**
 * A compositional event handler type for React components that allow you to
 * trigger an action when the component is closed.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export type CloseEventHandler<T = Element> = EventHandler<CloseEvent<T>>;

/**
 * Checks that an `unknown` value is a {@link CloseEventHandler} function.
 *
 * Requirements:
 *   - `value` must be a function which takes a {@link CloseEvent<T>} and does not return a value.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value.
 * @param event - [Optional] An `unknown` value. Expected to be an event.
 *
 * @returns The determination that `value` is or is not a {@link CloseEventHandler} function.
 */
export const isCloseEventHandler = <T = Element>(
	value: unknown,
	event?: Record<string, unknown>,
): value is CloseEventHandler<T> =>
	/**
	 * value
	 */
	event
		? isVoidFunction<CloseEvent<T>>(value, [event], isCloseEvent)
		: isVoidFunction(value);
