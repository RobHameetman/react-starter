import { interactionStates as _interactionStates } from '@/utils/functions/events/interactions/interactionStates';

/**
 * Functional dependencies used in the {@link handleWindowBlur()} function. This
 * object is provided in tests for mocking and spying.
 */
export interface HandleWindowBlurDependencies {
	/**
	 * @TODO
	 */
	readonly interactionStates?: typeof _interactionStates;
}

/**
 * Destructured arguments provided to the {@link handleWindowBlur()} function.
 */
export interface HandleWindowBlurInput {
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: HandleWindowBlurDependencies;
}

/**
 * @TODO
 *
 * @param input - [Optional] A {@link HandleWindowBlurInput} object used for
 * destructuring.
 */
export const handleWindowBlur = ({
	_dependencies = {},
}: HandleWindowBlurInput = {}) => {
	const { interactionStates = _interactionStates } = _dependencies;
	const { hasPrefocusEvent, windowBlurredRecently } = interactionStates();

	hasPrefocusEvent(false);
	windowBlurredRecently(true);
};
