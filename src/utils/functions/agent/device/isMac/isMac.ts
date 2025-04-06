import { isUndefined } from '@/utils/functions/check/js/core/isUndefined';
import { criteriaCount as _criteriaCount } from '@/utils/functions/misc/criteriaCount';
import { hasUserAgentPlatform as _hasUserAgentPlatform } from '@/utils/functions/misc/hasUserAgentPlatform';

/**
 * Functional dependencies used in the {@link isMac()} function. This object is
 * provided in tests for mocking and spying.
 */
export interface IsMacDependencies {
	/**
	 * Filter an array of boolean an expressions and return the count of how many
	 * are `false`.
	 */
	readonly criteriaCount?: typeof _criteriaCount;

	/**
	 * Check if the user agent includes a specific platform string.
	 */
	readonly hasUserAgentPlatform?: typeof _hasUserAgentPlatform;
}

/**
 * Destructured arguments provided to the {@link isMac()} function.
 */
export interface IsMacInput {
	/**
	 * [Optional] Bypass the user agent check.
	 * @defaultValue - `false`
	 */
	readonly bypassUserAgent?: boolean;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: IsMacDependencies;
}

/**
 * Checks if the user is on a Mac.
 *
 * @param input - A {@link IsMacInput} object used for destructuring.
 *
 * @returns A `boolean` which is `true` if the user is on a Mac.
 */
export const isMac = ({
	bypassUserAgent = false,
	_dependencies = {},
}: IsMacInput = {}) => {
	const {
		criteriaCount = _criteriaCount,
		hasUserAgentPlatform = _hasUserAgentPlatform,
	} = _dependencies;

	if (isUndefined(window)) {
		return false;
	}

	if (!bypassUserAgent) {
		return hasUserAgentPlatform(/^Mac/i);
	}

	return (
		criteriaCount([
			/**
			 * @TODO
			 */
		]) >= 1
	);
};
