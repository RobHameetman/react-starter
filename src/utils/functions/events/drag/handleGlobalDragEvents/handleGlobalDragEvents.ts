import { noop } from '@app/utils/functions/misc/noop';

/**
 * Handle drag events from the global `window` object. This handler is attached
 * in the `useGlobalDragEvents()` hook.
 *
 * @param event - A {@link InitGlobalFocusListenersInput} object used for
 * destructuring.
 */
export const handleGlobalDragEvents = (event: DragEvent) => {
	const triggers = {
		drag: noop,
		dragend: noop,
		dragenter: noop,
		dragleave: noop,
		dragover: noop,
		dragstart: noop,
		drop: noop,
	};

	const trigger = triggers[event.type as keyof typeof triggers];

	if (trigger) {
		trigger();
	}
};
