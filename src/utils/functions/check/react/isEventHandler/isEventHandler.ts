import type { SyntheticEvent, EventHandler } from 'react';
import { isVoidFunction } from '@app/utils/functions/check/js/specialized/isVoidFunction';
import { isSyntheticEvent } from '@app/utils/functions/check/react/isSyntheticEvent';

/**
 * A type alias used to resolve a type error on line `34`.
 */
type EventGuard<E extends SyntheticEvent<unknown>> = (
	event: unknown,
) => event is E;

/**
 * Checks that an `unknown` value is an {@link EventHandler} function.
 *
 * Requirements:
 *   - `value` must be a function which takes a {@link SyntheticEvent} and does not return a value.
 *
 * @typeParam E - The type of React event that will be provided to the handler.
 *
 * @param value - An `unknown` value.
 * @param event - [Optional] A React event which is a subtype of type {@link SyntheticEvent}.
 * @param isE - [Optional] An additional type-guard to check whether the arguments of the handler are of type `E`.
 *
 * @returns The determination that `value` is or is not an {@link EventHandler} function.
 */
export const isEventHandler = <E extends SyntheticEvent<unknown>>(
	value: unknown,
	event?: Record<string, unknown>,
	isE = isSyntheticEvent as EventGuard<E>,
): value is EventHandler<E> =>
	/**
	 * value
	 */
	event ? isVoidFunction<E>(value, [event], isE) : isVoidFunction(value);
