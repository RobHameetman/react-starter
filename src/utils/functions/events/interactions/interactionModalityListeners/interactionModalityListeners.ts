import { NativeInteractionEvent } from '@app/utils/types/events/NativeInteractionEvent';
import { NativeInteractionEventHandler } from '@app/utils/types/handlers/NativeInteractionEventHandler';
import { InteractionModality } from '@app/utils/enums/InteractionModalities';

/**
 * A set of interaction modality listeners which are triggered when the current
 * interaction modality changes in the global application state.
 * @internal
 */
const _listeners = new Set<NativeInteractionEventHandler>();

/**
 * Add a listener to the list. The handler added will be called when the current
 * interaction modality changes.
 *
 * @param listener - The interaction modality listener to add.
 */
const addListener = (listener: NativeInteractionEventHandler) => {
	_listeners.add(listener);
};

/**
 * Checks if a provided listener has already been added.
 *
 * @param listener - The interaction modality listener to check for.
 *
 * @returns - A `boolean` indicating whether or not the interaction modality
 * listener exists.
 */
const hasListener = (listener: NativeInteractionEventHandler) =>
	_listeners.has(listener);

/**
 * Remove a listener.
 *
 * @param listener - The interaction modality change handler to remove.
 */
const removeListener = (listener: NativeInteractionEventHandler) => {
	if (_listeners.has(listener)) {
		_listeners.delete(listener);
	}
};

/**
 * Remove all listeners.
 */
const resetListeners = () => {
	_listeners.clear();
};

/**
 * Trigger all listeners currently added. This is called after the current
 * interaction modality changes.
 *
 * @param modality - The current interaction modality.
 * @param e - The native interaction event.
 */
const activate = (modality: InteractionModality, e: NativeInteractionEvent) => {
	for (const handler of _listeners) {
		handler(modality, e);
	}
};

/**
 * Provides a set of functions for managing listeners for changes to the current
 * interaction modality in the global application state.
 */
export const interactionModalityListeners = () => ({
	activate,
	addListener,
	hasListener,
	removeListener,
	resetListeners,
});
