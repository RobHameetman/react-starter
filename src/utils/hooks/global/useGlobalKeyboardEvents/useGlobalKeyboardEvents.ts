import { useLayoutEffect } from 'react';
import { noop } from '@app/utils/functions/misc/noop';
import { handleGlobalKeyboardEvents as _handleGlobalKeyboardEvents } from '@app/utils/functions/events/keyboard/handleGlobalKeyboardEvents';

/**
 * Functional dependencies used in the {@link useGlobalKeyboardEvents()} hook.
 * This object is provided in tests for mocking and spying.
 */
export interface UseGlobalKeyboardEventsDependencies {
	/**
	 * Handle keyboard events from the global `window` object.
	 */
	readonly handleGlobalKeyboardEvents?: typeof _handleGlobalKeyboardEvents;
}

/**
 * Destructured arguments provided to the {@link useGlobalKeyboardEvents()}
 * hook.
 */
export interface UseGlobalKeyboardEventsInput {
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseGlobalKeyboardEventsDependencies;
}

let initialized = false;

/**
 * Initialize global keyboard event listeners when mounted and remove them when
 * unmounted.
 *
 * @param input - [Optional] A {@link UseGlobalKeyboardEventsInput} object used
 * for destructuring.
 */
export const useGlobalKeyboardEvents = ({
	_dependencies = {},
}: UseGlobalKeyboardEventsInput = {}) => {
	const { handleGlobalKeyboardEvents = _handleGlobalKeyboardEvents } =
		_dependencies;

	useLayoutEffect(() => {
		if (typeof window === 'undefined' || initialized) {
			return noop;
		}

		window.addEventListener('keydown', handleGlobalKeyboardEvents, true);
		window.addEventListener('keyup', handleGlobalKeyboardEvents, true);

		initialized = true;

		return () => {
			window.removeEventListener('keydown', handleGlobalKeyboardEvents);
			window.removeEventListener('keyup', handleGlobalKeyboardEvents);

			initialized = false;
		};
	}, []);
};
