import { isString } from '@app/utils/functions/check/js/core/isString';

/**
 * A list of all possible {@link TouchEventType} values.
 */
export enum TouchEventTypes {
	/**
	 * The `touchcancel` event is fired when one or more touch points have been
	 * disrupted in an implementation-specific manner (for example, too many touch
	 * points are created).
	 */
	touchcancel = 'touchcancel',

	/**
	 * The `touchend` event fires when one or more touch points are removed from
	 * the touch surface.
	 */
	touchend = 'touchend',

	/**
	 * The `touchmove` event is fired when one or more touch points are moved along
	 * the touch surface.
	 */
	touchmove = 'touchmove',

	/**
	 * The `touchstart` event is fired when one or more touch points are placed on
	 * the touch surface.
	 */
	touchstart = 'touchstart',
}

/**
 * Any one of the above {@link TouchEventTypes}.
 */
export type TouchEventType = keyof typeof TouchEventTypes;

/**
 * A list of all {@link TouchEventType} values.
 */
export const TOUCH_EVENT_TYPES = Object.freeze(
	Object.keys(TouchEventTypes).filter(isString),
);

/**
 * Checks that an `unknown` value is a {@link TouchEventType}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link TouchEventTypes}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link TouchEventType}.
 */
export const isTouchEventType = (value: unknown): value is TouchEventType =>
	/**
	 * value
	 */
	isString(value) && TOUCH_EVENT_TYPES.includes(value);
