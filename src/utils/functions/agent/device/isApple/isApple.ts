import { isIOS as _isIOS } from '@app/utils/functions/agent/device/isIOS';
import { isMac as _isMac } from '@app/utils/functions/agent/device/isMac';

/**
 * Functional dependencies used in the {@link isApple()} function. This object
 * is provided in tests for mocking and spying.
 */
export interface IsAppleDependencies {
	/**
	 * Checks if the user is on an iOS device.
	 */
	readonly isIOS?: typeof _isIOS;

	/**
	 * Checks if the user is on a Mac.
	 */
	readonly isMac?: typeof _isMac;
}

/**
 * Destructured arguments provided to the {@link isApple()} function.
 */
export interface IsAppleInput {
	/**
	 * [Optional] Bypass the user agent check.
	 * @defaultValue - `false`
	 */
	readonly bypassUserAgent?: boolean;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: IsAppleDependencies;
}

/**
 * Checks if the user is on an Apple device.
 *
 * @param input - A {@link IsAppleInput} object used for destructuring.
 *
 * @returns A `boolean` which is `true` if the user is on an Apple device.
 */
export const isApple = ({
	bypassUserAgent = false,
	_dependencies = {},
}: IsAppleInput = {}) => {
	const { isIOS = _isIOS, isMac = _isMac } = _dependencies;

	return isMac({ bypassUserAgent }) || isIOS({ bypassUserAgent });
};
