import { isString } from '@/utils/functions/check/js/core/isString';

/**
 * A list of all possible {@link FocusEventType} values.
 */
export enum FocusEventTypes {
	/**
	 * The `blur` event fires when an {@link Element} has lost focus. The event
	 * does not bubble, but the related `focusout` event that follows does bubble.
	 * An element will lose focus if another element is selected. An element will
	 * also lose focus if a style that does not allow focus is applied, such as
	 * hidden, or if the element is removed from the document — in both of these
	 * cases focus moves to the `body` element (viewport). Note however that
	 * `blur` is not fired when a focused element is removed from the document. The
	 * opposite of `blur` is the `focus` event, which fires when the element has
	 * received focus.
	 */
	blur = 'blur',

	/**
	 * The `focus` event fires when an {@link Element} has received focus. The
	 * event does not bubble, but the related `focusin` event that follows does
	 * bubble. The opposite of `focus` is the `blur` event, which fires when the
	 * element has lost focus. The `focus` event is not cancelable.
	 */
	focus = 'focus',

	/**
	 * The `focusin` event fires when an {@link Element} has received focus, after
	 * the `focus` event. The two events differ in that `focusin` bubbles, while
	 * `focus` does not. The opposite of `focusin` is the `focusout` event, which
	 * fires when the element has lost focus. The `focusin` event is not
	 * cancelable.
	 */
	focusin = 'focusin',

	/**
	 * The `focusout` event fires when an {@link Element} has lost focus, after the
	 * `blur` event. The two events differ in that `focusout` bubbles, while
	 * `blur` does not. The opposite of `focusout` is the `focusin` event, which
	 * fires when the element has received focus. The `focusout` event is not
	 * cancelable.
	 */
	focusout = 'focusout',
}

/**
 * Any one of the above {@link FocusEventTypes}.
 */
export type FocusEventType = keyof typeof FocusEventTypes;

/**
 * A list of all {@link FocusEventType} values.
 */
export const FOCUS_EVENT_TYPES = Object.freeze(
	Object.keys(FocusEventTypes).filter(isString),
);

/**
 * Checks that an `unknown` value is a {@link FocusEventType}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link FocusEventTypes}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link FocusEventType}.
 */
export const isFocusEventType = (value: unknown): value is FocusEventType =>
	/**
	 * value
	 */
	isString(value) && FOCUS_EVENT_TYPES.includes(value);
