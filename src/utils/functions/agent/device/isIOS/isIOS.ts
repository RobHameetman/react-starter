import { isIphone as _isIphone } from '@/utils/functions/agent/device/isIphone';
import { isIpad as _isIpad } from '@/utils/functions/agent/device/isIpad';

/**
 * Functional dependencies used in the {@link isIOS()} function. This object is
 * provided in tests for mocking and spying.
 */
export interface IsIOSDependencies {
	/**
	 * Checks if the user is on an iPhone.
	 */
	readonly isIphone?: typeof _isIphone;

	/**
	 * Checks if the user is on an iPad.
	 */
	readonly isIpad?: typeof _isIpad;
}

/**
 * Destructured arguments provided to the {@link isIOS()} function.
 */
export interface IsIOSInput {
	/**
	 * [Optional] Bypass the user agent check.
	 * @defaultValue - `false`
	 */
	readonly bypassUserAgent?: boolean;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: IsIOSDependencies;
}

/**
 * Checks if the user is on an iOS device.
 *
 * @param input - A {@link IsIOSInput} object used for destructuring.
 *
 * @returns A `boolean` which is `true` if the user is on an iOS device.
 */
export const isIOS = ({
	bypassUserAgent = false,
	_dependencies = {},
}: IsIOSInput = {}) => {
	const { isIphone = _isIphone, isIpad = _isIpad } = _dependencies;

	return isIphone({ bypassUserAgent }) || isIpad({ bypassUserAgent });
};
