import { isUndefined } from '@app/utils/functions/check/js/core/isUndefined';
import { criteriaCount as _criteriaCount } from '@app/utils/functions/misc/criteriaCount';
import { hasUserAgentBrand as _hasUserAgentBrand } from '@app/utils/functions/misc/hasUserAgentBrand';

/**
 * Functional dependencies used in the {@link isFirefox()} function. This object
 * is provided in tests for mocking and spying.
 */
export interface IsFirefoxDependencies {
	/**
	 * Filter an array of boolean an expressions and return the count of how many
	 * are `false`.
	 */
	readonly criteriaCount?: typeof _criteriaCount;

	/**
	 * Check if the user agent includes a specific brand string.
	 */
	readonly hasUserAgentBrand?: typeof _hasUserAgentBrand;
}

/**
 * Destructured arguments provided to the {@link isFirefox()} function.
 */
export interface IsFirefoxInput {
	/**
	 * [Optional] Bypass the user agent check.
	 * @defaultValue - `false`
	 */
	readonly bypassUserAgent?: boolean;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: IsFirefoxDependencies;
}

/**
 * Checks if the user's browser is Firefox.
 *
 * @param input - A {@link IsFirefoxInput} object used for destructuring.
 *
 * @returns A `boolean` which is `true` if the user's browser is Firefox.
 */
export const isFirefox = ({
	bypassUserAgent = false,
	_dependencies = {},
}: IsFirefoxInput = {}) => {
	const {
		criteriaCount = _criteriaCount,
		hasUserAgentBrand = _hasUserAgentBrand,
	} = _dependencies;

	if (isUndefined(window)) {
		return false;
	}

	if (!bypassUserAgent) {
		return hasUserAgentBrand(/Firefox/i);
	}

	return (
		criteriaCount([
			/**
			 * @TODO
			 */
		]) >= 1
	);
};
