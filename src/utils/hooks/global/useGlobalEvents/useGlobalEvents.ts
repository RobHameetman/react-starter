import { useGlobalDragEvents as _useGlobalDragEvents } from '../useGlobalDragEvents';
import { useGlobalFocusEvents as _useGlobalFocusEvents } from '../useGlobalFocusEvents';
import { useGlobalKeyboardEvents as _useGlobalKeyboardEvents } from '../useGlobalKeyboardEvents';
import { useGlobalMouseEvents as _useGlobalMouseEvents } from '../useGlobalMouseEvents';
import { useGlobalPointerEvents as _useGlobalPointerEvents } from '../useGlobalPointerEvents';
import { useGlobalScrollEvents as _useGlobalScrollEvents } from '../useGlobalScrollEvents';

/**
 * Functional dependencies used in the {@link useGlobalEvents()} hook.
 * This object is provided in tests for mocking and spying.
 */
export interface UseGlobalEventsDependencies {
	/**
	 * Initialize global drag event listeners when mounted and remove them when
	 * unmounted.
	 */
	readonly useGlobalDragEvents?: typeof _useGlobalDragEvents;

	/**
	 * Initialize global focus event listeners when mounted and remove them when
	 * unmounted.
	 */
	readonly useGlobalFocusEvents?: typeof _useGlobalFocusEvents;

	/**
	 * Initialize global keyboard event listeners when mounted and remove them
	 * when unmounted.
	 */
	readonly useGlobalKeyboardEvents?: typeof _useGlobalKeyboardEvents;

	/**
	 * Initialize global mouse event listeners when mounted and remove them when
	 * unmounted.
	 */
	readonly useGlobalMouseEvents?: typeof _useGlobalMouseEvents;

	/**
	 * Initialize global pointer event listeners when mounted and remove them when
	 * unmounted.
	 */
	readonly useGlobalPointerEvents?: typeof _useGlobalPointerEvents;

	/**
	 * Initialize global scroll event listeners when mounted and remove them when
	 * unmounted.
	 */
	readonly useGlobalScrollEvents?: typeof _useGlobalScrollEvents;
}

/**
 * Destructured arguments provided to the {@link useGlobalEvents()}
 * hook.
 */
export interface UseGlobalEventsInput {
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseGlobalEventsDependencies;
}

/**
 * @TODO
 *
 * @param input - [Optional] A {@link UseGlobalEventsInput} object used for
 * destructuring.
 */
export const useGlobalEvents = ({
	_dependencies = {},
}: UseGlobalEventsInput = {}) => {
	const {
		useGlobalDragEvents = _useGlobalDragEvents,
		useGlobalFocusEvents = _useGlobalFocusEvents,
		useGlobalKeyboardEvents = _useGlobalKeyboardEvents,
		useGlobalMouseEvents = _useGlobalMouseEvents,
		useGlobalPointerEvents = _useGlobalPointerEvents,
		useGlobalScrollEvents = _useGlobalScrollEvents,
	} = _dependencies;

	useGlobalDragEvents();
	useGlobalFocusEvents();
	useGlobalKeyboardEvents();
	useGlobalMouseEvents();
	useGlobalPointerEvents();
	useGlobalScrollEvents();
};
