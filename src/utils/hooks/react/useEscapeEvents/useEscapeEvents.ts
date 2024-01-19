import { KeyboardEventHandler, useCallback } from 'react';
import { isCapturing as _isCapturing } from '@app/utils/functions/events/phases/isCapturing';
import { noop } from '@app/utils/functions/misc/noop';
import { isEscapeEvent as _isEscapeEvent } from '@app/utils/types/events/EscapeEvent';
import type { Disablable } from '@app/utils/types/props/Disablable';
import type { Escapable } from '@app/utils/types/props/Escapable';

/**
 * A type alias used to avoid a line break in the 'extends' clause below.
 */
type ComposeProps<T> = Disablable & Escapable<T>;

/**
 * Functional dependencies used in the {@link useEscapeEvents()} hook. This
 * object is provided in tests for mocking and spying.
 */
export interface UseEscapeEventsDependencies {
	/**
	 * Checks if the provided event is currently in the capturing phase.
	 */
	readonly isCapturing?: typeof _isCapturing;

	/**
	 * Checks that an `unknown` value is an {@link EscapeEvent}.
	 */
	readonly isEscapeEvent?: typeof _isEscapeEvent;
}

/**
 * Destructured arguments provided to the {@link useEscapeEvents()} hook.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export interface UseEscapeEventsInput<T = Element> extends ComposeProps<T> {
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseEscapeEventsDependencies;
}

/**
 * Use a keyboard event handler for the 'Escape' key specifically.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param input - A {@link UseEscapeEventsInput} object used for destructuring.
 *
 * @returns The element provided to `as` but type cast for use as a JSX element
 * in your component.
 */
export const useEscapeEvents = <T = Element>({
	disabled = false,
	onEscape = noop,
	onEscapeCapture = noop,
	onEscapeUp = noop,
	onEscapeUpCapture = noop,
	_dependencies = {},
}: UseEscapeEventsInput<T>) => {
	const { isCapturing = _isCapturing, isEscapeEvent = _isEscapeEvent } =
		_dependencies;

	const handleKeyDown = useCallback<KeyboardEventHandler<T>>(
		(e) => {
			if (!disabled && isEscapeEvent(e)) {
				onEscape(e);
			}
		},
		[disabled, onEscape],
	);

	const handleKeyDownCapture = useCallback<KeyboardEventHandler<T>>(
		(e) => {
			if (!disabled && isEscapeEvent(e) && isCapturing<T>(e)) {
				onEscapeCapture(e);
			}
		},
		[disabled, onEscapeCapture],
	);

	const handleKeyUp = useCallback<KeyboardEventHandler<T>>(
		(e) => {
			if (!disabled && isEscapeEvent(e)) {
				onEscapeUp(e);
			}
		},
		[disabled, onEscapeUp],
	);

	const handleKeyUpCapture = useCallback<KeyboardEventHandler<T>>(
		(e) => {
			if (!disabled && isEscapeEvent(e) && isCapturing<T>(e)) {
				onEscapeUpCapture(e);
			}
		},
		[disabled, onEscapeUpCapture],
	);

	return {
		onKeyDown: handleKeyDown,
		onKeyDownCapture: handleKeyDownCapture,
		onKeyUp: handleKeyUp,
		onKeyUpCapture: handleKeyUpCapture,
	};
};
