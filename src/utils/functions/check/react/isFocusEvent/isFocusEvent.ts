import type { FocusEvent } from 'react';
import { isFocusEventType } from '@app/utils/enums/FocusEventTypes';
import { isSyntheticEvent } from '@app/utils/functions/check/react/isSyntheticEvent';

/**
 * Checks that an `unknown` value is a {@link FocusEvent}. This type guard is
 * used in other type guards to improve readability.
 *
 * Requirements:
 *   - `value` must be a valid `SyntheticEvent`.
 *   - `value.type` is required and must be a valid `FocusEventType`.
 *
 * @typeParam `T` - The type of HTML element that will be the target of the event.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link FocusEvent}.
 */
export const isFocusEvent = <T = Element>(
	value: unknown,
): value is FocusEvent<T> =>
	/**
	 * value
	 */
	isSyntheticEvent(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	isFocusEventType(value.type);
