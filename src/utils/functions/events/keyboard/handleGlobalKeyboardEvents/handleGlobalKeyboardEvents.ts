import { manageKeyboardModality } from '@app/utils/functions/events/interactions/manageKeyboardModality';

/**
 * Handle keyboard events from the global `window` object. This handler is
 * attached in the `useGlobalKeyboardEvents()` hook.
 *
 * @param event - The global {@link KeyboardEvent} to handle.
 */
export const handleGlobalKeyboardEvents = (event: KeyboardEvent) => {
	const triggers = {
		keydown: () => {
			manageKeyboardModality({ event });
		},
		keyup: () => {
			manageKeyboardModality({ event });
		},
	};

	const trigger = triggers[event.type as keyof typeof triggers];

	if (trigger) {
		trigger();
	}
};
