import { isChrome as _isChrome } from '@/utils/functions/agent/browser/isChrome';
import { isUndefined } from '@/utils/functions/check/js/core/isUndefined';
import { criteriaCount as _criteriaCount } from '@/utils/functions/misc/criteriaCount';
import { hasUserAgentBrand as _hasUserAgentBrand } from '@/utils/functions/misc/hasUserAgentBrand';

/**
 * Functional dependencies used in the {@link isWebKit()} function. This object
 * is provided in tests for mocking and spying.
 */
export interface IsWebKitDependencies {
	/**
	 * Filter an array of boolean an expressions and return the count of how many
	 * are `false`.
	 */
	readonly criteriaCount?: typeof _criteriaCount;

	/**
	 * Check if the user agent includes a specific brand string.
	 */
	readonly hasUserAgentBrand?: typeof _hasUserAgentBrand;

	/**
	 * Checks if the user's browser is Google Chrome.
	 */
	readonly isChrome?: typeof _isChrome;
}

/**
 * Destructured arguments provided to the {@link isWebKit()} function.
 */
export interface IsWebKitInput {
	/**
	 * [Optional] Bypass the user agent check.
	 * @defaultValue - `false`
	 */
	readonly bypassUserAgent?: boolean;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: IsWebKitDependencies;
}

/**
 * Checks if the current browser is WebKit-based.
 *
 * @param input - A {@link IsWebKitInput} object used for destructuring.
 *
 * @returns A `boolean` which is `true` if the current browser is WebKit-based.
 */
export const isWebKit = ({
	bypassUserAgent = false,
	_dependencies = {},
}: IsWebKitInput = {}) => {
	const {
		criteriaCount = _criteriaCount,
		hasUserAgentBrand = _hasUserAgentBrand,
		isChrome = _isChrome,
	} = _dependencies;

	if (isUndefined(window)) {
		return false;
	}

	if (!bypassUserAgent) {
		return hasUserAgentBrand(/AppleWebKit/i) && !isChrome();
	}

	return (
		criteriaCount([
			'ApplePayError' in window,
			'CSSPrimitiveValue' in window,
			'Counter' in window,
			navigator.vendor.indexOf('Apple') === 0,
			'getStorageUpdates' in navigator,
			'WebKitMediaKeys' in window,
		]) >= 4
	);
};
