import type { FocusEvent, FocusEventHandler } from 'react';
import { isFocusEvent } from '@app/utils/functions/check/react/isFocusEvent';
import { isEventHandler } from '@app/utils/functions/check/react/isEventHandler';

/**
 * Checks that an `unknown` value is a {@link FocusEventHandler} function.
 *
 * Requirements:
 *   - `value` must be a valid React `EventHandler`.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value.
 * @param event - [Optional] A React {@link FocusEvent<T>} used to check that the handler accepts the correct arguments.
 *
 * @returns The determination that `value` is or is not a {@link FocusEventHandler} function.
 */
export const isFocusEventHandler = <T = Element>(
	value: unknown,
	event?: Record<string, unknown>,
): value is FocusEventHandler<T> =>
	/**
	 * value
	 */
	isEventHandler<FocusEvent<T>>(value, event, isFocusEvent);
