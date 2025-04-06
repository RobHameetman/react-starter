import { isString } from '@/utils/functions/check/js/core/isString';

/**
 * A list of all possible {@link PressEventType} values. A component is
 * considered pressed when the user presses the 'Enter' or 'Space' key, clicks
 * the component with a mouse, or taps the component with a touch screen. This
 * allows us to more easily achieve WCAG compliance given the various ways that
 * a user can interact with a component.
 */
export enum PressEventTypes {
	click = 'click',
	dragstart = 'dragstart',
	keydown = 'keydown',
	keyup = 'keyup',
	mousedown = 'mousedown',
	mouseenter = 'mouseenter',
	mouseleave = 'mouseleave',
	mousemove = 'mousemove',
	mouseup = 'mouseup',
	pointerdown = 'pointerdown',
	pointerenter = 'pointerenter',
	pointerleave = 'pointerleave',
	pointermove = 'pointermove',
	pointerup = 'pointerup',
	touchcancel = 'touchcancel',
	touchend = 'touchend',
	touchmove = 'touchmove',
	touchstart = 'touchstart',
}

/**
 * Any one of the above {@link PressEventTypes}.
 */
export type PressEventType = keyof typeof PressEventTypes;

/**
 * A list of all {@link PressEventType} values.
 */
export const PRESS_EVENT_TYPES = Object.freeze(
	Object.keys(PressEventTypes).filter(isString),
);

/**
 * Checks that an `unknown` value is a {@link PressEventType}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link PressEventTypes}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link PressEventType}.
 */
export const isPressEventType = (value: unknown): value is PressEventType =>
	/**
	 * value
	 */
	isString(value) && PRESS_EVENT_TYPES.includes(value);
