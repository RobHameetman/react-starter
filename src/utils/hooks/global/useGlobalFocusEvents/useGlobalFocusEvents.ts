import { useLayoutEffect } from 'react';
import { noop } from '@/utils/functions/misc/noop';
import { handleGlobalFocusEvents as _handleGlobalFocusEvents } from '@/utils/functions/events/focus/handleGlobalFocusEvents';
import { overrideNativeFocus as _overrideNativeFocus } from '@/utils/functions/events/focus/overrideNativeFocus';

/**
 * Functional dependencies used in the {@link useGlobalFocusEvents()} hook. This
 * object is provided in tests for mocking and spying.
 */
export interface UseGlobalFocusEventsDependencies {
	/**
	 * Handle focus events from the global `window` object.
	 */
	readonly handleGlobalFocusEvents?: typeof _handleGlobalFocusEvents;

	/**
	 * Override the native `HTMLElement.prototype.focus()` method so that we can
	 * track when it is called.
	 */
	readonly overrideNativeFocus?: typeof _overrideNativeFocus;
}

/**
 * Destructured arguments provided to the {@link useGlobalFocusEvents()}
 * hook.
 */
export interface UseGlobalFocusEventsInput {
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseGlobalFocusEventsDependencies;
}

let initialized = false;

/**
 * Initialize global focus event listeners when mounted and remove them when
 * unmounted.
 *
 * @param input - [Optional] A {@link UseGlobalFocusEventsInput} object used for
 * destructuring.
 */
export const useGlobalFocusEvents = ({
	_dependencies = {},
}: UseGlobalFocusEventsInput = {}) => {
	const {
		handleGlobalFocusEvents = _handleGlobalFocusEvents,
		overrideNativeFocus = _overrideNativeFocus,
	} = _dependencies;

	useLayoutEffect(() => {
		if (typeof window === 'undefined' || initialized) {
			return noop;
		}

		const restoreNativeFocus = overrideNativeFocus();

		window.addEventListener('blur', handleGlobalFocusEvents, true);
		window.addEventListener('focus', handleGlobalFocusEvents, true);
		window.addEventListener('focusin', handleGlobalFocusEvents, true);
		window.addEventListener('focusout', handleGlobalFocusEvents, true);

		initialized = true;

		return () => {
			restoreNativeFocus();

			window.removeEventListener('blur', handleGlobalFocusEvents);
			window.removeEventListener('focus', handleGlobalFocusEvents);
			window.removeEventListener('focusin', handleGlobalFocusEvents);
			window.removeEventListener('focusout', handleGlobalFocusEvents);

			initialized = false;
		};
	}, []);
};
