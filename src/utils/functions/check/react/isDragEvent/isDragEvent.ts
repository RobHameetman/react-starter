import type { DragEvent } from 'react';
import { isMouseEvent } from '@/utils/functions/check/react/isMouseEvent';
import { isDragEventType } from '@/utils/enums/DragEventTypes';

/**
 * Checks that an `unknown` value is a {@link DragEvent}. This type guard is
 * used in other type guards to improve readability.
 *
 * Requirements:
 *   - `value` must be a valid `MouseEvent`.
 *   - `value.type` is required and must be a valid `DragEventType`.
 *
 * @typeParam `T` - The type of HTML element that will be the target of the event.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link DragEvent}.
 */
export const isDragEvent = <T = Element>(
	value: unknown,
): value is DragEvent<T> =>
	/**
	 * value
	 */
	isMouseEvent<T>(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	isDragEventType(value.type);
