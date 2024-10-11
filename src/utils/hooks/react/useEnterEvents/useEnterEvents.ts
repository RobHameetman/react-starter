import { KeyboardEvent, useCallback } from 'react';
import { isCapturing as _isCapturing } from '@/utils/functions/events/phases/isCapturing';
import { noop } from '@/utils/functions/misc/noop';
import { isEnterEvent as _isEnterEvent } from '@/utils/types/events/EnterEvent';
import type { Enterable } from '@/utils/types/props/Enterable';
import type { Keyboardable } from '@/utils/types/props/Keyboardable';

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
export interface UseEnterEventsInput<T = Element> extends Enterable<T>, Keyboardable<T> {
	/**
	 * [Optional] Set to `true` to disable enter events.
	 * @defaultValue - `false`
	 */
	readonly disabled?: boolean;

	/**
	 * [Optional] Set to `true` if the event target is focused.
	 * @defaultValue - `false`
	 */
	readonly focused?: boolean;

	/**
	 * [Optional] Set to `true` if the event target requires focus for the enter
	 * event to fire.
	 * @defaultValue - `false`
	 */
	readonly requireFocus?: boolean;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseEnterEventsDependencies;
}

/**
 * Use this hook in components that may accept `onPressEnter()` and
 * `onPressEnterCapture()` props.
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
	disabled = false,
	focused = false,
	requireFocus = false,
	onKeyDown = noop,
	onKeyDownCapture = noop,
	onKeyUp = noop,
	onKeyUpCapture = noop,
	onPressEnter = noop,
	onPressEnterCapture = noop,
	_dependencies = {},
}: UseEnterEventsInput<T>) => {
	const { isCapturing = _isCapturing, isEnterEvent = _isEnterEvent } =
		_dependencies;

		const handleKeyDown = useCallback(
			<U extends T = T>(e: KeyboardEvent<U>) => {
				const isFocused = requireFocus ? focused : true;

				if (!disabled && isFocused && isEnterEvent(e) && !isCapturing<T>(e)) {
					onPressEnter(e);
					onKeyDown(e);
				}
			},
			[disabled, focused, requireFocus, onPressEnter, onKeyDown],
		);

	const handleKeyDownCapture = useCallback(
		<U extends T = T>(e: KeyboardEvent<U>) => {
			const isFocused = requireFocus ? focused : true;

			if (!disabled && isFocused && isEnterEvent(e) && isCapturing<T>(e)) {
				onPressEnterCapture(e);
				onKeyDownCapture(e);
			}
		},
		[disabled, focused, requireFocus, onPressEnterCapture, onKeyDownCapture],
	);

	const handleKeyUp = useCallback(
		<U extends T = T>(e: KeyboardEvent<U>) => {
			const isFocused = requireFocus ? focused : true;

			if (!disabled && isFocused && isEnterEvent(e) && !isCapturing<T>(e)) {
				onPressEnter(e);
				onKeyUp(e);
			}
		},
		[disabled, focused, requireFocus, onPressEnter, onKeyUp],
	);

	const handleKeyUpCapture = useCallback(
		<U extends T = T>(e: KeyboardEvent<U>) => {
			const isFocused = requireFocus ? focused : true;

			if (!disabled && isFocused && isEnterEvent(e) && isCapturing<T>(e)) {
				onPressEnterCapture(e);
				onKeyUpCapture(e);
			}
		},
		[disabled, focused, requireFocus, onPressEnterCapture, onKeyUpCapture],
	);

	return {
		onKeyDown: handleKeyDown,
		onKeyDownCapture: handleKeyDownCapture,
		onKeyUp: handleKeyUp,
		onKeyUpCapture: handleKeyUpCapture,
	};
};
