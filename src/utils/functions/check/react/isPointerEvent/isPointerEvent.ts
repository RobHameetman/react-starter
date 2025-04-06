import type { PointerEvent } from 'react';
import { isMouseEvent } from '@/utils/functions/check/react/isMouseEvent';
import { isPointerType } from '@/utils/enums/PointerTypes';
import { isPointerEventType } from '@/utils/enums/PointerEventTypes';

/**
 * Checks that an `unknown` value is a {@link PointerEvent}. This type guard is
 * used in other type guards to improve readability.
 *
 * Requirements:
 *   - `value` must be a valid `MouseEvent<T>`.
 *   - `value.pointerType` is required and must be a valid `PointerType`.
 *   - `value.type` is required and must be a valid `PointerEventType`.
 *
 * @typeParam `T` - The type of HTML element that will be the target of the event.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link PointerEvent}.
 */
export const isPointerEvent = <T = Element>(
	value: unknown,
): value is PointerEvent<T> =>
	/**
	 * value
	 */
	isMouseEvent<T>(value) &&
	/**
	 * value.pointerType
	 */
	'pointerType' in value &&
	isPointerType(value.pointerType) &&
	/**
	 * value.type
	 */
	'type' in value &&
	isPointerEventType(value.type);
