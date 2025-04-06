import {
	EscapeEvent,
	isEscapeEvent,
} from '@/utils/types/events/EscapeEvent';
import { PressEvent, isPressEvent } from '@/utils/types/events/PressEvent';

/**
 * A compositional event type for React components that allow you to trigger an
 * action when the component is closed.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export type CloseEvent<T = Element> = EscapeEvent<T> | PressEvent<T>;

/**
 * Checks that an `unknown` value is a {@link CloseEvent}.
 *
 * Requirements:
 *   - `value` must be a valid {@link EscapeEvent} or {@link PressEvent}.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link CloseEvent}.
 */
export const isCloseEvent = <T = Element>(
	value: unknown,
): value is CloseEvent<T> =>
	/**
	 * value
	 */
	isEscapeEvent(value) || isPressEvent(value);
