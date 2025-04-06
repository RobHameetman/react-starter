import { isEdge as _isEdge } from '@/utils/functions/agent/browser/isEdge';
import { isUndefined } from '@/utils/functions/check/js/core/isUndefined';
import { criteriaCount as _criteriaCount } from '@/utils/functions/misc/criteriaCount';
import { hasUserAgentBrand as _hasUserAgentBrand } from '@/utils/functions/misc/hasUserAgentBrand';

/**
 * Functional dependencies used in the {@link isChrome()} function. This object
 * is provided in tests for mocking and spying.
 */
export interface IsChromeDependencies {
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
	 * Checks if the user's browser is MS Edge.
	 */
	readonly isEdge?: typeof _isEdge;
}

/**
 * Destructured arguments provided to the {@link isChrome()} function.
 */
export interface IsChromeInput {
	/**
	 * [Optional] Bypass the user agent check.
	 * @defaultValue - `false`
	 */
	readonly bypassUserAgent?: boolean;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: IsChromeDependencies;
}

/**
 * Checks if the user's browser is Google Chrome.
 *
 * @param input - A {@link IsChromeInput} object used for destructuring.
 *
 * @returns A `boolean` which is `true` if the user's browser is Google Chrome.
 */
export const isChrome = ({
	bypassUserAgent = false,
	_dependencies = {},
}: IsChromeInput = {}) => {
	const {
		criteriaCount = _criteriaCount,
		hasUserAgentBrand = _hasUserAgentBrand,
		isEdge = _isEdge,
	} = _dependencies;

	if (isUndefined(window)) {
		return false;
	}

	const usingEdge = isEdge({ bypassUserAgent });

	if (!bypassUserAgent) {
		return hasUserAgentBrand(/Chrome/i) && !usingEdge;
	}

	return (
		criteriaCount([
			/**
			 * version 42–85
			 */
			'webkitPersistentStorage' in navigator,
			'webkitTemporaryStorage' in navigator,
			navigator.vendor.indexOf('Google') === 0,
			'BatteryManager' in window,
			'webkitResolveLocalFileSystemURL' in window,
			'webkitSpeechGrammar' in window,
			/**
			 * version ≥ 86
			 */
			!('MediaSettingsRange' in window),
			'RTCEncodedAudioFrame' in window,
			`${window.Intl}` === '[object Intl]',
			`${window.Reflect}` === '[object Reflect]',
		]) >= 3 && !usingEdge
	);
};
