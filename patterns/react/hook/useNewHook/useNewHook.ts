import { dependency as _dependency } from 'dependency';

/**
 * Functional dependencies used in the {@link useNewHook()} hook. This object is
 * provided in tests for mocking and spying.
 */
export interface UseNewHookDependencies {
	/**
	 * @TODO
	 */
	readonly dependency?: typeof _dependency;
}

/**
 * Destructured arguments provided to the {@link useNewHook()} hook.
 */
export interface UseNewHookInput {
	/**
	 * [Optional] @TODO
	 */
	readonly optional?: string;

	/**
	 * @TODO
	 */
	readonly required: string;

	/**
	 * @TODO
	 *
	 * @defaultValue - A no-op function.
	 */
	readonly method: () => string;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseNewHookDependencies;
}

/**
 * @TODO
 *
 * @param input - A {@link UseNewHookInput} object used for destructuring.
 */
export const useNewHook = ({ _dependencies = {} }: UseNewHookInput) => {
	const { dependency = _dependency } = _dependencies;

	/**
	 * @TODO
	 */
	dependency();
};
