import { isString } from '@app/utils/functions/check/js/core/isString';

/**
 * A list of all possible {@link ScrollEventType} values.
 */
export enum ScrollEventTypes {
	/**
	 * The `scroll` event fires when the document view has been scrolled.
	 */
	scroll = 'scroll',

	/**
	 * The `scrollend` event fires when the document view has completed scrolling.
	 * Scrolling is considered completed when the scroll position has no more
	 * pending updates and the user has completed their gesture. Scroll position
	 * updates include smooth or instant mouse wheel scrolling, keyboard
	 * scrolling, scroll-snap events, or other APIs and gestures which cause the
	 * scroll position to update. User gestures like touch panning or track-pad
	 * scrolling aren't complete until pointers or keys have released. If the
	 * scroll position did not change, then no `scrollend` event fires.
	 */
	scrollend = 'scrollend',
}

/**
 * Any one of the above {@link ScrollEventTypes}.
 */
export type ScrollEventType = keyof typeof ScrollEventTypes;

/**
 * A list of all {@link ScrollEventType} values.
 */
export const SCROLL_EVENT_TYPES = Object.freeze(
	Object.keys(ScrollEventTypes).filter(isString),
);

/**
 * Checks that an `unknown` value is a {@link ScrollEventType}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link ScrollEventTypes}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ScrollEventType}.
 */
export const isScrollEventType = (value: unknown): value is ScrollEventType =>
	/**
	 * value
	 */
	isString(value) && SCROLL_EVENT_TYPES.includes(value);
