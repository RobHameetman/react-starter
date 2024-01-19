/**
 * A map of interaction states used to help determine the current interaction
 * modality.
 * @internal
 */
const _interactionStates = new Map<string, boolean>();

_interactionStates.set('hasPrefocusEvent', false);
_interactionStates.set('windowBlurredRecently', false);

/**
 * Determine or assert that the window has recently blurred. If a focus event
 * occurs without a preceding keyboard or pointer event, we know it is a virtual
 * event and should use the `'virtual'` modality.
 *
 * @param value - [Optional] A `boolean` indicating whether or not a focus event
 * has occurred with a preceding keyboard or pointer event.
 *
 * @returns A `boolean` indicating whether or not a focus event has occurred
 * with a preceding keyboard or pointer event.
 */
const hasPrefocusEvent = (value?: boolean) => {
	if (value !== undefined) {
		_interactionStates.set('hasPrefocusEvent', value);
	}

	return _interactionStates.get('hasPrefocusEvent') as boolean;
};

/**
 * Determine or assert that the window has recently blurred. This is necessary
 * when tabbing out of the window since a subsequent focus event won't be fired.
 *
 * @param value - [Optional] A `boolean` indicating whether or not the window
 * has recently blurred.
 *
 * @returns A `boolean` indicating whether or not the window has recently
 * blurred.
 */
const windowBlurredRecently = (value?: boolean) => {
	if (value !== undefined) {
		_interactionStates.set('windowBlurredRecently', value);
	}

	return _interactionStates.get('windowBlurredRecently') as boolean;
};

/**
 * Reset the interaction states used to help determine the current interaction
 * modality.
 */
const resetInteractionStates = () => {
	_interactionStates.set('hasPrefocusEvent', false);
	_interactionStates.set('windowBlurredRecently', false);
};

/**
 * Provides a set of functions for managing global interaction states used to
 * determine the current interaction modality.
 */
export const interactionStates = () => ({
	hasPrefocusEvent,
	resetInteractionStates,
	windowBlurredRecently,
});
