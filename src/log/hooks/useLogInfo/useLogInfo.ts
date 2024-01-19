import { UseLogInput, useLog as _useLog } from '../useLog';

/**
 * Functional dependencies used in the {@link useLogInfo()} hook. This
 * object is provided in tests for mocking and spying.
 */
export interface UseLogInfoDependencies {
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
 * An input object provided to {@link useLogInfo()} used for destructuring.
 */
export interface UseLogInfoInput extends Input {
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseLogInfoDependencies;
}

/**
 * Used for logging any information that may be helpful in some contexts but is
 * not necessarily indicative of an error or warning, such as certain methods of
 * user fingerprinting and tracking.
 *
 * @example
 * useLogInfo({
 *   message: 'App failed to load',
 * });
 */
export const useLogInfo = ({
	_dependencies = {},
	...input
}: UseLogInfoInput = {}) => {
	const { useLog = _useLog } = _dependencies;

	const { log: info } = useLog({
		severity: 'info',
		...input,
	});

	return { info };
};
