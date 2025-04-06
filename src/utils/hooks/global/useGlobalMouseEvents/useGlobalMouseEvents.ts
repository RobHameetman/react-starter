import { useLayoutEffect } from 'react';
import { noop } from '@/utils/functions/misc/noop';
import { handleGlobalMouseEvents as _handleGlobalMouseEvents } from '@/utils/functions/events/mouse/handleGlobalMouseEvents';

/**
 * Functional dependencies used in the {@link useGlobalMouseEvents()} hook.
 * This object is provided in tests for mocking and spying.
 */
export interface UseGlobalMouseEventsDependencies {
	/**
	 * Handle mouse events from the global `window` object.
	 */
	readonly handleGlobalMouseEvents?: typeof _handleGlobalMouseEvents;
}

/**
 * Destructured arguments provided to the {@link useGlobalMouseEvents()}
 * hook.
 */
export interface UseGlobalMouseEventsInput {
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseGlobalMouseEventsDependencies;
}

let initialized = false;

/**
 * Initialize global mouse event listeners when mounted and remove them when
 * unmounted.
 *
 * @param input - [Optional] A {@link UseGlobalMouseEventsInput} object used for
 * destructuring.
 */
export const useGlobalMouseEvents = ({
	_dependencies = {},
}: UseGlobalMouseEventsInput = {}) => {
	const { handleGlobalMouseEvents = _handleGlobalMouseEvents } = _dependencies;

	useLayoutEffect(() => {
		if (typeof window === 'undefined' || initialized) {
			return noop;
		}

		window.addEventListener('auxclick', handleGlobalMouseEvents, true);
		window.addEventListener('contextmenu', handleGlobalMouseEvents, true);
		window.addEventListener('click', handleGlobalMouseEvents, true);
		window.addEventListener('dblclick', handleGlobalMouseEvents, true);
		window.addEventListener('mousedown', handleGlobalMouseEvents, true);
		window.addEventListener('mouseenter', handleGlobalMouseEvents, true);
		window.addEventListener('mouseleave', handleGlobalMouseEvents, true);
		window.addEventListener('mousemove', handleGlobalMouseEvents, true);
		window.addEventListener('mouseout', handleGlobalMouseEvents, true);
		window.addEventListener('mouseover', handleGlobalMouseEvents, true);
		window.addEventListener('mouseup', handleGlobalMouseEvents, true);

		initialized = true;

		return () => {
			window.removeEventListener('auxclick', handleGlobalMouseEvents);
			window.removeEventListener('contextmenu', handleGlobalMouseEvents);
			window.removeEventListener('click', handleGlobalMouseEvents);
			window.removeEventListener('dblclick', handleGlobalMouseEvents);
			window.removeEventListener('mousedown', handleGlobalMouseEvents);
			window.removeEventListener('mouseenter', handleGlobalMouseEvents);
			window.removeEventListener('mouseleave', handleGlobalMouseEvents);
			window.removeEventListener('mousemove', handleGlobalMouseEvents);
			window.removeEventListener('mouseout', handleGlobalMouseEvents);
			window.removeEventListener('mouseover', handleGlobalMouseEvents);
			window.removeEventListener('mouseup', handleGlobalMouseEvents);

			initialized = false;
		};
	}, []);
};
