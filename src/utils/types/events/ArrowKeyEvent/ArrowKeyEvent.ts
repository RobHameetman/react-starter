import { KeyboardEvent } from 'react';
import { ArrowDownEvent, isArrowDownEvent } from '@/utils/types/events/ArrowDownEvent';
import { ArrowLeftEvent, isArrowLeftEvent } from '@/utils/types/events/ArrowLeftEvent';
import { ArrowRightEvent, isArrowRightEvent } from '@/utils/types/events/ArrowRightEvent';
import { ArrowUpEvent, isArrowUpEvent } from '@/utils/types/events/ArrowUpEvent';

/**
 * A compositional event type for React components that allow you to trigger an
 * action when any arrow key (▼, ◀︎, ►, ▲) is pressed.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export type ArrowKeyEvent<T = Element> = ArrowDownEvent<T> | ArrowLeftEvent<T> | ArrowRightEvent<T> | ArrowUpEvent<T>;

/**
 * Checks that an `unknown` value is an {@link ArrowKeyEvent}.
 *
 * Requirements:
 *   - `value` must be a valid {@link ArrowDownEvent}, {@link ArrowLeftEvent}, {@link ArrowRightEvent}, or {@link ArrowUpEvent}.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link ArrowKeyEvent}.
 */
export const isArrowKeyEvent = <T = Element>(
	value: unknown,
): value is ArrowKeyEvent<T> =>
	/**
	 * value
	 */
	isArrowDownEvent(value) || isArrowLeftEvent(value) || isArrowRightEvent(value) || isArrowUpEvent(value);
