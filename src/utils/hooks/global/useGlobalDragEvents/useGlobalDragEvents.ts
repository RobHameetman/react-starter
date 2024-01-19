import { useLayoutEffect } from 'react';
import { noop } from '@app/utils/functions/misc/noop';
import { handleGlobalDragEvents as _handleGlobalDragEvents } from '@app/utils/functions/events/drag/handleGlobalDragEvents';

/**
 * Functional dependencies used in the {@link useGlobalDragEvents()} hook.
 * This object is provided in tests for mocking and spying.
 */
export interface UseGlobalDragEventsDependencies {
	/**
	 * Handle drag events from the global `window` object.
	 */
	readonly handleGlobalDragEvents?: typeof _handleGlobalDragEvents;
}

/**
 * Destructured arguments provided to the {@link useGlobalDragEvents()}
 * hook.
 */
export interface UseGlobalDragEventsInput {
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseGlobalDragEventsDependencies;
}

let initialized = false;

/**
 * Initialize global drag event listeners when mounted and remove them when
 * unmounted.
 *
 * @param input - [Optional] A {@link UseGlobalDragEventsInput} object used for
 * destructuring.
 */
export const useGlobalDragEvents = ({
	_dependencies = {},
}: UseGlobalDragEventsInput = {}) => {
	const { handleGlobalDragEvents = _handleGlobalDragEvents } = _dependencies;

	useLayoutEffect(() => {
		if (typeof window === 'undefined' || initialized) {
			return noop;
		}

		window.addEventListener('drag', handleGlobalDragEvents, true);
		window.addEventListener('dragend', handleGlobalDragEvents, true);
		window.addEventListener('dragenter', handleGlobalDragEvents, true);
		window.addEventListener('dragleave', handleGlobalDragEvents, true);
		window.addEventListener('dragover', handleGlobalDragEvents, true);
		window.addEventListener('dragstart', handleGlobalDragEvents, true);
		window.addEventListener('drop', handleGlobalDragEvents, true);

		initialized = true;

		return () => {
			window.removeEventListener('drag', handleGlobalDragEvents);
			window.removeEventListener('dragend', handleGlobalDragEvents);
			window.removeEventListener('dragenter', handleGlobalDragEvents);
			window.removeEventListener('dragleave', handleGlobalDragEvents);
			window.removeEventListener('dragover', handleGlobalDragEvents);
			window.removeEventListener('dragstart', handleGlobalDragEvents);
			window.removeEventListener('drop', handleGlobalDragEvents);

			initialized = false;
		};
	}, []);
};
