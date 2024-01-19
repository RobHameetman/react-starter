import { isString } from '@app/utils/functions/check/js/core/isString';

/**
 * A list of all possible {@link PointerEventType} values.
 */
export enum PointerEventTypes {
	/**
	 * The 'pointercancel' event is fired when the browser determines that there
	 * are unlikely to be any more pointer events, or if after the 'pointerdown'
	 * event is fired, the pointer is then used to manipulate the viewport by
	 * panning, zooming, or scrolling.
	 */
	pointercancel = 'pointercancel',

	/**
	 * The 'pointerdown' event is fired when a pointer becomes active. For mice,
	 * it is fired when the device transitions from no buttons pressed to at least
	 * one button pressed. For touch, it is fired when physical contact is made
	 * with the digitizer. For pen, it is fired when the stylus makes physical
	 * contact with the digitizer.
	 */
	pointerdown = 'pointerdown',

	/**
	 * The 'pointerenter' event fires when a pointing device is moved into the hit
	 * test boundaries of an element or one of its descendants, including as a
	 * result of a 'pointerdown' event from a device that does not support hover.
	 */
	pointerenter = 'pointerenter',

	/**
	 * The 'pointerleave' event is fired when a pointing device is moved out of the
	 * hit test boundaries of an element. For pen devices, this event is fired when
	 * the stylus leaves the hover range detectable by the digitizer.
	 */
	pointerleave = 'pointerleave',

	/**
	 * The 'pointermove' event is fired when a pointer changes coordinates, and the
	 * pointer has not been canceled by a browser touch-action.
	 */
	pointermove = 'pointermove',

	/**
	 * The 'pointerout' event is fired for several reasons including: pointing
	 * device is moved out of the hit test boundaries of an element; firing the
	 * 'pointerup' event for a device that does not support hover; after firing the
	 * 'pointercancel' event when a pen stylus leaves the hover range detectable
	 * by the digitizer.
	 */
	pointerout = 'pointerout',

	/**
	 * The 'pointerover' event is fired when a pointing device is moved into an
	 * element's hit test boundaries.
	 */
	pointerover = 'pointerover',

	/**
	 * The 'pointerup' event is fired when a pointer is no longer active.
	 */
	pointerup = 'pointerup',
}

/**
 * Any one of the above {@link PointerEventTypes}.
 */
export type PointerEventType = keyof typeof PointerEventTypes;

/**
 * A list of all {@link PointerEventType} values.
 */
export const POINTER_EVENT_TYPES = Object.freeze(
	Object.keys(PointerEventTypes).filter(isString),
);

/**
 * Checks that an `unknown` value is a {@link PointerEventType}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link PointerEventTypes}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link PointerEventType}.
 */
export const isPointerEventType = (value: unknown): value is PointerEventType =>
	/**
	 * value
	 */
	isString(value) && POINTER_EVENT_TYPES.includes(value);
