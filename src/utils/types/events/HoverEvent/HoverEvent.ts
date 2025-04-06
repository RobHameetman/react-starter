import { MouseEvent, PointerEvent } from 'react';
import { isHoverEventType } from '@/utils/enums/HoverEventTypes';
import { isMouseEvent } from '@/utils/functions/check/react/isMouseEvent';
import { isPointerEvent } from '@/utils/functions/check/react/isPointerEvent';

/**
 * A compositional event type for React components that allow you to trigger an
 * action when the user hovers over an element. Though this could be a
 * {@link MouseEvent}, it is recommended to use it as a  {@link PointerEvent}
 * because the `pointerenter` and `pointerleave` events are more reliable than
 * the `mouseenter` and `mouseleave` events.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export type HoverEvent<T = Element> = MouseEvent<T> | PointerEvent<T>;

/**
 * Checks that an `unknown` value is an {@link HoverEvent}.
 *
 * Requirements:
 *   - `value` must be a valid {@link MouseEvent} or {@link PointerEvent}.
 *   - `value.type` is required and must be a valid `HoverEventType`.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link HoverEvent}.
 */
export const isHoverEvent = <T = Element>(
	value: unknown,
): value is HoverEvent<T> =>
	/**
	 * value
	 */
	(isMouseEvent<T>(value) || isPointerEvent<T>(value)) &&
	/**
	 * value.type
	 */
	'type' in value &&
	isHoverEventType(value.type);
