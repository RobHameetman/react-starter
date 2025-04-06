import { InteractionModality } from '@/utils/enums/InteractionModalities';

/**
 * The current interaction modality in the global application state.
 * @internal
 */
let currentModality: InteractionModality | null = null;

/**
 * A function which retreives the current interaction modality from the global
 * application state.
 * @internal
 *
 * @returns The current interaction modality.
 */
const getModality = () => currentModality;

/**
 * A function which sets the current interaction modality in the global
 * application state.
 * @internal
 *
 * @param modality - The interaction modality to set.
 */
const setModality = (modality: InteractionModality) => {
	currentModality = modality;
};

/**
 * A function which resets the current interaction modality in the global
 * application state.
 */
const resetModality = () => {
	currentModality = null;
};

/**
 * Provides a set of functions for interacting with the current interaction
 * modality in the global application state.
 */
export const interactionModality = () => ({
	getModality,
	setModality,
	resetModality,
});
