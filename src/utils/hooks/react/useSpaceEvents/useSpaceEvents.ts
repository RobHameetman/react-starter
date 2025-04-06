import { KeyboardEventHandler, useCallback } from 'react';
import { isCapturing as _isCapturing } from '@/utils/functions/events/phases/isCapturing';
import { noop } from '@/utils/functions/misc/noop';
import { isSpaceEvent as _isSpaceEvent } from '@/utils/types/events/SpaceEvent';
import type { Spaceable } from '@/utils/types/props/Spaceable';

/**
 * Functional dependencies used in the {@link useSpaceEvents()} hook. This object
 * is provided in tests for mocking and spying.
 */
export interface UseSpaceEventsDependencies {
	/**
	 * Checks if the provided event is currently in the capturing phase.
	 */
	readonly isCapturing?: typeof _isCapturing;

	/**
	 * Checks that an `unknown` value is an {@link SpaceEvent}.
	 */
	readonly isSpaceEvent?: typeof _isSpaceEvent;
}

/**
 * Destructured arguments provided to the {@link useSpaceEvents()} hook.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export interface UseSpaceEventsInput<T = Element> extends Spaceable<T> {
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseSpaceEventsDependencies;
}

/**
 * Use keyboard event handlers for the 'Space' key specifically.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param input - A {@link UseSpaceEventsInput} object used for destructuring.
 *
 * @returns The element provided to `as` but type cast for use as a JSX element
 * in your component.
 */
export const useSpaceEvents = <T = Element>({
	onSpace = noop,
	onSpaceCapture = noop,
	onSpaceUp = noop,
	onSpaceUpCapture = noop,
	_dependencies = {},
}: UseSpaceEventsInput<T>) => {
	const { isCapturing = _isCapturing, isSpaceEvent = _isSpaceEvent } =
		_dependencies;

	const handleKeyDown = useCallback<KeyboardEventHandler<T>>(
		(e) => {
			if (isSpaceEvent(e)) {
				onSpace(e);
			}
		},
		[onSpace],
	);

	const handleKeyDownCapture = useCallback<KeyboardEventHandler<T>>(
		(e) => {
			if (isSpaceEvent(e) && isCapturing<T>(e)) {
				onSpaceCapture(e);
			}
		},
		[onSpaceCapture],
	);

	const handleKeyUp = useCallback<KeyboardEventHandler<T>>(
		(e) => {
			if (isSpaceEvent(e)) {
				onSpaceUp(e);
			}
		},
		[onSpaceUp],
	);

	const handleKeyUpCapture = useCallback<KeyboardEventHandler<T>>(
		(e) => {
			if (isSpaceEvent(e) && isCapturing<T>(e)) {
				onSpaceUpCapture(e);
			}
		},
		[onSpaceUpCapture],
	);

	return {
		onKeyDown: handleKeyDown,
		onKeyDownCapture: handleKeyDownCapture,
		onKeyUp: handleKeyUp,
		onKeyUpCapture: handleKeyUpCapture,
	};
};
