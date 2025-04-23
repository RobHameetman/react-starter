import { KeyboardEvent, useCallback } from 'react';
import { isCapturing as _isCapturing } from '@/utils/functions/events/phases/isCapturing';
import { noop } from '@/utils/functions/misc/noop';
import { isSpaceEvent as _isSpaceEvent } from '@/utils/types/events/SpaceEvent';
import type Spaceable from '@/utils/types/props/Spaceable';


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
	 * [Optional] Whether or not the {@link SpaceEvent} target is disabled.
	 * @defaultValue - `false`
	 */
	readonly disabled?: boolean;

	/**
	 * [Optional] Whether or not the {@link SpaceEvent} target is focused.
	 * @defaultValue - `false`
	 */
	readonly focused?: boolean;

	/**
	 * [Optional] Whether or not the {@link SpaceEvent} target requires focus.
	 * @defaultValue - `false`
	 */
	readonly requireFocus?: boolean;

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
	disabled = false,
	focused = false,
	requireFocus = false,
	onKeyDown = noop,
	onKeyDownCapture = noop,
	onKeyUp = noop,
	onKeyUpCapture = noop,
	onPressSpace = noop,
	onPressSpaceCapture = noop,
	onReleaseSpace = noop,
	onReleaseSpaceCapture = noop,
	_dependencies = {},
}: UseSpaceEventsInput<T>) => {
	const { isCapturing = _isCapturing, isSpaceEvent = _isSpaceEvent } =
		_dependencies;

	const handleKeyDown = useCallback(
		<U extends T = T>(e: KeyboardEvent<U>) => {
			const isFocused = requireFocus ? focused : true;

			if (!disabled && isFocused && isSpaceEvent<U>(e) && !isCapturing<U>(e)) {
				onPressSpace(e);
				onKeyDown(e);
			}
		},
		[disabled, focused, requireFocus, onKeyDown, onPressSpace],
	);

	const handleKeyDownCapture = useCallback(
		<U extends T = T>(e: KeyboardEvent<U>) => {
			const isFocused = requireFocus ? focused : true;

			if (!disabled && isFocused && isSpaceEvent<U>(e) && isCapturing<U>(e)) {
				onPressSpaceCapture(e);
				onKeyDownCapture(e);
			}
		},
		[disabled, focused, requireFocus, onKeyDownCapture, onPressSpaceCapture],
	);

	const handleKeyUp = useCallback(
		<U extends T = T>(e: KeyboardEvent<U>) => {
			const isFocused = requireFocus ? focused : true;

			if (!disabled && isFocused && isSpaceEvent<U>(e) && !isCapturing<U>(e)) {
				onReleaseSpace(e);
				onKeyUp(e);
			}
		},
		[disabled, focused, requireFocus, onKeyUp, onReleaseSpace],
	);

	const handleKeyUpCapture = useCallback(
		<U extends T = T>(e: KeyboardEvent<U>) => {
			const isFocused = requireFocus ? focused : true;

			if (!disabled && isFocused && isSpaceEvent<U>(e) && isCapturing<U>(e)) {
				onReleaseSpaceCapture(e);
				onKeyUpCapture(e);
			}
		},
		[disabled, focused, requireFocus, onKeyUpCapture, onReleaseSpaceCapture],
	);

	return {
		onKeyDown: handleKeyDown,
		onKeyDownCapture: handleKeyDownCapture,
		onKeyUp: handleKeyUp,
		onKeyUpCapture: handleKeyUpCapture,
	};
};
