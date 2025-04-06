import { FocusEventHandler, useCallback } from 'react';
import { noop } from '@/utils/functions/misc/noop';
import { isFocusVisible as _isFocusVisible } from '@/utils/functions/events/focus/isFocusVisible';
import { isCapturing as _isCapturing } from '@/utils/functions/events/phases/isCapturing';
import type { Disablable } from '@/utils/types/props/Disablable';
import type { Focusable } from '@/utils/types/props/Focusable';

/**
 * A type alias used to avoid a line break in the 'extends' clause below.
 */
type ComposeProps<T> = Disablable & Focusable<T>;

/**
 * Functional dependencies used in the {@link useFocusEvents()} hook. This
 * object is provided in tests for mocking and spying.
 */
export interface UseFocusEventsDependencies {
	/**
	 * Checks if the provided event is currently in the capturing phase.
	 */
	readonly isCapturing?: typeof _isCapturing;

	/**
	 * Checks the current interaction modality to determine whether or not focus
	 * is visible.
	 */
	readonly isFocusVisible?: typeof _isFocusVisible;
}

/**
 * Destructured arguments provided to the {@link useFocusEvents()} hook.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export interface UseFocusEventsInput<T = Element> extends ComposeProps<T> {
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseFocusEventsDependencies;
}

/**
 * Use a handler for mouse events, touch events, and keyboard events specifically
 * when 'Enter' or 'Space' is pressed. This makes it easier to achieve WCAG
 * compliance given how many different ways there are to interact with a
 * component.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param input - A {@link UseFocusEventsInput} object used for destructuring.
 *
 * @returns The element provided to `as` but type cast for use as a JSX element
 * in your component.
 */
export const useFocusEvents = <T = Element>({
	disabled = false,
	onBlur = noop,
	onBlurCapture = noop,
	onFocus = noop,
	onFocusCapture = noop,
	onFocusVisible = noop,
	onFocusVisibleCapture = noop,
	_dependencies = {},
}: UseFocusEventsInput<T>) => {
	const { isCapturing = _isCapturing, isFocusVisible = _isFocusVisible } =
		_dependencies;

	const handleBlur = useCallback<FocusEventHandler<T>>(
		(e) => {
			if (!disabled && !isCapturing<T>(e)) {
				onBlur(e);
			}
		},
		[onBlur],
	);

	const handleBlurCapture = useCallback<FocusEventHandler<T>>(
		(e) => {
			if (!disabled && isCapturing<T>(e)) {
				onBlurCapture(e);
			}
		},
		[onBlurCapture],
	);

	const handleFocus = useCallback<FocusEventHandler<T>>(
		(e) => {
			if (!disabled && !isCapturing<T>(e)) {
				onFocus(e);

				if (isFocusVisible()) {
					onFocusVisibleCapture(e);
				}
			}
		},
		[onFocus, onFocusVisible],
	);

	const handleFocusCapture = useCallback<FocusEventHandler<T>>(
		(e) => {
			if (!disabled && isCapturing<T>(e)) {
				onFocusCapture(e);

				if (isFocusVisible()) {
					onFocusVisibleCapture(e);
				}
			}
		},
		[onFocusCapture, onFocusVisibleCapture],
	);

	return {
		onBlur: handleBlur,
		onBlurCapture: handleBlurCapture,
		onFocus: handleFocus,
		onFocusCapture: handleFocusCapture,
	};
};
