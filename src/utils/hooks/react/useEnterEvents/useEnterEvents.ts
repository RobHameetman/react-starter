import { KeyboardEventHandler, useCallback } from 'react';
import { isCapturing as _isCapturing } from '@app/utils/functions/events/phases/isCapturing';
import { noop } from '@app/utils/functions/misc/noop';
import { isEnterEvent as _isEnterEvent } from '@app/utils/types/events/EnterEvent';
import type { Enterable } from '@app/utils/types/props/Enterable';

/**
 * Functional dependencies used in the {@link useEnterEvents()} hook. This object
 * is provided in tests for mocking and spying.
 */
export interface UseEnterEventsDependencies {
	/**
	 * Checks if the provided event is currently in the capturing phase.
	 */
	readonly isCapturing?: typeof _isCapturing;

	/**
	 * Checks that an `unknown` value is an {@link EnterEvent}.
	 */
	readonly isEnterEvent?: typeof _isEnterEvent;
}

/**
 * Destructured arguments provided to the {@link useEnterEvents()} hook.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export interface UseEnterEventsInput<T = Element> extends Enterable<T> {
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseEnterEventsDependencies;
}

/**
 * Use a keyboard event handler for the 'Enter' key specifically.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param input - A {@link UseEnterEventsInput} object used for destructuring.
 *
 * @returns The element provided to `as` but type cast for use as a JSX element
 * in your component.
 */
export const useEnterEvents = <T = Element>({
	onEnter = noop,
	onEnterCapture = noop,
	onEnterUp = noop,
	onEnterUpCapture = noop,
	_dependencies = {},
}: UseEnterEventsInput<T>) => {
	const { isCapturing = _isCapturing, isEnterEvent = _isEnterEvent } =
		_dependencies;

	const handleKeyDown = useCallback<KeyboardEventHandler<T>>(
		(e) => {
			if (isEnterEvent(e)) {
				onEnter(e);
			}
		},
		[onEnter],
	);

	const handleKeyDownCapture = useCallback<KeyboardEventHandler<T>>(
		(e) => {
			if (isEnterEvent(e) && isCapturing<T>(e)) {
				onEnterCapture(e);
			}
		},
		[onEnterCapture],
	);

	const handleKeyUp = useCallback<KeyboardEventHandler<T>>(
		(e) => {
			if (isEnterEvent(e)) {
				onEnterUp(e);
			}
		},
		[onEnterUp],
	);

	const handleKeyUpCapture = useCallback<KeyboardEventHandler<T>>(
		(e) => {
			if (isEnterEvent(e) && isCapturing<T>(e)) {
				onEnterUpCapture(e);
			}
		},
		[onEnterUpCapture],
	);

	return {
		onKeyDown: handleKeyDown,
		onKeyDownCapture: handleKeyDownCapture,
		onKeyUp: handleKeyUp,
		onKeyUpCapture: handleKeyUpCapture,
	};
};
