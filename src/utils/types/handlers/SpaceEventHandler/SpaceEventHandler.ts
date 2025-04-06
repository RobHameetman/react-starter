import { EventHandler, KeyboardEventHandler } from 'react';
import { isVoidFunction } from '@/utils/functions/check/js/specialized/isVoidFunction';
import { SpaceEvent, isSpaceEvent } from '@/utils/types/events/SpaceEvent';

/**
 * A compositional event handler type for React components that allow you to
 * trigger an action when the 'Space' key is pressed.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export type SpaceEventHandler<T = Element> = EventHandler<SpaceEvent<T>> &
	KeyboardEventHandler<T>;

/**
 * Checks that an `unknown` value is a {@link SpaceEventHandler} function.
 *
 * Requirements:
 *   - `value` must be a function which takes a {@link SpaceEvent<T>} and does not return a value.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value.
 * @param event - [Optional] An `unknown` value. Expected to be an event.
 *
 * @returns The determination that `value` is or is not a {@link SpaceEventHandler} function.
 */
export const isSpaceEventHandler = <T = Element>(
	value: unknown,
	event?: Record<string, unknown>,
): value is SpaceEventHandler<T> =>
	/**
	 * value
	 */
	event
		? isVoidFunction<SpaceEvent<T>>(value, [event], isSpaceEvent)
		: isVoidFunction(value);
