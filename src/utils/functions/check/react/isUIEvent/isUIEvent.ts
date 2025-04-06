import type { UIEvent } from 'react';
import { isNumber } from '@/utils/functions/check/js/core/isNumber';
import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isSyntheticEvent } from '@/utils/functions/check/react/isSyntheticEvent';

/**
 * Checks that an `unknown` value is a {@link UIEvent}. This type guard is
 * used in other type guards to improve readability.
 *
 * Requirements:
 *   - `value` must be a valid `SyntheticEvent`.
 *   - `value.detail` is required and must be a number.
 *   - `value.view` is required and must be an object.
 *
 * @typeParam `T` - The type of HTML element that will be the target of the event.
 * @typeParam `E` - The type of event that will be triggered.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link UIEvent}.
 */
export const isUIEvent = <T = Element, E = Event>(
	value: unknown,
): value is UIEvent<T, E> =>
	/**
	 * value
	 */
	isSyntheticEvent(value) &&
	/**
	 * value.detail
	 */
	'detail' in value &&
	isNumber(value.detail) &&
	/**
	 * value.view
	 */
	'view' in value &&
	isObject(value.view);
