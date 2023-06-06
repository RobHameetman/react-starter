import { UseLogInput, useLog as _useLog } from '../useLog';

/**
 * Functional dependencies used in the {@link useLogDebug()} hook. This
 * object is provided in tests for mocking and spying.
 */
export interface UseLogDebugDependencies {
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
 * An input object provided to {@link useLogDebug()} used for destructuring.
 */
export interface UseLogDebugInput extends Input {
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue `{}`
	 */
	readonly _dependencies?: UseLogDebugDependencies;
}

/**
 * Used for logging extra information useful for troubleshooting and debugging.
 * This severity is the lowest priority and is not tracked in DataDog unless the
 * configuration is set explicitly to the highest verbosity.
 *
 * @example
 * useLogDebug({
 *   message: 'Calling API endpoint',
 * });
 */
export const useLogDebug = ({
	_dependencies = {},
	...input
}: UseLogDebugInput = {}) => {
	const { useLog = _useLog } = _dependencies;

	const { log: debug } = useLog({
		severity: 'debug',
		...input,
	});

	return { debug };
};
