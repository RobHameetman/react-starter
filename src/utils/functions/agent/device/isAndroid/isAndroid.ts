import { isChrome as _isChrome } from '@/utils/functions/agent/browser/isChrome';
import { isGecko as _isGecko } from '@/utils/functions/agent/engines/isGecko';
import { isUndefined } from '@/utils/functions/check/js/core/isUndefined';
import { criteriaCount as _criteriaCount } from '@/utils/functions/misc/criteriaCount';
import { hasUserAgentBrand as _hasUserAgentBrand } from '@/utils/functions/misc/hasUserAgentBrand';

/**
 * Functional dependencies used in the {@link isAndroid()} function. This object is
 * provided in tests for mocking and spying.
 */
export interface IsAndroidDependencies {
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

	/**
	 * @TODO
	 */
	readonly isGecko?: typeof _isGecko;
}

/**
 * Destructured arguments provided to the {@link isAndroid()} function.
 */
export interface IsAndroidInput {
	/**
	 * [Optional] Bypass the user agent check.
	 * @defaultValue - `false`
	 */
	readonly bypassUserAgent?: boolean;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: IsAndroidDependencies;
}

/**
 * Checks if the user is on an Android device.
 *
 * @param input - A {@link IsAndroidInput} object used for destructuring.
 *
 * @returns A `boolean` which is `true` if the user is on an Android device.
 */
export const isAndroid = ({
	bypassUserAgent = false,
	_dependencies = {},
}: IsAndroidInput = {}) => {
	const {
		criteriaCount = _criteriaCount,
		hasUserAgentBrand = _hasUserAgentBrand,
		isChrome = _isChrome,
		isGecko = _isGecko,
	} = _dependencies;

	if (isUndefined(window)) {
		return false;
	}

	if (!bypassUserAgent) {
		return hasUserAgentBrand(/Android/i);
	}

	const usingChrome = isChrome({ bypassUserAgent });
	const usingGecko = isGecko({ bypassUserAgent });

	return (
		criteriaCount([
			'orientationchange' in window,
			'orientation' in window,
			usingChrome && !('SharedWorker' in window),
			usingGecko && /android/i.test(navigator.appVersion),
		]) >= 2
	);
};
