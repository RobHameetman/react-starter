import { dependency as _dependency } from 'dependency';

/**
 * Functional dependencies used in the {@link newGenericFunction()} function.
 * This object is provided in tests for mocking and spying.
 */
export interface NewGenericFunctionInputDependencies {
	/**
	 * @TODO
	 */
	readonly dependency?: typeof _dependency;
}

/**
 * Destructured arguments provided to the {@link newGenericFunction()} function.
 *
 * @typeParam `T` - @TODO
 */
export interface NewGenericFunctionInput<T> {
	/**
	 * [Optional] @TODO
	 */
	readonly optional?: T;

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
	readonly _dependencies?: NewGenericFunctionInputDependencies;
}

/**
 * @TODO
 *
 * @typeParam `T` - @TODO
 *
 * @param input - A {@link NewGenericFunctionInput} object used for destructuring.
 */
export const newGenericFunction = <T>({
	_dependencies = {},
}: NewGenericFunctionInput<T>) => {
	const { dependency = _dependency } = _dependencies;

	/**
	 * @TODO
	 */
	dependency();
};
