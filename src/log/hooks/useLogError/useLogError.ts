import { UseLogInput, useLog as _useLog } from '../useLog';

/**
 * Functional dependencies used in the {@link useLogError()} hook. This
 * object is provided in tests for mocking and spying.
 */
export interface UseLogErrorDependencies {
	/**
	 * [Optional] Calculate the position offset of the chat button.
	 */
	readonly useLog?: typeof _useLog;
}

/**
 * Type alias to avoid a second line in the `extends` clause on line `22`.
 */
type Input = Omit<UseLogInput, '_dependencies' | 'severity'>;

/**
 * An input object provided to {@link useLogError()} used for destructuring.
 */
export interface UseLogErrorInput extends Input {
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseLogErrorDependencies;
}

/**
 * Used for logging errors to the console. Errors are tracked in DataDog using
 * both log management and real user monitoring.
 *
 * @example
 * useLogError({
 *   message: 'App failed to load',
 * });
 */
export const useLogError = ({
	_dependencies = {},
	...input
}: UseLogErrorInput = {}) => {
	const { useLog = _useLog } = _dependencies;

	const { log: error } = useLog({
		severity: 'error',
		...input,
	});

	return { error };
};
