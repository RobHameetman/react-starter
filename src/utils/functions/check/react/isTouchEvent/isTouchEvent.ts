import type { TouchEvent } from 'react';
import { isObject } from '@app/utils/functions/check/js/core/isObject';
import { isTouchEventType } from '@app/utils/enums/TouchEventTypes';

/**
 * Checks that an `unknown` value is a {@link TouchEvent}. This type guard is
 * used in other type guards to improve readability.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.type` is required and must be a valid `TouchEventType`.
 *
 * @typeParam `T` - The type of HTML element that will be the target of the event.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link TouchEvent}.
 */
export const isTouchEvent = <T = Element>(
	value: unknown,
): value is TouchEvent<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	isTouchEventType(value.type);
