import { noop } from '@/utils/functions/misc/noop';

/**
 * Handle scroll events from the global `window` object. This handler is
 * attached in the `useGlobalScrollEvents()` hook.
 *
 * @param event - The global scroll {@link Event} to handle.
 */
export const handleGlobalScrollEvents = (event: Event) => {
	const triggers = {
		scroll: noop,
		scrollend: noop,
	};

	const trigger = triggers[event.type as keyof typeof triggers];

	if (trigger) {
		trigger();
	}
};
