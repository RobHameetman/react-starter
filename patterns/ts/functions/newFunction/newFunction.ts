import { dependency as _dependency } from 'dependency';

/**
 * Functional dependencies used in the {@link newFunction()} function. This
 * object is provided in tests for mocking and spying.
 */
export interface NewFunctionDependencies {
	/**
	 * @TODO
	 */
	readonly dependency?: typeof _dependency;
}

/**
 * Destructured arguments provided to the {@link newFunction()} function.
 */
export interface NewFunctionInput {
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
	readonly _dependencies?: NewFunctionDependencies;
}

/**
 * @TODO
 *
 * @param input - A {@link NewFunctionInput} object used for destructuring.
 */
export const newFunction = ({ _dependencies = {} }: NewFunctionInput) => {
	const { dependency = _dependency } = _dependencies;

	/**
	 * @TODO
	 */
	dependency();
};
