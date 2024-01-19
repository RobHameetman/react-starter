import { UseLogInput, useLog as _useLog } from '../useLog';

/**
 * Functional dependencies used in the {@link useLogWarn()} hook. This
 * object is provided in tests for mocking and spying.
 */
export interface UseLogWarnDependencies {
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
 * An input object provided to {@link useLogWarn()} used for destructuring.
 */
export interface UseLogWarnInput extends Input {
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseLogWarnDependencies;
}

/**
 * Used for logging warnings to the console. Warnings are different from errors
 * in that they are tracked in DataDog using log management but not real user
 * monitoring.
 *
 * @example
 * useLogWarn({
 *   message: 'Time to first byte for this endpoint exceeded 500ms',
 * });
 */
export const useLogWarn = ({
	_dependencies = {},
	...input
}: UseLogWarnInput = {}) => {
	const { useLog = _useLog } = _dependencies;

	const { log: warn } = useLog({
		severity: 'warn',
		...input,
	});

	return { warn };
};
