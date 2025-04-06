import { EventHandler } from 'react';
import { isVoidFunction } from '@/utils/functions/check/js/specialized/isVoidFunction';
import { PressEvent, isPressEvent } from '@/utils/types/events/PressEvent';

/**
 * A compositional event handler type for React components that allow you to
 * trigger an action when the component is pressed. A component is considered
 * pressed when the user presses the 'Enter' or 'Space' key, clicks the
 * component with a mouse, or taps the component with a touch screen. This
 * allows us to more easily achieve WCAG compliance given the various ways that
 * a user can interact with a component.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export type PressEventHandler<T = Element> = EventHandler<PressEvent<T>>;

/**
 * Checks that an `unknown` value is a {@link PressEventHandler} function.
 *
 * Requirements:
 *   - `value` must be a function which takes a {@link PressEvent<T>} and does not return a value.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value.
 * @param event - [Optional] An `unknown` value. Expected to be an event.
 *
 * @returns The determination that `value` is or is not a {@link PressEventHandler} function.
 */
export const isPressEventHandler = <T = Element>(
	value: unknown,
	event?: Record<string, unknown>,
): value is PressEventHandler<T> =>
	/**
	 * value
	 */
	event
		? isVoidFunction<PressEvent<T>>(value, [event], isPressEvent)
		: isVoidFunction(value);
