import { managePointerModality } from '@/utils/functions/events/interactions/managePointerModality';
import { noop } from '@/utils/functions/misc/noop';

/**
 * Handle pointer events from the global `window` object. This handler is
 * attached in the `useGlobalPointerEvents()` hook.
 *
 * @param event - The global {@link PointerEvent} to handle.
 */
export const handleGlobalPointerEvents = (event: PointerEvent) => {
	const triggers = {
		pointercancel: noop,
		pointerdown: () => {
			managePointerModality({ event });
		},
		pointerenter: noop,
		pointerleave: noop,
		pointermove: () => {
			managePointerModality({ event });
		},
		pointerout: noop,
		pointerover: noop,
		pointerup: () => {
			managePointerModality({ event });
		},
	};

	const trigger = triggers[event.type as keyof typeof triggers];

	if (trigger) {
		trigger();
	}
};
