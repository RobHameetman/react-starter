import { useLayoutEffect } from 'react';
import { noop } from '@app/utils/functions/misc/noop';
import { handleGlobalScrollEvents as _handleGlobalScrollEvents } from '@app/utils/functions/events/scroll/handleGlobalScrollEvents';

/**
 * Functional dependencies used in the {@link useGlobalScrollEvents()} hook.
 * This object is provided in tests for mocking and spying.
 */
export interface UseGlobalScrollEventsDependencies {
	/**
	 * Handle scroll events from the global `window` object.
	 */
	readonly handleGlobalScrollEvents?: typeof _handleGlobalScrollEvents;
}

/**
 * Destructured arguments provided to the {@link useGlobalScrollEvents()}
 * hook.
 */
export interface UseGlobalScrollEventsInput {
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseGlobalScrollEventsDependencies;
}

let initialized = false;

/**
 * Initialize global scroll event listeners when mounted and remove them when
 * unmounted.
 *
 * @param input - [Optional] A {@link UseGlobalScrollEventsInput} object used for
 * destructuring.
 */
export const useGlobalScrollEvents = ({
	_dependencies = {},
}: UseGlobalScrollEventsInput = {}) => {
	const { handleGlobalScrollEvents = _handleGlobalScrollEvents } =
		_dependencies;

	useLayoutEffect(() => {
		if (typeof window === 'undefined' || initialized) {
			return noop;
		}

		window.addEventListener('scroll', handleGlobalScrollEvents, true);
		window.addEventListener('scrollend', handleGlobalScrollEvents, true);

		initialized = true;

		return () => {
			window.removeEventListener('scroll', handleGlobalScrollEvents);
			window.removeEventListener('scrollend', handleGlobalScrollEvents);

			initialized = false;
		};
	}, []);
};
