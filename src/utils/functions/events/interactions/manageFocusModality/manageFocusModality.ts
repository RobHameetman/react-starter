import { interactionModalityListeners as _interactionModalityListeners } from '@/utils/functions/events/interactions/interactionModalityListeners';
import { interactionModality as _interactionModality } from '@/utils/functions/events/interactions/interactionModality';
import { interactionStates as _interactionStates } from '@/utils/functions/events/interactions/interactionStates';

/**
 * Functional dependencies used in the {@link manageFocusModality()} function.
 * This object is provided in tests for mocking and spying.
 */
export interface ManageFocusModalityDependencies {
	/**
	 * @TODO
	 */
	readonly interactionModality?: typeof _interactionModality;

	/**
	 * @TODO
	 */
	readonly interactionModalityListeners?: typeof _interactionModalityListeners;

	/**
	 * @TODO
	 */
	readonly interactionStates?: typeof _interactionStates;
}

/**
 * Destructured arguments provided to the {@link manageFocusModality()}
 * function.
 */
export interface ManageFocusModalityInput {
	/**
	 * The focus event triggering the modality change.
	 */
	readonly event: FocusEvent;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: ManageFocusModalityDependencies;
}

/**
 * @TODO
 *
 * @param event - A {@link ManageFocusModalityInput} object used for
 * destructuring.
 */
export const manageFocusModality = ({
	event,
	_dependencies = {},
}: ManageFocusModalityInput) => {
	const {
		interactionModality = _interactionModality,
		interactionModalityListeners = _interactionModalityListeners,
		interactionStates = _interactionStates,
	} = _dependencies;

	const { activate } = interactionModalityListeners();
	const { setModality } = interactionModality();

	const { hasPrefocusEvent, resetInteractionStates, windowBlurredRecently } =
		interactionStates();

	const { target } = event;

	if (target === window || target === document) {
		return;
	}

	if (!hasPrefocusEvent() && !windowBlurredRecently()) {
		setModality('virtual');
		activate('virtual', event);
	}

	resetInteractionStates();
};
