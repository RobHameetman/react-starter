import { handleWindowBlur } from '@/utils/functions/events/focus/handleWindowBlur';
import { manageFocusModality } from '@/utils/functions/events/interactions/manageFocusModality';
import { noop } from '@/utils/functions/misc/noop';

/**
 * Handle focus events from the global `window` object. This handler is attached
 * in the `useGlobalFocusEvents()` hook.
 *
 * @param event - The global {@link FocusEvent} to handle.
 */
export const handleGlobalFocusEvents = (event: FocusEvent) => {
	const triggers = {
		blur: () => {
			handleWindowBlur();
		},
		focus: () => {
			manageFocusModality({ event });
		},
		focusin: noop,
		focusout: noop,
	};

	const trigger = triggers[event.type as keyof typeof triggers];

	if (trigger) {
		trigger();
	}
};
