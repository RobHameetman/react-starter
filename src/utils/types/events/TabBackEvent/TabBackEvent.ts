import { TabEvent, isTabEvent } from '@app/utils/types/events/TabEvent';

/**
 * A compositional event type for React components that allow you to trigger an
 * action when the 'Tab' key is pressed while holding the 'Shift' key.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export type TabBackEvent<T = Element> = TabEvent<T>;

/**
 * Checks that an `unknown` value is a {@link TabBackEvent}.
 *
 * Requirements:
 *   - `value` must be a valid {@link TabEvent}.
 *   - `value.shiftKey` is required and must be `true`.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link TabBackEvent}.
 */
export const isTabBackEvent = <T = Element>(
	value: unknown,
): value is TabBackEvent<T> =>
	/**
	 * value
	 */
	isTabEvent(value) &&
	/**
	 * value.shiftKey
	 */
	'shiftKey' in value &&
	value.shiftKey === true;
