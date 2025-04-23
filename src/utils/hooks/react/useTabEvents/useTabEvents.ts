import { KeyboardEventHandler, useCallback } from 'react';
import { isCapturing as _isCapturing } from '@/utils/functions/events/phases/isCapturing';
import { noop } from '@/utils/functions/misc/noop';
import { isTabEvent as _isTabEvent } from '@/utils/types/events/TabEvent';
import { isTabBackEvent as _isTabBackEvent } from '@/utils/types/events/TabBackEvent';
import type { Tabbable } from '@/utils/types/props/Tabbable';

/**
 * Functional dependencies used in the {@link useTabEvents()} hook. This object
 * is provided in tests for mocking and spying.
 */
export interface UseTabEventsDependencies {
	/**
	 * Checks if the provided event is currently in the capturing phase.
	 */
	readonly isCapturing?: typeof _isCapturing;

	/**
	 * Checks that an `unknown` value is a {@link TabEvent}.
	 */
	readonly isTabEvent?: typeof _isTabEvent;

	/**
	 * Checks that an `unknown` value is a {@link TabBackEvent}.
	 */
	readonly isTabBackEvent?: typeof _isTabBackEvent;
}

/**
 * Destructured arguments provided to the {@link useTabEvents()} hook.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export interface UseTabEventsInput<T = Element> extends Tabbable<T> {
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseTabEventsDependencies;
}

/**
 * Use a keyboard event handler for the 'Tab' key specifically.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param input - A {@link UseTabEventsInput} object used for destructuring.
 *
 * @returns The element provided to `as` but type cast for use as a JSX element
 * in your component.
 */
export const useTabEvents = <T = Element>({
	onPressTab = noop,
	onPressTabCapture = noop,
	onPressTabBack = noop,
	onPressTabBackCapture = noop,
	onPressTabUp = noop,
	onPressTabUpCapture = noop,
	onPressTabBackUp = noop,
	onPressTabBackUpCapture = noop,
	_dependencies = {},
}: UseTabEventsInput<T>) => {
	const {
		isCapturing = _isCapturing,
		isTabEvent = _isTabEvent,
		isTabBackEvent = _isTabBackEvent,
	} = _dependencies;

	const handleKeyDown = useCallback<KeyboardEventHandler<T>>(
		(e) => {
			if (isTabBackEvent(e)) {
				onPressTabBack(e);
			} else if (isTabEvent(e)) {
				onPressTab(e);
			}
		},
		[onPressTab, onPressTabBack],
	);

	const handleKeyDownCapture = useCallback<KeyboardEventHandler<T>>(
		(e) => {
			const capturing = isCapturing<T>(e);

			if (isTabBackEvent(e) && capturing) {
				onPressTabBackCapture(e);
			} else if (isTabEvent(e) && capturing) {
				onPressTabCapture(e);
			}
		},
		[onPressTabCapture, onPressTabBackCapture],
	);

	const handleKeyUp = useCallback<KeyboardEventHandler<T>>(
		(e) => {
			if (isTabBackEvent(e)) {
				onPressTabBackUp(e);
			} else if (isTabEvent(e)) {
				onPressTabUp(e);
			}
		},
		[onPressTabUp, onPressTabBackUp],
	);

	const handleKeyUpCapture = useCallback<KeyboardEventHandler<T>>(
		(e) => {
			const capturing = isCapturing<T>(e);

			if (isTabBackEvent(e) && capturing) {
				onPressTabBackUpCapture(e);
			} else if (isTabEvent(e) && capturing) {
				onPressTabUpCapture(e);
			}
		},
		[onPressTabUpCapture, onPressTabBackUpCapture],
	);

	return {
		onKeyDown: handleKeyDown,
		onKeyDownCapture: handleKeyDownCapture,
		onKeyUp: handleKeyUp,
		onKeyUpCapture: handleKeyUpCapture,
	};
};
