import { useLayoutEffect } from 'react';
import { noop } from '@/utils/functions/misc/noop';
import { handleGlobalPointerEvents as _handleGlobalPointerEvents } from '@/utils/functions/events/pointer/handleGlobalPointerEvents';

/**
 * Functional dependencies used in the {@link useGlobalPointerEvents()} hook.
 * This object is provided in tests for mocking and spying.
 */
export interface UseGlobalPointerEventsDependencies {
	/**
	 * Handle pointer events from the global `window` object.
	 */
	readonly handleGlobalPointerEvents?: typeof _handleGlobalPointerEvents;
}

/**
 * Destructured arguments provided to the {@link useGlobalPointerEvents()}
 * hook.
 */
export interface UseGlobalPointerEventsInput {
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseGlobalPointerEventsDependencies;
}

let initialized = false;

/**
 * Initialize global pointer event listeners when mounted and remove them when
 * unmounted.
 *
 * @param input - [Optional] A {@link UseGlobalPointerEventsInput} object used
 * for destructuring.
 */
export const useGlobalPointerEvents = ({
	_dependencies = {},
}: UseGlobalPointerEventsInput = {}) => {
	const { handleGlobalPointerEvents = _handleGlobalPointerEvents } =
		_dependencies;

	useLayoutEffect(() => {
		if (typeof window === 'undefined' || initialized) {
			return noop;
		}

		window.addEventListener('pointercancel', handleGlobalPointerEvents, true);
		window.addEventListener('pointerdown', handleGlobalPointerEvents, true);
		window.addEventListener('pointerenter', handleGlobalPointerEvents, true);
		window.addEventListener('pointerleave', handleGlobalPointerEvents, true);
		window.addEventListener('pointermove', handleGlobalPointerEvents, true);
		window.addEventListener('pointerout', handleGlobalPointerEvents, true);
		window.addEventListener('pointerover', handleGlobalPointerEvents, true);
		window.addEventListener('pointerup', handleGlobalPointerEvents, true);

		initialized = true;

		return () => {
			window.removeEventListener('pointercancel', handleGlobalPointerEvents);
			window.removeEventListener('pointerdown', handleGlobalPointerEvents);
			window.removeEventListener('pointerenter', handleGlobalPointerEvents);
			window.removeEventListener('pointerleave', handleGlobalPointerEvents);
			window.removeEventListener('pointermove', handleGlobalPointerEvents);
			window.removeEventListener('pointerout', handleGlobalPointerEvents);
			window.removeEventListener('pointerover', handleGlobalPointerEvents);
			window.removeEventListener('pointerup', handleGlobalPointerEvents);

			initialized = false;
		};
	}, []);
};
