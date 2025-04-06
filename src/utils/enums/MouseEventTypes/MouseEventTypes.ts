import { isString } from '@/utils/functions/check/js/core/isString';

/**
 * A list of all possible {@link MouseEventType} values.
 */
export enum MouseEventTypes {
	/**
	 * The 'auxclick' event is fired at an {@link Element} when a non-primary
	 * pointing device button (any mouse button other than the primary—usually
	 * leftmost—button) has been pressed and released both within the same element.
	 */
	auxclick = 'auxclick',

	/**
	 * An element receives a 'click' event when a pointing device button (such as
	 * a mouse's primary mouse button) is both pressed and released while the
	 * pointer is located inside the element. 'click' fires after both the
	 * 'mousedown' and 'mouseup' events have fired, in that order.
	 */
	click = 'click',

	/**
	 * The `contextmenu` event fires when the user attempts to open a context menu.
	 * This event is typically triggered by clicking the right mouse button, or by
	 * pressing the context menu key. In the latter case, the context menu is
	 * displayed at the bottom left of the focused element, unless the element is
	 * a tree, in which case the context menu is displayed at the bottom left of
	 * the current row. Any right-click event that is not disabled (by calling the
	 * `click` event's `preventDefault()` method) will result in a `contextmenu`
	 * event being fired at the targeted element.
	 */
	contextmenu = 'contextmenu',

	/**
	 * The 'dblclick' event fires when a pointing device button (such as a mouse's
	 * primary button) is double-clicked; that is, when it's rapidly clicked twice
	 * on a single element within a very short span of time.
	 */
	dblclick = 'dblclick',

	/**
	 * The 'mousedown' event is fired at an {@link Element} when a pointing device
	 * button is pressed while the pointer is inside the element.
	 */
	mousedown = 'mousedown',

	/**
	 * The 'mouseenter' event is fired at an {@link Element} when a pointing device
	 * (usually a mouse) is initially moved so that its hot-spot is within the
	 * element at which the event was fired.
	 */
	mouseenter = 'mouseenter',

	/**
	 * The 'mouseleave' event is fired at an {@link Element} when the cursor of a
	 * pointing device (usually a mouse) is moved out of it. 'mouseleave' and
	 * 'mouseout' are similar but differ in that 'mouseleave' does not bubble and
	 * 'mouseout' does. This means that 'mouseleave' is fired when the pointer has
	 * exited the element and all of its descendants, whereas 'mouseout' is fired
	 * when the pointer leaves the element or leaves one of the element's
	 * descendants (even if the pointer is still within the element).
	 */
	mouseleave = 'mouseleave',

	/**
	 * The 'mousemove' event is fired at an {@link Element} when a pointing device
	 * (usually a mouse) is moved while the cursor's hot-spot is inside it.
	 */
	mousemove = 'mousemove',

	/**
	 * The 'mouseout' event is fired at an {@link Element} when a pointing device
	 * (usually a mouse) is used to move the cursor so that it is no longer
	 * contained within the element or one of its children.
	 */
	mouseout = 'mouseout',

	/**
	 * The 'mouseover' event is fired at an {@link Element} when a pointing device
	 * (such as a mouse or track-pad) is used to move the cursor onto the element
	 * or one of its child elements.
	 */
	mouseover = 'mouseover',

	/**
	 * The 'mouseup' event is fired at an {@link Element} when a button on a
	 * pointing device (such as a mouse or track-pad) is released while the
	 * pointer is located inside it. 'mouseup' events are the counterpoint to
	 * 'mousedown' events.
	 */
	mouseup = 'mouseup',
}

/**
 * Any one of the above {@link MouseEventTypes}.
 */
export type MouseEventType = keyof typeof MouseEventTypes;

/**
 * A list of all {@link MouseEventType} values.
 */
export const MOUSE_EVENT_TYPES = Object.freeze(
	Object.keys(MouseEventTypes).filter(isString),
);

/**
 * Checks that an `unknown` value is a {@link MouseEventType}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link MouseEventTypes}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link MouseEventType}.
 */
export const isMouseEventType = (value: unknown): value is MouseEventType =>
	/**
	 * value
	 */
	isString(value) && MOUSE_EVENT_TYPES.includes(value);
