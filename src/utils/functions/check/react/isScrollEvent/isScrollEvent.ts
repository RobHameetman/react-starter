import type { UIEvent } from 'react';
import { isUIEvent } from '@/utils/functions/check/react/isUIEvent';
import { isScrollEventType } from '@/utils/enums/ScrollEventTypes';

/**
 * Checks that an `unknown` value is a {@link ScrollEvent}. This type guard is
 * used in other type guards to improve readability.
 *
 * Requirements:
 *   - `value` must be a valid `MouseEvent`.
 *   - `value.type` is required and must be a valid `ScrollEventType`.
 *
 * @typeParam `T` - The type of HTML element that will be the target of the event.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ScrollEvent}.
 */
export const isScrollEvent = <T = Element>(
	value: unknown,
): value is UIEvent<T> =>
	/**
	 * value
	 */
	isUIEvent<T>(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	isScrollEventType(value.type);
