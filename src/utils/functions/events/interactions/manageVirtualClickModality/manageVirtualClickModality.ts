import { isVirtualClick } from '@app/utils/functions/accessibility/isVirtualClick';
import { interactionModality as _interactionModality } from '@app/utils/functions/events/interactions/interactionModality';
import { interactionStates as _interactionStates } from '@app/utils/functions/events/interactions/interactionStates';

/**
 * Functional dependencies used in the {@link manageVirtualClickModality()}
 * function. This object is provided in tests for mocking and spying.
 */
export interface ManageVirtualClickModalityDependencies {
	/**
	 * @TODO
	 */
	readonly interactionModality?: typeof _interactionModality;

	/**
	 * @TODO
	 */
	readonly interactionStates?: typeof _interactionStates;
}

/**
 * Destructured arguments provided to the {@link manageVirtualClickModality()}
 * function.
 */
export interface ManageVirtualClickModalityInput {
	/**
	 * @TODO
	 */
	readonly event: MouseEvent | PointerEvent;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: ManageVirtualClickModalityDependencies;
}

/**
 * Determines if the event is a virtual click and sets the modality to virtual.
 * This function is called by the `handleGlobalMouseEvents()` function. A
 * virtual click is a click event which is not triggered by actual user
 * interaction with a mouse or pointer.
 *
 * @param input - A {@link ManageVirtualClickModalityInput} object used for
 * destructuring.
 */
export const manageVirtualClickModality = ({
	event,
	_dependencies = {},
}: ManageVirtualClickModalityInput) => {
	const {
		interactionModality = _interactionModality,
		interactionStates = _interactionStates,
	} = _dependencies;

	const { setModality } = interactionModality();
	const { hasPrefocusEvent } = interactionStates();

	if (isVirtualClick({ event })) {
		hasPrefocusEvent(true);
		setModality('virtual');
	}
};
