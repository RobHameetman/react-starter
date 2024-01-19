import type { SyntheticEvent } from 'react';

/**
 * Checks if the provided event is currently in the capturing phase. In the DOM
 * event flow, the capturing phase occurs before the target phase (where the
 * event is dispatched directly on the event target) and the bubbling phase
 * (where the event bubbles up through its ancestors).
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 * @typeParam E - The type of event that will be dispatched.
 * Defaults to type {@link SyntheticEvent<T>}.
 *
 * @param e - A {@link SyntheticEvent} object. Synthetic events are wrappers
 * around the browser's native event system.
 *
 * @returns A boolean which is `true` if the event is in the capturing phase,
 * `false` otherwise.
 */
export const isCapturing = <
	T = Element,
	E extends SyntheticEvent<T> = SyntheticEvent<T>,
>(
	e: E,
) => e.eventPhase === Event.CAPTURING_PHASE;
