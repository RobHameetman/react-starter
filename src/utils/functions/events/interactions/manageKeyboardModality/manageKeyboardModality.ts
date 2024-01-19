import { interactionModalityListeners as _interactionModalityListeners } from '@app/utils/functions/events/interactions/interactionModalityListeners';
import { interactionModality as _interactionModality } from '@app/utils/functions/events/interactions/interactionModality';
import { interactionStates as _interactionStates } from '@app/utils/functions/events/interactions/interactionStates';
import { isUnmodifiedKeypress } from '@app/utils/functions/events/keyboard/isUnmodifiedKeypress';

/**
 * Functional dependencies used in the {@link manageKeyboardModality()}
 * function. This object is provided in tests for mocking and spying.
 */
export interface ManageKeyboardModalityDependencies {
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
 * Destructured arguments provided to the {@link manageKeyboardModality()}
 * function.
 */
export interface ManageKeyboardModalityInput {
	/**
	 * The keyboard event triggering the modality change.
	 */
	readonly event: KeyboardEvent;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: ManageKeyboardModalityDependencies;
}

/**
 * @TODO
 *
 * @param event - A {@link ManageKeyboardModalityInput} object used for
 * destructuring.
 */
export const manageKeyboardModality = ({
	event,
	_dependencies = {},
}: ManageKeyboardModalityInput) => {
	const {
		interactionModality = _interactionModality,
		interactionModalityListeners = _interactionModalityListeners,
		interactionStates = _interactionStates,
	} = _dependencies;

	const { activate } = interactionModalityListeners();
	const { setModality } = interactionModality();
	const { hasPrefocusEvent } = interactionStates();

	hasPrefocusEvent(true);

	if (isUnmodifiedKeypress(event)) {
		setModality('keyboard');
		activate('keyboard', event);
	}
};
