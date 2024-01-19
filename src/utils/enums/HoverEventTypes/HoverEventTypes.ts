import { isString } from '@app/utils/functions/check/js/core/isString';

/**
 * A list of all possible {@link HoverEventType} values.
 */
export enum HoverEventTypes {
	/**
	 * The `mouseenter` event is fired at an {@link Element} when a pointing device
	 * (usually a mouse) is initially moved so that its hotspot is within the
	 * element at which the event was fired.
	 */
	mouseenter = 'mouseenter',

	/**
	 * The `mouseleave` event is fired at an {@link Element} when the cursor of a
	 * pointing device (usually a mouse) is moved out of it. `mouseleave` and
	 * `mouseout` are similar but differ in that `mouseleave` does not bubble and
	 * `mouseout` does. This means that `mouseleave` is fired when the pointer has
	 * exited the element and all of its descendants, whereas `mouseout` is fired
	 * when the pointer leaves the element or leaves one of the element's
	 * descendants (even if the pointer is still within the element).
	 */
	mouseleave = 'mouseleave',

	/**
	 * The `mouseout` event is fired at an {@link Element} when a pointing device
	 * (usually a mouse) is used to move the cursor so that it is no longer
	 * contained within the element or one of its children. `mouseout` is also
	 * delivered to an element if the cursor enters a child element, because the
	 * child element obscures the visible area of the element.
	 */
	mouseout = 'mouseout',

	/**
	 * The `mouseover` event is fired at an {@link Element} when a pointing device
	 * (such as a mouse or trackpad) is used to move the cursor onto the element
	 * or one of its child elements.
	 */
	mouseover = 'mouseover',

	/**
	 * The `pointerenter` event fires when a pointing device is moved into the hit
	 * test boundaries of an {@link Element} or one of its descendants, including
	 * as a result of a `pointerdown` event from a device that does not support
	 * hover.
	 */
	pointerenter = 'pointerenter',

	/**
	 * The `pointerleave` event is fired when a pointing device is moved out of the
	 * hit test boundaries of an {@link Element}. For pen devices, this event is
	 * fired when the stylus leaves the hover range detectable by the digitizer.
	 */
	pointerleave = 'pointerleave',

	/**
	 * The `pointerout` event is fired for several reasons including: the pointing
	 * device is moved out of the hit test boundaries of an {@link Element}; firing
	 * the `pointerup` event for a device that does not support hover; after firing
	 * the `pointercancel` event; when a pen stylus leaves the hover range
	 * detectable by the digitizer.
	 */
	pointerout = 'pointerout',

	/**
	 * The `pointerover` event is fired when a pointing device is moved into an
	 * {@link Element}'s hit test boundaries.
	 */
	pointerover = 'pointerover',
}

/**
 * Any one of the above {@link HoverEventTypes}.
 */
export type HoverEventType = keyof typeof HoverEventTypes;

/**
 * A list of all {@link HoverEventType} values.
 */
export const HOVER_EVENT_TYPES = Object.freeze(
	Object.keys(HoverEventTypes).filter(isString),
);

/**
 * Checks that an `unknown` value is a {@link HoverEventType}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link HoverEventTypes}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link HoverEventType}.
 */
export const isHoverEventType = (value: unknown): value is HoverEventType =>
	/**
	 * value
	 */
	isString(value) && HOVER_EVENT_TYPES.includes(value);
