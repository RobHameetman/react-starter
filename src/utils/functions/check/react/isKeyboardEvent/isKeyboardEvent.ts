import type { KeyboardEvent } from 'react';
import { isString } from '@app/utils/functions/check/js/core/isString';
import { isObject } from '@app/utils/functions/check/js/core/isObject';
import { isKeyboardEventType } from '@app/utils/enums/KeyboardEventTypes';

/**
 * Checks that an `unknown` value is a {@link KeyboardEvent}. This type guard is
 * used in other type guards to improve readability.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.code` is required and must be a string.
 *   - `value.key` is required and must be a string.
 *   - `value.type` is required and must be a valid `KeyboardEventType`.
 *
 * @typeParam `T` - The type of HTML element that will be the target of the event.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link KeyboardEvent}.
 */
export const isKeyboardEvent = <T = Element>(
	value: unknown,
): value is KeyboardEvent<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.code
	 */
	'code' in value &&
	isString(value.code) &&
	/**
	 * value.key
	 */
	'key' in value &&
	isString(value.key) &&
	/**
	 * value.type
	 */
	'type' in value &&
	isKeyboardEventType(value.type);
