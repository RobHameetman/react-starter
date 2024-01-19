import { PointerEvent } from 'react';
import { isPointerEvent } from '@app/utils/functions/check/react/isPointerEvent';

/**
 * A compositional event type for React components that allow you to trigger an
 * action for a virtual pointer event. A virtual pointer event is a pointer
 * event that is not triggered by a physical pointer device. For example, a
 * virtual pointer event can be triggered by a keyboard.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export type VirtualPointerEvent<T = Element> = PointerEvent<T>;

/**
 * Checks that an `unknown` value is a {@link VirtualPointerEvent}.
 *
 * Requirements:
 *   - `value` must be a valid {@link PointerEvent}.
 *   - `value` must have a size of 0 or a size of 1 with 0 `pressure` if the `pointerType` is `'mouse'`.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link VirtualPointerEvent}.
 */
export const isVirtualPointerEvent = <T = Element>(
	value: unknown,
): value is VirtualPointerEvent<T> =>
	/**
	 * value
	 */
	isPointerEvent<T>(value) &&
	((value.width === 0 && value.height === 0) ||
		(value.width === 1 &&
			value.height === 1 &&
			value.pressure === 0 &&
			value.detail === 0 &&
			value.pointerType === 'mouse'));
