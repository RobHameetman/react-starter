import type { MouseEvent } from 'react';
import { isObject } from '@app/utils/functions/check/js/core/isObject';
import { isMouseEventType } from '@app/utils/enums/MouseEventTypes';
import { isPointerEventType } from '@app/utils/enums/PointerEventTypes';

/**
 * Checks that an `unknown` value is a {@link MouseEvent}. This type guard is
 * used in other type guards to improve readability.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.type` is required and must be a valid `MouseEventType` or `PointerEventType`.
 *
 * @typeParam `T` - The type of HTML element that will be the target of the event.
 *
 * @param value - An `unknown` value.
 * @param strict - [Optional] If `true`, will check that `value.type` is strictly `MouseEventType`.
 *
 * @returns The determination that `value` is or is not a {@link MouseEvent}.
 */
export const isMouseEvent = <T = Element>(
	value: unknown,
	strict = false,
): value is MouseEvent<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	(isMouseEventType(value.type) || (!strict && isPointerEventType(value.type)));
