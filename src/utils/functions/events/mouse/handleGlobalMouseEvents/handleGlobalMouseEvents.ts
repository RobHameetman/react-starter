import { noop } from '@app/utils/functions/misc/noop';
import { manageVirtualClickModality } from '@app/utils/functions/events/interactions/manageVirtualClickModality';

/**
 * Handle mouse events from the global `window` object. This handler is attached
 * in the `useGlobalMouseEvents()` hook.
 *
 * @param event - The global {@link MouseEvent} to handle.
 */
export const handleGlobalMouseEvents = (event: MouseEvent) => {
	const triggers = {
		auxclick: noop,
		dblclick: noop,
		click: () => {
			manageVirtualClickModality({ event });
		},
		contextmenu: noop,
		mousedown: noop,
		mouseenter: noop,
		mouseleave: noop,
		mousemove: noop,
		mouseout: noop,
		mouseover: noop,
		mouseup: noop,
	};

	const trigger = triggers[event.type as keyof typeof triggers];

	if (trigger) {
		trigger();
	}
};
