import type { ChangeEvent } from 'react';
import { isObject } from '@app/utils/functions/check/js/core/isObject';

/**
 * Checks that an `unknown` value is a {@link ChangeEvent}. This type guard is
 * used in other type guards to improve readability.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.target` is required and must be a valid HTML element of type `T`.
 *   - `value.type` is required and must be `'change'`.
 *
 * @typeParam `T` - The type of HTML element that will be the target of the event.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ChangeEvent}.
 */
export const isChangeEvent = <T = Element>(
	value: unknown,
): value is ChangeEvent<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'change';
