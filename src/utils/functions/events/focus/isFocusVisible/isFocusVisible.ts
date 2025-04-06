import { interactionModality as _interactionModality } from '@/utils/functions/events/interactions/interactionModality';

/**
 * Functional dependencies used in the {@link isFocusVisible()} function. This
 * object is provided in tests for mocking and spying.
 */
export interface IsFocusVisibleDependencies {
	/**
	 * @TODO
	 */
	readonly interactionModality?: typeof _interactionModality;
}

/**
 * Destructured arguments provided to the {@link isFocusVisible()} function.
 */
export interface IsFocusVisibleInput {
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: IsFocusVisibleDependencies;
}

/**
 * Checks the current interaction modality to determine whether or not focus is
 * visible.
 *
 * @param input - [Optional] A {@link IsFocusVisibleInput} object used for
 * destructuring.
 *
 * @returns `true` if focus is visible, `false` otherwise.
 */
export const isFocusVisible = ({
	_dependencies = {},
}: IsFocusVisibleInput = {}) => {
	const { interactionModality = _interactionModality } = _dependencies;
	const { getModality } = interactionModality();

	return getModality() !== 'pointer';
};
