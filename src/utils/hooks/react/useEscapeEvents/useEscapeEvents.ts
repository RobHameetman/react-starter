import { KeyboardEvent, useCallback } from 'react';
import { isCapturing as _isCapturing } from '@/utils/functions/events/phases/isCapturing';
import { noop } from '@/utils/functions/misc/noop';
import { isEscapeEvent as _isEscapeEvent } from '@/utils/types/events/EscapeEvent';
import type { Escapable } from '@/utils/types/props/Escapable';
import type { Keyboardable } from '@/utils/types/props/Keyboardable';

/**
 * Functional dependencies used in the {@link useEscapeEvents()} hook. This object
 * is provided in tests for mocking and spying.
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
export interface UseEscapeEventsInput<T = Element> extends Escapable<T>, Keyboardable<T> {
	/**
	 * [Optional] Set to `true` to disable Escape events.
	 * @defaultValue - `false`
	 */
	readonly disabled?: boolean;

	/**
	 * [Optional] Set to `true` if the event target is focused.
	 * @defaultValue - `false`
	 */
	readonly focused?: boolean;

	/**
	 * [Optional] Set to `true` if the event target requires focus for the Escape
	 * event to fire.
	 * @defaultValue - `false`
	 */
	readonly requireFocus?: boolean;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseEscapeEventsDependencies;
}

/**
 * Use this hook in components that may accept `onPressEscape()` and
 * `onPressEscapeCapture()` props.
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
	focused = false,
	requireFocus = false,
	onKeyDown = noop,
	onKeyDownCapture = noop,
	onKeyUp = noop,
	onKeyUpCapture = noop,
	onPressEscape = noop,
	onPressEscapeCapture = noop,
	_dependencies = {},
}: UseEscapeEventsInput<T>) => {
	const { isCapturing = _isCapturing, isEscapeEvent = _isEscapeEvent } =
		_dependencies;

		const handleKeyDown = useCallback(
			<U extends T = T>(e: KeyboardEvent<U>) => {
				const isFocused = requireFocus ? focused : true;

				if (!disabled && isFocused && isEscapeEvent(e) && !isCapturing<T>(e)) {
					onPressEscape(e);
					onKeyDown(e);
				}
			},
			[disabled, focused, requireFocus, onPressEscape, onKeyDown],
		);

	const handleKeyDownCapture = useCallback(
		<U extends T = T>(e: KeyboardEvent<U>) => {
			const isFocused = requireFocus ? focused : true;

			if (!disabled && isFocused && isEscapeEvent(e) && isCapturing<T>(e)) {
				onPressEscapeCapture(e);
				onKeyDownCapture(e);
			}
		},
		[disabled, focused, requireFocus, onPressEscapeCapture, onKeyDownCapture],
	);

	const handleKeyUp = useCallback(
		<U extends T = T>(e: KeyboardEvent<U>) => {
			const isFocused = requireFocus ? focused : true;

			if (!disabled && isFocused && isEscapeEvent(e) && !isCapturing<T>(e)) {
				onPressEscape(e);
				onKeyUp(e);
			}
		},
		[disabled, focused, requireFocus, onPressEscape, onKeyUp],
	);

	const handleKeyUpCapture = useCallback(
		<U extends T = T>(e: KeyboardEvent<U>) => {
			const isFocused = requireFocus ? focused : true;

			if (!disabled && isFocused && isEscapeEvent(e) && isCapturing<T>(e)) {
				onPressEscapeCapture(e);
				onKeyUpCapture(e);
			}
		},
		[disabled, focused, requireFocus, onPressEscapeCapture, onKeyUpCapture],
	);

	return {
		onKeyDown: handleKeyDown,
		onKeyDownCapture: handleKeyDownCapture,
		onKeyUp: handleKeyUp,
		onKeyUpCapture: handleKeyUpCapture,
	};
};
