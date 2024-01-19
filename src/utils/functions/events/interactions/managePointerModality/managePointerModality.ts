import { interactionModality as _interactionModality } from '@app/utils/functions/events/interactions/interactionModality';
import { interactionModalityListeners as _interactionModalityListeners } from '@app/utils/functions/events/interactions/interactionModalityListeners';
import { interactionStates as _interactionStates } from '@app/utils/functions/events/interactions/interactionStates';

/**
 * Functional dependencies used in the {@link managePointerModality()} function.
 * This object is provided in tests for mocking and spying.
 */
export interface ManagePointerModalityDependencies {
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
 * Destructured arguments provided to the {@link managePointerModality()}
 * function.
 */
export interface ManagePointerModalityInput {
	/**
	 * The pointer event triggering the modality change.
	 */
	readonly event: PointerEvent;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: ManagePointerModalityDependencies;
}

/**
 * @TODO
 *
 * @param event - A {@link ManagePointerModalityInput} object used for
 * destructuring.
 */
export const managePointerModality = ({
	event,
	_dependencies = {},
}: ManagePointerModalityInput) => {
	const {
		interactionModality = _interactionModality,
		interactionModalityListeners = _interactionModalityListeners,
		interactionStates = _interactionStates,
	} = _dependencies;

	const { activate } = interactionModalityListeners();
	const { getModality, setModality } = interactionModality();
	const { hasPrefocusEvent } = interactionStates();
	const { type } = event;

	if (getModality() !== 'pointer') {
		setModality('pointer');
	}

	if (type === 'mousedown' || type === 'pointerdown') {
		hasPrefocusEvent(true);
		activate('pointer', event);
	}
};
