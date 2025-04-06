import type { UIEvent, UIEventHandler } from 'react';
import { isEventHandler } from '@/utils/functions/check/react/isEventHandler';
import { isUIEvent } from '@/utils/functions/check/react/isUIEvent';

/**
 * Checks that an `unknown` value is a {@link UIEventHandler} function.
 *
 * Requirements:
 *   - `value` must be a function which takes an {@link UIEvent<T>} and does not return a value.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value.
 * @param event - [Optional] A React {@link UIEvent<T>} used to check that the handler accepts the correct arguments.
 *
 * @returns The determination that `value` is or is not a {@link UIEventHandler} function.
 */
export const isUIEventHandler = <T = Element>(
	value: unknown,
	event?: Record<string, unknown>,
): value is UIEventHandler<T> =>
	/**
	 * value
	 */
	isEventHandler<UIEvent<T>>(value, event, isUIEvent);
